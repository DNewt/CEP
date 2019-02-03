import React, {Component} from 'react';
import ItemForm from './ItemForm';

export default class Item extends Component {

    render () {
        return (
            <div>
                <h1>Add New Item</h1>
                <ItemForm/>
            </div>
        )
    }
}