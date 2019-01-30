import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import uuidv4 from 'uuid/v4';

import ProjectForm from './ProjectForm'
import projectStyles from './projectStyles'
import {getTreeCost} from './projectUtils'
// import {getProjects, createProject} from '../../data'

import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/core/styles'
import { Button, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typeography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { getProjects, createProject } from '../../actions/projects'

class ProjectList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            creatingProject: false
        }
    }

    componentDidMount() {
        this.props.getProjects()
    }

    toggleCreateProjectModal () {
        this.setState({creatingProject: !this.state.creatingProject})
    }

    createProject (project) {
        project.id = uuidv4()
        project.children = []
        this.props.createProject("orgID", project)
        this.toggleCreateProjectModal()
    }

    renderProject(project, key) {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                <Link to={`/dashboard/projects/${project.id}`} style={{textDecoration: 'none'}}>
                    <div style={projectStyles.projectItem}>
                        <h2>{project.name}</h2>
                        <p>Total Cost: ${getTreeCost(project)}</p>
                    </div>
                </Link>
            </Grid>
        )
    }
    
    renderProjectRow (row) {
        return (
            <React.Fragment>
                {row.map((project, key) => {
                    return this.renderProject(project, key)
                })}
            </React.Fragment>
        )
    }

    renderProjects (projects) {
        var components = []
        for (var i = 0; i < projects.length; i+=4) {
            components.push(
                <Grid container item xs={12} spacing={24} key={i}>
                    {this.renderProjectRow(projects.slice(i,i+4))}
                </Grid>
            )
        }
        return components
    }

    renderCreateProjectModal () {
        const {classes} = this.props
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={projectStyles.modal}
                open={this.state.creatingProject}
                onClose={() => {this.toggleCreateProjectModal()}}
            >
                <div className={classes.paper} style={projectStyles.projectForm}>
                    <ProjectForm createProject={this.createProject.bind(this)}/>
                </div>
                
            </Modal>
        )
    }

    getFilteredProjects(query) {
        if (query) {
            return this.props.projects.filter(project => project.name.includes(query))
        } else {
            return this.props.projects
        }
    }


    render () {
        var projects = this.getFilteredProjects(this.state.query)
        return (
            <Typeography>
                <Paper style={{padding: 20}}>
                    <Grid container>                        
                        <Grid item xs={6} sm={8} lg={10}>
                            <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="query">Search</InputLabel>
                                    <Input id="query" name="query" onChange={(e) => {this.setState({query: e.target.value})}} autoComplete="query" autoFocus />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={2} style={{textAlign: "center"}}>                
                            <Button style={{ borderRadius: 30, height: 60, width: 60, top: "50%", transform: "translateY(-50%)", fontSize: 30}}variant="contained" color="primary" onClick={() => {this.toggleCreateProjectModal()}}>+</Button>
                    </Grid>
                    </Grid>
                </Paper>

                {projects && 
                    <div>
                        <Grid container spacing={8} style={{padding: 20}}>
                            {this.renderProjects(projects)}                                
                        </Grid>
                        {this.renderCreateProjectModal()}
                    </div>
                    
                }

            </Typeography>
        )
    }
}

ProjectList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
});  

const mapStateToProps = state => {
    return {
        projects: state.projects.projects
    }
}

const mapDispatchToProps = {
    getProjects,
    createProject
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProjectList));