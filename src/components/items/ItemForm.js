import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import AddResource from './resources/AddResource';
import AddCostItem from './costItems/AddCostItem';
import AddBuildingBlock from './buildingBlocks/AddBuildingBlock';

import {addDummyItem} from '../../data';

class ItemForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: "Resource"
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    createItem(item) {
        item.children = []
        item.title = item.code
        addDummyItem(item)
    }

    renderForm () {
        switch(this.state.type) {
            case "resource":
                return <AddResource handleChange={this.handleChange.bind(this)} createItem={this.props.createItem || this.createItem.bind(this)}/>
            case "cost_item":
                return <AddCostItem handleChange={this.handleChange.bind(this)} createItem={this.props.createItem || this.createItem.bind(this)}/>
            case "building_block":
                return <AddBuildingBlock handleChange={this.handleChange.bind(this)} createItem={this.props.createItem || this.createItem.bind(this)}/>
            default:
                return null;
        }
    }

    render () {
        return (
            <div>
                <FormControl margin="normal" required fullWidth>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Type"
                        name="type"
                        className={this.props.textField}
                        value={this.state.type}
                        onChange={(e) => {this.handleChange(e)}}
                        SelectProps={{
                            MenuProps: {
                                className: this.props.menu,
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
                </FormControl>
                { this.renderForm() }
            </div>
        )
    }
}

const types = [{label: "Cost Item", value: "cost_item"}, {label:"Resource", value:"resource"}, {label:"Building Block", value:"building_block"}]

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

ItemForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemForm)