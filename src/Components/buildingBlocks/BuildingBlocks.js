import React, { Component } from 'react'
import BuildingBlockList from './BuildingBlockList'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import AddBuildingBlock from './AddBuildingBlock'

import moment from 'moment'

import {connect} from 'react-redux';
import {getBuildingBlocks, createBuildingBlock} from '../../actions/buildingBlocks';
const top =  window.innerHeight;
const left = window.innerWidth;



class BuildingBlocks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addingBuildingBlock: false
        }
    }

    componentDidMount () {
        this.props.getBuildingBlocks()
    }

    formatCostItems() {
        var costItems = []
        for (var i = 0; i < this.state.costItems.length; i++) {
            costItems.push(this.state.costItems[i].value)
        }
        return costItems
    }

    addBuildingBlock() {
        var costItem = {
            code: this.state.code,
            description: this.state.description,
            date: moment().format('YYYY-MM-DD'),
            tpApprover: this.state.tpApprover,
            costItems: this.formatCostItems()
        }
        this.props.createBuildingBlock(costItem)
        this.props.getBuildingBlocks()
        this.toggleModal()
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddResource(costItems) {
        console.log(costItems)
        this.setState({
            costItems: costItems
        })
    }

    toggleModal() {
        this.setState({addingBuildingBlock: !this.state.addingBuildingBlock})
    }

    render () {
        const {classes} = this.props
        let style = {
            top: `30`,
            left: `30%`
        }
        
        return (
            
            <div>
                <BuildingBlockList buildingBlocks={this.props.buildingBlocks}/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {this.toggleModal()}}
                >Add Building Block</Button>


                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.addingBuildingBlock}
                    onClose={() => {this.toggleModal()}}
                >
                    <div className={classes.paper} style={style}>
                        <AddBuildingBlock onChange={this.onChange.bind(this)} onAddResource={this.onAddResource.bind(this)}/>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {this.addBuildingBlock()}}
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

BuildingBlocks.propTypes = {
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
    getBuildingBlocks,
    createBuildingBlock
}

const mapStateToProps = state => {
    return {
        buildingBlocks: state.buildingBlocks.buildingBlocks
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BuildingBlocks))