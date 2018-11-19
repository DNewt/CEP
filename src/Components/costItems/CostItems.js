import React, { Component } from 'react'
import CostItemList from './CostItemList'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import AddCostItem from './AddCostItem'

import moment from 'moment'

import {connect} from 'react-redux';
import {getCostItems, createCostItem} from '../../actions/costItems';
const top =  window.innerHeight;
const left = window.innerWidth;



class CostItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addingCostItem: false
        }
    }

    componentDidMount () {
        this.props.getCostItems()
    }

    formatResources() {
        var resources = []
        for (var i = 0; i < this.state.resources.length; i++) {
            resources.push(this.state.resources[i].value)
        }
        return resources
    }

    addCostItem() {
        var resource = {
            code: this.state.code,
            description: this.state.description,
            unit: this.state.unit,
            date: moment().format('YYYY-MM-DD'),
            tpApprover: this.state.tpApprover,
            resources: this.formatResources()
        }
        this.props.createCostItem(resource)
        this.props.getCostItems()
        this.toggleModal()
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddResource(resources) {
        console.log(resources)
        this.setState({
            resources: resources
        })
    }

    toggleModal() {
        this.setState({addingCostItem: !this.state.addingCostItem})
    }

    render () {
        const {classes} = this.props
        let style = {
            top: `30`,
            left: `30%`
        }
        
        return (
            
            <div>
                <CostItemList costItems={this.props.costItems}/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {this.toggleModal()}}
                >Add CostItem</Button>


                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.addingCostItem}
                    onClose={() => {this.toggleModal()}}
                >
                    <div className={classes.paper} style={style}>
                        <AddCostItem onChange={this.onChange.bind(this)} onAddResource={this.onAddResource.bind(this)}/>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {this.addCostItem()}}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {this.toggleModal()}}
                        >
                            Cancel
                        </Button>
                    </div>
                </Modal>
            </div>
        )
    }
}

CostItems.propTypes = {
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

const mapDispatchToProps = {
    getCostItems,
    createCostItem
}

const mapStateToProps = state => {
    return {
        costItems: state.costItems.costItems
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CostItems))