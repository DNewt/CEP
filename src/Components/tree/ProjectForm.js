import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { Button } from '@material-ui/core';


class ProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    onChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render () {
        return (
            <div>
                <FormControl margin="normal" required fullWidth>
                    <TextField 
                        id="outlined-multiline-flexible"
                        onChange={(e) => {this.onChange(e)}}
                        value={this.state.name}
                        label={"Project Name"}
                        name={"name"}
                        className={this.props.textField}
                        variant="outlined"
                    />
                </FormControl>

                <Button variant="contained" color="primary" className={this.props.button} onClick={(e) => {this.props.createProject(this.state)}}>
                    Create Project
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

ProjectForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectForm)