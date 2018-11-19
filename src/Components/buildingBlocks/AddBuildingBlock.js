import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Select from 'react-select'
import {getDummyCostItemOptions} from '../../data'

class AddBuildingBlock extends Component {

    render () {
        const { classes } = this.props;
        var options = getDummyCostItemOptions()
        return (
            <div>
                <div>Add Building Block</div>
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
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.unit}
                        label={"DateModified"}
                        name={"unit"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <TextField
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.tpApprover}
                        label={"TP Approver"}
                        name={"tpApprover"}
                        className={classes.textField}
                        variant="outlined"
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <Select
                        onChange={(costItems) => {this.props.onAddResource(costItems)}}
                        label={"Cost Items"}
                        value={this.props.costItems}
                        name={"Cost Items"}
                        className={classes.textField}
                        variant="outlined"
                        options={options}
                        placeholder={"Add Cost Items..."}
                        isMulti

                    />
                </FormControl>


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

AddBuildingBlock.propTypes = {
    classes: PropTypes.object.isRequired,
};
  

export default withStyles(styles)(AddBuildingBlock)