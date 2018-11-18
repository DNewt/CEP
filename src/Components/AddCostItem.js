import React, {Component} from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

class AddCostItem extends Component {
    render () {
        return (
            <div>
                <div>Add Cost Item</div>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel>Code</InputLabel>
                    <Input 
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.code}
                        placeholder={"Code"}
                        name={"code"}
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Input 
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.type}
                        placeholder={"TODO: This needs to be a dropdown of types"}
                        name={"type"}
                    />
                </FormControl>


                <FormControl margin="normal" required fullWidth>
                    <InputLabel>Description</InputLabel>
                    <Input 
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.description}
                        placeholder={"Description"}
                        name={"description"}
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>                
                    <InputLabel>Currency</InputLabel>
                    <Input 
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.currency}
                        placeholder={"Currency"}
                        name={"currency"}
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>                
                    <InputLabel>Units</InputLabel>
                    <Input 
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.units}
                        name={"units"}
                        type={"number"}
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <InputLabel>Cost</InputLabel>
                    <Input 
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.cost}
                        name={"cost"}
                        type={"number"}
                    />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                    <InputLabel>TP Approver</InputLabel>
                    <Input 
                        onChange={(e) => {this.props.onChange(e)}}
                        value={this.props.tpApprover}
                        placeholder={"TP Approver"}
                        name={"tpApprover"}
                    />
                </FormControl>
            </div>
        )
    }
}

export default AddCostItem