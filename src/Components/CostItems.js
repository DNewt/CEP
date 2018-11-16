import React, { Component } from 'react'
import CostItemList from './CostItemList'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import AddCostItem from './AddCostItem'

class CostItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addingCostItem: false
        }
    }

    toggleModal() {
        this.setState({addingCostItem: !this.state.addingCostItem})
    }

    render () {
        const {classes} = this.props
        let style = {
            margin: "auto"
        }
        
        return (
            <div>
                <CostItemList />
                <Button
                    variant="raised"
                    color="primary"
                    onClick={() => {this.toggleModal()}}
                >Add CostItem</Button>


                <Modal
                    style={{justifyContent:'center'}}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.addingCostItem}
                    onClose={() => {this.toggleModal()}}
                >
                    <div className={classes.paper} style={style}>
                        <AddCostItem />
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

export default withStyles(styles)(CostItems)