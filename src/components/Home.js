import React from 'react';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import img1 from './images/img1.jpeg'
import "../styles/common.css";

import {Carousel} from "react-bootstrap";

import Translatable from './Translatable'

class Home extends Translatable {
    render() {
        return (
            <div className="home-wrapper">
                <section style={{background:"#EAF0CE"}}>
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col className="my-auto">
                                <h1>{this.translate("home.welcom")}</h1>
                                <h3>{this.translate("home.about")}</h3>
                            </Col>
                        </Row>
                    </Container>
                </section >
                <section style={{background:"#C0C5C1"}}>
                    <Carousel>
                        <Carousel.Item cinterval={1000}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                                style={{maxHeight: 800, maxWidth: 1000}}
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section style={{background:"#7D8491"}}>
                <Container className="h-100">
                        <Row className="h-100 align-items-center">
                            <Col md="3" className="my-auto">
                                <img src="https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png" className="w-100" alt="Image"/>
                            </Col>
                            <Col md>
                                <Row>
                                    <h3 className="w-100 text-left">First name Second name</h3>
                                    <h5 className="w-100 text-left">Years of live</h5>
                                </Row>
                                <Row>
                                    <p className="w-100 text-left">Short information</p>
                                    <Button className="btn btn-primary w-25 ml-auto" variant="outline-dark">{this.translate("button.read")}</Button>
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