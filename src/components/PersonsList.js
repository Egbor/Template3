import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Translatable from './Translatable'
import PersonsBase from '../base/persons.json';

class PersonsList extends Translatable {
    renderItem(person) {
        return(
            <ListGroup.Item className={"text-left " + this.props.className}><a className={this.props.className} href={"/person#" + person.id}>{this.translate("persons." + person.id + ".name")}</a></ListGroup.Item>
        );
    }

    render() {
        return (
            <ListGroup className={this.props.className} variant="flush" id={this.props.id}>
                {PersonsBase.map(this.renderItem, this)}
            </ListGroup>
        );
    }
}

export default PersonsList;