import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "../styles/common.css";

class Home extends React.Component {
    render() {
        return (
            <div className="home-wrapper">
                <section style={{background:"#7FE597"}}>
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col className="my-auto">
                                <h1>Welcom</h1>
                                <h3>About site</h3>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section style={{background:"#3CCA5E"}}>
                <Container className="h-100">
                        <Row className="h-100 align-items-center">
                            <Col md="3" className="my-auto">
                                <img src="https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png" class="w-100" alt="Image"/>
                            </Col>
                            <Col md>
                                <Row>
                                    <h3 className="w-100 text-left">First name Second name</h3>
                                    <h5 className="w-100 text-left">Years of live</h5>
                                </Row>
                                <Row>
                                    <p className="w-100 text-left">Short information</p>
                                    <Button className="btn btn-primary w-25 ml-auto">Read</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Home;