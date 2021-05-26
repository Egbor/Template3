import React from 'react'
import { ListGroup } from 'react-bootstrap';

import Translatable from './Translatable'
import PersonsBase from '../base/persons.json';

class PersonsList extends Translatable {
    constructor(props) {
        super(props);

        //this.renderItem = this.renderItem.bind(this);
    }

    renderItem(person) {
        return(
            <ListGroup.Item className="text-left"><a href={"/person#" + person.id}>{this.translate("persons." + person.id + ".name")}</a></ListGroup.Item>
        );
    }

    render() {
        return (
            <ListGroup variant="flush" id={this.props.id}>
                {PersonsBase.map(this.renderItem, this)}
            </ListGroup>
        );
    }
}

export default PersonsList;