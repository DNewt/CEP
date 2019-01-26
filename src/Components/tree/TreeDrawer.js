import React, {Component} from 'react';
import PropTypes from 'prop-types'

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/core/styles'

import SortableTree from 'react-sortable-tree';
// import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import MinimalTheme from 'react-sortable-tree-theme-minimal';

import {getItems} from '../../data';
import 'react-sortable-tree/style.css';
import treeStyles from './TreeStyle';

import ItemForm from '../items/ItemForm';

class TreeDrawer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCreateItemModal: false
        }
    }
    
    componentDidMount() {
        var projectID = window.location.href.split('/').pop()
        this.setState({treeData: getItems(projectID)})
    }

    // Likely broken as shit, needs more testing. Also probably not necessary at all
    // findItemInTree(lookingFor, items) {
    //     if(!items || items.length === 0) { return; }
    //     for (var i = 0; i < items.length; i++) {
    //         var item = items[i]
    //         if (item.id === lookingFor.id) {
    //             return item
    //         } else {
    //             return this.findItemInTree(lookingFor, item.children)
    //         }
    //     }
    // }

    itemCreated(item) {
        this.toggleCreateItemModal()
        item.title = item.code
        item.children = []

        var data = this.state.treeData
        var node = this.state.currentNode

        if (node) {
            node.node.children ? node.node.children.push(item) : node.node.children = [item]
        } else {
            data.push(item)
        }

        this.setState({treeData: data})
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

    getTreeCost(node) {
        var cost = 0
        if (node.cost && node.units > 0) {
            cost = node.cost * node.units
        }

        if (!node.children || node.children.length === 0) { 
            return cost;
        } else {
            for (var i = 0; i < node.children.length; i++) {
                cost += this.getTreeCost(node.children[i])
            }
            return cost;
        }
    }

    getTreeReport(node, depth) {
        var report = "\t".repeat(depth) + node.code
        if (node.cost && node.units > 0) {
            report += ` - $${node.cost * node.units}`
        }
        report += "\n"

        if (!node.children || node.children.length === 0) { 
            return report;
        } else {
            for (var i = 0; i < node.children.length; i++) {
                report += this.getTreeReport(node.children[i], depth+1)
            }
            return report;
        }
    }

    renderNodeView(node) {
        return (
            <div style={treeStyles.nodeView}>
                <h2>{node.title}</h2>
                <p>{node.description}</p>
                <p style={{whiteSpace: 'pre'}}>{this.getTreeReport(node, 0)}</p>
                <p>Total: ${this.getTreeCost(node)}</p>
                <button onClick={() => {this.toggleCreateItemModal()}}>Add</button>
            </div>    
        )
    }

    renderProjectView() {
        return (
            <div style={treeStyles.nodeView}>
                {/* <h2>{node.title}</h2> */}
                {/* <p>{node.description}</p> */}
                {/* <p style={{whiteSpace: 'pre'}}>{this.getTreeReport(node, 0)}</p> */}
                {/* <p>Total: ${this.getTreeCost(node)}</p> */}
                <button onClick={() => {this.toggleCreateItemModal()}}>Add</button>
            </div>  
        )
    }

    render() {
        const {classes} = this.props
        return (
            <div style={{height: "100%"}}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="query">Search</InputLabel>
                    <Input id="query" style={treeStyles.search} name="query" onChange={(e) => {this.onSearch(e)}} autoComplete="query" autoFocus />
                </FormControl>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                    canDrag={({ node }) => !node.noDragging}
                    canDrop={({ nextParent }) => !nextParent || !nextParent.children}
                    theme={MinimalTheme}
                    generateNodeProps={(node) => ({
                        onClick: () => this.nodeClicked(node)
                    })}
                    searchQuery={this.state.query}
                    onlyExpandSearchedNodes={true}
                />
                { this.state.currentNode ?
                    this.renderNodeView(this.state.currentNode.node)  
                    :
                    this.renderProjectView()          
                }

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={treeStyles.modal}
                    open={this.state.showCreateItemModal}
                    onClose={() => {this.toggleCreateItemModal()}}
                >
                    <div className={classes.paper}>
                        <ItemForm createItem={this.itemCreated.bind(this)}/>
                    </div>
                    
                </Modal>

            </div>

        )
    }
}

TreeDrawer.propTypes = {
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

export default withStyles(styles)(TreeDrawer);