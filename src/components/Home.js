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
import PersonsBase from '../base/persons.json';

const PERSON_OF_THE_DAY = 4;

class Home extends Translatable {
    render() {
        return (
            <div className="home-wrapper">
                <section>
                    <Carousel className="h-100">
                        <Carousel.Item>
                            <Image src={img1} className="w-100"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={img2} className="w-100"/>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section className="inner-scetion about background-color-yellow">
                    <Container>
                        <div className="about-frame box-shadow  background-color-dark">
                            <div>
                            <h3 className="color-title">{this.translate("home.aboutTitle")}</h3>
                            <p className="text-center">{this.translate("home.aboutInfo")}</p>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="inner-section person-of-the-day background-color-dark">
                    <Container className="h-100">
                        <Row className="align-items-center h-100">
                            <Col md className="mx-auto">
                                <Image src={this.translate("persons." + PersonsBase[PERSON_OF_THE_DAY].id + ".photo")} className="w-100" alt="https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png"/>
                            </Col>
                            <Col md="7" className="mx-auto">
                                <Row>
                                    <h3 className="w-100 text-left color-title">{this.translate("persons." + PersonsBase[PERSON_OF_THE_DAY].id + ".name")}</h3>
                                    <h5 className="w-100 text-left">{this.translate("persons." + PersonsBase[PERSON_OF_THE_DAY].id + ".yol")}</h5>
                                </Row>
                                <Row>
                                    <p className="w-100 text-justify">{this.translate("persons." + PersonsBase[PERSON_OF_THE_DAY].id + ".short")}</p>
                                    <Button href={"#/person#" + PersonsBase[PERSON_OF_THE_DAY].id} className="btn-yellow btn w-25 ml-auto">{this.translate("button.read")}</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="inner-section developers background-color-yellow">
                    <Container className="d-flex justify-content-around h-100">
                        <Row className="h-100">
                            <Col md className="my-auto">
                                <Card className="p-3 mx-auto box-shadow background-color-dark">
                                    <span className="card-img-wrapper">
                                        <Card.Img variant="top" src={first}/>
                                    </span>
                                    <Card.Body>
                                        <Card.Title className="color-title">{this.translate("footer.developer1.name")}</Card.Title>
                                        <Card.Text>{this.translate("footer.developer1.contributer")}</Card.Text>
                                        <Card.Link href="https://github.com/Egbor">
                                            <i class="fa fa-github" aria-hidden="true"></i>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md className="my-auto">
                                <Card className="p-3 my-auto mx-auto box-shadow background-color-dark">
                                    <span className="card-img-wrapper">
                                        <Card.Img variant="top" src={second}/>
                                    </span>
                                    <Card.Body>
                                        <Card.Title className="color-title">{this.translate("footer.developer2.name")}</Card.Title>
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