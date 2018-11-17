import React, { Component } from 'react'
import ResourceList from './ResourceList'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import AddResource from './AddResource'

class Resources extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addingResource: false
        }
    }

    toggleModal() {
        this.setState({addingResource: !this.state.addingResource})
    }

    render () {
        const {classes} = this.props
        let style = {
            top: `30%`,
            left: `30%`
        }
        
        return (
            <div>
                <ResourceList />
                <Button
                    variant="raised"
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
                        <AddResource />
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

export default withStyles(styles)(Resources)