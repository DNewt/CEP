import React, {Component} from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { Button } from '@material-ui/core';

class AddResource extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: "",
            type: "",
            description: "",
            currency: "",
            units: 0,
            cost: 0,
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
                <div>Resource</div>
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
                        select
                        label="Type"
                        name="type"
                        className={classes.textField}
                        value={this.state.type}
                        onChange={(e) => {this.onChange(e)}}
                        variant="outlined"
                    >
                    {types.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
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
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.currency}
                        label={"Currency"}
                        name={"currency"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>                
                    <TextField 
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.units}
                        name={"units"}
                        label={"Units"}
                        type={"number"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <TextField 
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.cost}
                        name={"cost"}
                        label={"Cost"}
                        type={"number"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <TextField 
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.tpApprover}
                        label={"TP Approver"}
                        name={"tpApprover"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <Button variant="contained" color="primary" className={classes.button} onClick={(e) => {this.props.createItem(this.state)}}>
                    Add Resource
                </Button>
            </div>
        )
    }

    
}

const types = [
    {
        value: 'Finance',
        label: 'Finance',
    },
    {
        value: 'Land',
        label: 'Land',
    },
    {
        value: 'Major Plant',
        label: 'Major Plant',
    },
    {
        value: 'Internal Labour',
        label: 'Internal Labour',
    },
    {
        value: 'Design',
        label: 'Design',
    },
    {
        value: 'External Labour',
        label: 'External Labour',
    },
    {
        value: 'Equipment',
        label: 'Equipment',
    },
    {
        value: 'Crews',
        label: 'Crews',
    },
    {
        value: 'Materials',
        label: 'Materials',
    },
];

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

AddResource.propTypes = {
    classes: PropTypes.object.isRequired,
};
  

export default withStyles(styles)(AddResource)