import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import AddResourceForm from './AddResourceForm'

class AddResource extends Component {

    render () {
        const { classes } = this.props;

        return (
            <div>
                <div>Add Resource</div>
                <FormControl margin="normal" required fullWidth>
                    <TextField 
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.code}
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
                        value={this.props.type}
                        onChange={(e) => {this.props.onChange(e)}}
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
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.description}
                        label={"Description"}
                        name={"description"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>                
                    <TextField 
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.currency}
                        label={"Currency"}
                        name={"currency"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>                
                    <TextField 
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.units}
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
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.cost}
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
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.tpApprover}
                        label={"TP Approver"}
                        name={"tpApprover"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>
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