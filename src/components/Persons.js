import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import "../styles/common.css";
import "../styles/persons.css";

class Persons extends React.Component {
    matchPerson(source, item) {
        let sourceString = source.trim().toLowerCase();
        let personString = item.getElementsByTagName("a")[0].innerHTML.trim().toLowerCase();
    
        if (personString.includes(sourceString)) {
            item.style.display = "block";
        } else {
            item.style.display = "none"
        }
    }
    
    resetPerson(item) {
        item.style.display = "block"
    }
    
    getPersonsList() {
        let personsList = document.getElementById("personslist");
        return personsList.getElementsByClassName("list-group-item");
    }
    
    getSearchString() {
        return document.getElementById("form1").value;
    }
    
    startSearch() {
        let source = this.getSearchString();
        let persons = this.getPersonsList();
        for (let i = 0; i < persons.length; i++) {
            this.matchPerson(source, persons[i]);
        }
    }
    
    resetSearch() {
        let persons = this.getPersonsList();
        for (let i = 0; i < persons.length; i++) {
            this.resetPerson(persons[i]);
        }
    }
    
    onClickSearchButton() {
        let source = this.getSearchString();
        if (source.localeCompare("") !== 0) {
            this.startSearch();
        }
    }
    
    onChangeSearchBox() {
        let source = this.getSearchString();
        if (source.localeCompare("") === 0) {
            this.resetSearch();
        }
    }
    
    onKeyUpSearchBox(event) {
        let key = event.key;
        if (key === "Enter") {
            this.onClickSearchButton();
        }
        if (key === "Backspace" || key === "Delete") {
            this.onChangeSearchBox();
        }
    }

    render() {
        return (
            <section>
                <Container>
                    <Row>
                        <div className="search-form input-group justify-content-center">
                            <Form.Control type="search" id="form1" placeholder="serach" onChange={(e) => this.onChangeSearchBox(e)} onKeyUp={(e) => this.onKeyUpSearchBox(e)}/>
                            <span>
                                <Button className="btn btn-primary" onClick={(e) => this.onClickSearchButton(e)}>
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </Button>
                            </span>
                        </div>
                    </Row>
                    <Row>
                        <ListGroup variant="flush" id="personslist">
                            <ListGroup.Item className="text-left"><a href="#person">Person 1</a></ListGroup.Item>
                            <ListGroup.Item className="text-left"><a href="#person">Person 2</a></ListGroup.Item>
                            <ListGroup.Item className="text-left"><a href="#person">Person 3</a></ListGroup.Item>
                            <ListGroup.Item className="text-left"><a href="#person">Person 4</a></ListGroup.Item>
                            <ListGroup.Item className="text-left"><a href="#person">Perosn 15</a></ListGroup.Item>
                            <ListGroup.Item className="text-left"><a href="#person">Test</a></ListGroup.Item>
                        </ListGroup>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Persons;