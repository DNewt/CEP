import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import uuidv4 from 'uuid/v4';

import ProjectForm from './ProjectForm'
import treeStyles from './TreeStyle'
import {getProjects, createProject} from '../../data'

import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';

class TreeList extends Component {

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
            <div>
                <Link to={`/dashboard/trees/${project.id}`}>
                    <Button>{project.name}</Button>
                </Link>
            </div>
        )
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

    render () {
        return (
            <div>
                {this.state.projects.map((project, key) => {return this.renderProject(project, key)})}
                <Button onClick={() => {this.toggleCreateProjectModal()}}>Create Project</Button>
                {this.renderCreateProjectModal()}
            </div>
        )
    }
}

TreeList.propTypes = {
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

export default withStyles(styles)(TreeList);