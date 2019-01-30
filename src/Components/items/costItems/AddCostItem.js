import React, {Component} from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';


class AddCostItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: "",
            description: "",
            units: 0,
            tpApprover: ""
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render () {
        const { classes } = this.props;
        return (
            <div>
                <div>Cost Item</div>
                <FormControl margin="normal" required fullWidth>
                    <TextField 
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.code}
                        label={"Code"}
                        name={"code"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <TextField
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.description}
                        label={"Description"}
                        name={"description"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>


                <FormControl margin="normal" required fullWidth>
                    <TextField
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.units}
                        label={"Unit of Measure"}
                        name={"units"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <TextField
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.tpApprover}
                        label={"TP Approver"}
                        name={"tpApprover"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <Button variant="contained" color="primary" className={classes.button} onClick={(e) => {this.props.createItem(this.state)}}>
                    Add Cost Item
                </Button>

            </div>
        )
    }
}

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

AddCostItem.propTypes = {
    classes: PropTypes.object.isRequired,
};
  

export default withStyles(styles)(AddCostItem)