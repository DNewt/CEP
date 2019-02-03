import React, {Component} from 'react';
import PropTypes from 'prop-types'

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typeography from '@material-ui/core/Typography';

import SortableTree from 'react-sortable-tree';
// import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import MinimalTheme from 'react-sortable-tree-theme-minimal';
import 'react-sortable-tree/style.css';
import projectStyles from './projectStyles';
import {getTreeCost, getTreeReport} from './projectUtils';
import ItemForm from '../items/ItemForm';
import { Paper, Button } from '@material-ui/core';

import {getProject, editProject} from '../../actions/projects';
import {connect} from 'react-redux';

class ProjectDrawer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCreateItemModal: false
        }
    }
    
    componentDidMount() {
        var projectID = window.location.href.split('/').pop()
        this.props.getProject(projectID)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({project: nextProps.project})
    }

    saveProject() {
        this.props.editProject(this.state.project)
    }

    itemCreated(item) {
        this.toggleCreateItemModal()
        item.title = item.code
        item.children = []

        var project = this.state.project
        var node = this.state.currentNode

        if (node) {
            node.node.children ? node.node.children.push(item) : node.node.children = [item]
        } else {
            project.children.push(item)
        }

        // stupid hack to force tree update - creating a new object instead of reference..
        this.setState({project: JSON.parse(JSON.stringify(project))})
    }

    nodeClicked(node) {
        this.setState({currentNode: node});
    }

    toggleCreateItemModal() {
        this.setState({showCreateItemModal: !this.state.showCreateItemModal})
    }

    onSearch(e) {
        this.setState({query: e.target.value})
    }

    renderNodeView(node) {
        return (
            <Typeography>
                <h2>{node.title}</h2>
                <p>{node.description}</p>
                <p style={{whiteSpace: 'pre'}}>{getTreeReport(node, 0)}</p>
                <p>Total: ${getTreeCost(node)}</p>
                <Button variant="contained" color="primary" onClick={() => {this.toggleCreateItemModal()}}>Add</Button>
            </Typeography>    
        )
    }

    renderProjectView() {
        return (
            <Paper style={projectStyles.projectView}>
                {this.state.project && 
                    <Typeography style={{padding: 20}}>
                        <h1>{this.state.project.title}</h1>
                        <p>Total Cost: ${getTreeCost(this.state.project)}</p>
                        <Button variant="contained" color="primary" onClick={() => {this.toggleCreateItemModal()}}>Add</Button>
                        <Button variant="contained" color="primary" onClick={() => {this.saveProject()}}>Save</Button>
                    </Typeography>
                }
                {this.state.currentNode &&
                    <div style={{padding: 20}}>
                        {this.renderNodeView(this.state.currentNode.node)}                    
                    </div>
                }
            </Paper>
        )
    }

    renderTreeView() {
        return (
            <div style={{padding: 20, height: '100%'}}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="query">Search</InputLabel>
                    <Input id="query" style={projectStyles.search} name="query" onChange={(e) => {this.onSearch(e)}} autoComplete="query" autoFocus />
                </FormControl>
                <Typeography style={{height: '100%'}}>
                    <SortableTree
                        treeData={this.state.project && this.state.project.children}
                        onChange={treeData => {
                            var project = this.state.project
                            project.children = treeData
                            this.setState({project: project})
                        }}
                        canDrag={({ node }) => !node.noDragging}
                        canDrop={({ nextParent }) => true}
                        theme={MinimalTheme}
                        generateNodeProps={(node) => ({
                            onClick: () => this.nodeClicked(node)
                        })}
                        searchQuery={this.state.query}
                        onlyExpandSearchedNodes={true}
                    />
                </Typeography>
            </div>
        )
    }

    render() {
        const {classes} = this.props
        return (
            <div style={{height: "100%"}}>
                <Grid container style={{height: "100%"}}>
                    <Grid item xs={2}>
                        {this.renderProjectView()}                    
                    </Grid>
                    <Grid item xs={10}>
                        {this.renderTreeView()}
                    </Grid>                
                </Grid>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={projectStyles.modal}
                    open={this.state.showCreateItemModal}
                    onClose={() => {this.toggleCreateItemModal()}}
                >
                    <div className={classes.paper} style={projectStyles.itemForm}>
                        <ItemForm createItem={this.itemCreated.bind(this)}/>
                    </div> 
                </Modal>
            </div>

        )
    }
}

ProjectDrawer.propTypes = {
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
        project: state.projects.project,
        loading: state.projects.loading
    }
}

const mapDispatchToProps = {
    getProject,
    editProject
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProjectDrawer));