import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 250
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

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
  



class OutlinedTextFields extends React.Component {
 
  state = {
    multiline: '',
    type: 'Finance'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-select-currency"
                select
                label="Type"
                className={classes.textField}
                value={this.state.type}
                onChange={this.handleChange('type')}
                SelectProps={{
                    MenuProps: {
                    className: classes.menu,
                    },
                }}
                margin="normal"
                variant="outlined"
                >
                {types.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
                <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                rowsMax="4"
                value={this.state.multiline}
                onChange={this.handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                />
                <TextField
                id="outlined-dense"
                label="Currency"
                className={classNames(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                />
                <TextField
                id="outlined-dense"
                label="Unit"
                className={classNames(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                />
                <TextField
                id="outlined-dense"
                label="Cost"
                className={classNames(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                />
                <TextField
                id="outlined-dense"
                label="TP Approver"
                className={classNames(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                />
            </form>
            <div>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Accept
                </Button>
            </div>
        </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);