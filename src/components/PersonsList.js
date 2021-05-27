import React from 'react'
import { ListGroup } from 'react-bootstrap';
import {Card} from "react-bootstrap";
import Translatable from './Translatable'
import PersonsBase from '../base/persons.json';

class PersonsList extends Translatable {
    constructor(props) {
        super(props);

        //this.renderItem = this.renderItem.bind(this);
    }

    renderItem(person) {
        return(
            // <Card border="dark">
            //     <Card.Header><a href={"/person#" + person.id}>{this.translate("persons." + person.id + ".name")}</a></Card.Header>
            //     <Card.Body>
            //         <Card.Title>Special title treatment</Card.Title>
            //         <Card.Text>
            //             With supporting text below as a natural lead-in to additional content.
            //         </Card.Text>
            //     </Card.Body>
            // </Card>
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