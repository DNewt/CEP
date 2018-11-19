import React, { Component } from 'react'
import ResourceList from './ResourceList'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import AddResource from './AddResource'

import moment from 'moment'

import {getResources, createResource} from '../../actions/resources'
import { connect } from 'react-redux';

class Resources extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addingResource: false,
            code: "",
            type: "",
            description: "",
            currency: "",
            units: "",
            cost: "",
            date: "",
            tpApprover: ""
        }
    }

    componentDidMount() {
        this.props.getResources("");
    }

    addResource() {
        var resource = {
            code: this.state.code,
            type: this.state.type,
            description: this.state.description,
            currency: this.state.currency,
            units: this.state.units,
            cost: this.state.cost,
            date: moment().format('YYYY-MM-DD'),
            tpApprover: this.state.tpApprover
        }
        this.props.createResource(resource)
        this.toggleModal()
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleModal() {
        this.setState({addingResource: !this.state.addingResource})
    }

    render () {
        const {classes} = this.props
        let style = {
            top: `30`,
            left: `30%`
        }
        
        return (
            <div>
                <ResourceList resources={this.props.resources}/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {this.toggleModal()}}
                >Add Resource</Button>


                <Modal
                    style={{justifyContent:'center'}}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.addingResource}
                    onClose={() => {this.toggleModal()}}
                >
                    <div className={classes.paper} style={style}>
                        <AddResource 
                            onChange={this.onChange.bind(this)}
                            code= {this.state.code}
                            type={this.state.type}
                            description= {this.state.description}
                            currency= {this.state.currency}
                            units= {this.state.units}
                            cost= {this.state.cost}
                            date= {this.state.date}
                            tpApprover={this.state.tpApprover}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {this.addResource()}}
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

Resources.propTypes = {
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
    getResources,
    createResource
}

const mapStateToProps = state => {
    return {
        resources: state.resources.resources
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Resources))
