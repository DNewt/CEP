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
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});



class OutlinedTextFields extends React.Component {

  state = {
    multiline: ''
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
            id="outlined-normal"
            label="UnitOfMeasure"
            className={classNames(classes.textField)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-normal"
            label="TP Approver"
            className={classNames(classes.textField)}
            margin="normal"
            variant="outlined"
          />
        </form>
        <div>
          <Button variant="contained" color="primary" className={classes.button}>
              Add Resource
          </Button>
        </div>
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