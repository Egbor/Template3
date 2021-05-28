import React from 'react';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import first from './images/Borsukov.png';
import second from './images/Sementsova.png';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';

import "../styles/common.css";
import "../styles/home.css";

import Translatable from './Translatable'

class Home extends Translatable {
    render() {
        return (
            <div className="home-wrapper">
                {/* <section style={{background:"#EAF0CE"}}>
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col className="my-auto">
                                <h1>{this.translate("home.welcom")}</h1>
                                <h3>{this.translate("home.about")}</h3>
                            </Col>
                        </Row>
                    </Container>
                </section > */}
                <section style={{background:"#C0C5C1"}}>
                    <Carousel className="h-100">
                        <Carousel.Item>
                                <Image src={img1} className="w-100"/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                <Image src={img2} className="w-100"/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section style={{background:"#7D8491"}}>
                    <Container className="h-100">
                        <Row className="align-items-center h-100">
                            <Col md className="mx-auto">
                                <img src="https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png" className="w-100" alt="Image"/>
                            </Col>
                            <Col md="7" className="mx-auto">
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
                <section>
                <Container className="d-flex justify-content-around h-100">
                    <Row className="h-100">
                        <Col md className="my-auto">
                            <Card className="p-3 mx-auto">
                                <span className="card-img-wrapper">
                                    <Card.Img variant="top" src={first}/>
                                </span>
                                <Card.Body>
                                    <Card.Title>{this.translate("footer.developer1.name")}</Card.Title>
                                    <Card.Text>{this.translate("footer.developer1.contributer")}</Card.Text>
                                    <Card.Link href="https://github.com/Egbor">
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md className="my-auto">
                            <Card className="p-3 my-auto mx-auto">
                                <span className="card-img-wrapper">
                                    <Card.Img variant="top" src={second}/>
                                </span>
                                <Card.Body>
                                    <Card.Title>{this.translate("footer.developer2.name")}</Card.Title>
                                    <Card.Text>{this.translate("footer.developer2.contributer")}</Card.Text>
                                    <Card.Link href="https://github.com/sssplinter">
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </section>
            </div>
        );
    }
}

export default Home;