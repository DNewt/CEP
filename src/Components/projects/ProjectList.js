import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import uuidv4 from 'uuid/v4';

import ProjectForm from './ProjectForm'
import treeStyles from './ProjectStyles'
import {getProjects, createProject} from '../../data'

import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class ProjectList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            creatingProject: false
        }
    }

    componentDidMount() {
        var projects = getProjects();
        this.setState({projects})
    }

    toggleCreateProjectModal () {
        this.setState({creatingProject: !this.state.creatingProject})
    }

    createProject (project) {
        project.id = uuidv4()
        project.children = []
        createProject(project)
        this.toggleCreateProjectModal()
    }

    renderProject(project, key) {
        return (
            <Grid item xs={3}>
                <Link to={`/dashboard/projects/${project.id}`} style={{textDecoration: 'none'}}>
                    <div style={treeStyles.projectItem}>
                        {project.name}
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
                <Grid container item xs={12} spacing={24}>
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
                style={treeStyles.modal}
                open={this.state.creatingProject}
                onClose={() => {this.toggleCreateProjectModal()}}
            >
                <div className={classes.paper}>
                    <ProjectForm createProject={this.createProject.bind(this)}/>
                </div>
                
            </Modal>
        )
    }

    getFilteredProjects(query) {
        if (query) {
            return this.state.projects.filter(project => project.name.includes(query))
        }
        else {
            return this.state.projects
        }
    }


    render () {
        var projects = this.getFilteredProjects(this.state.query)
        return (
            <div style={{padding: 20}}>
                <Grid container>
                    <Grid item xs={10}>
                        <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="query">Search</InputLabel>
                                <Input id="query" name="query" onChange={(e) => {this.setState({query: e.target.value})}} autoComplete="query" autoFocus />
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} style={{textAlign: "center"}}>                
                        <Button style={{top: "50%", transform: "translateY(-50%)"}}variant="contained" color="primary" onClick={() => {this.toggleCreateProjectModal()}}>Create Project</Button>
                    </Grid>
                </Grid>

                <Grid container spacing={8}>
                    {this.renderProjects(projects)}                                
                </Grid>
                {this.renderCreateProjectModal()}
            </div>
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

export default withStyles(styles)(ProjectList);