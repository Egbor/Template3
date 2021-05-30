import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";

import "../styles/common.css";
import "../styles/person.css";

import Translatable from './Translatable';
import PersonsBase from '../base/persons.json';

class Person extends Translatable {
    getId() {
        let personId = window.location.hash.substring(window.location.hash.lastIndexOf("#") + 1);
        console.log(personId);
        for (let i = 0; i < PersonsBase.length; i++) {
            if (PersonsBase[i].id === personId) {
                localStorage.setItem("personId", personId);
                return personId;
            }
        }
        return localStorage.getItem("personId");
    }

    renderBiographyItem(timeline, index) {
        return(
            <TimelineItem key={index} dateText={timeline.year} dateInnerStyle={{background: '#e13618'}}
                bodyContainerStyle={{
                    background: '#f5ff54',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}>
                <p className="color-title-dark">{timeline.contentText}</p>
            </TimelineItem>
        );
    }

    renderGalleryItem(item) {
        return(
            <Carousel.Item>
                <Image className="w-100" src={item.src}/>
            </Carousel.Item>
        );
    }

    renderGallery(items) {
        if (items.length === 0) {
            return;
        }

        return(
            <Carousel>
                {items.map(this.renderGalleryItem, this)}
            </Carousel>
        );
    }

    render() {
        let personId = this.getId();

        const MapComponent = withScriptjs(withGoogleMap(props =>
            <GoogleMap googleMapURL={props.googleMapURL}  defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.lng}} options={{disableDefaultUI: true}}>
                    <Marker position={{ lat: props.lat, lng: props.lng }}/>
            </GoogleMap>
        ))
        
        return(
            <div>
                <section className="inner-section background-color-yellow">
                    <Container className="background-color-dark box-shadow">
                        <Row>
                            <Col md="5">
                                <Image src={this.translate("persons." + personId + ".photo")} className="person-img"/>
                                <div className="person-caption">
                                    <h5 className="person-name color-title">{this.translate("persons." + personId + ".name")}</h5>
                                    <p className="person-years">{this.translate("persons." + personId + ".yol")}</p>
                                </div>
                            </Col>
                            <Col>
                                <Timeline>
                                    {this.translate("persons." + personId + ".biography", { returnObjects: true }).map(this.renderBiographyItem, this)}
                                </Timeline>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="background-color-dark">
                        <Row>
                            <Col>
                                <div className="person-gallery">
                                    {this.renderGallery(this.translate("persons." + personId + ".gallery", { returnObjects: true }))}
                                </div>
                            </Col>
                        </Row>
                </section>
                <section className="inner-section background-color-yellow">
                    <Container>
                        <Row>
                            <Col md>
                                <div className="person-map box-shadow">
                                    <MapComponent
                                        lat = {Number(this.translate("persons." + personId + ".location.lat"))}
                                        lng = {Number(this.translate("persons." + personId + ".location.lng"))}
                                        googleMapURL={this.translate("google-map.url")}
                                        loadingElement={<div style={{ height: "100%" }} />}
                                        containerElement={<div style={{ height: "315px" }} />}
                                        mapElement={<div style={{ height: "100%" }} />}
                                    />
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center box-shadow">
                                <div className="person-video">
                                    <iframe src={this.translate("persons." + personId + ".video")}
                                        width="560"
                                        height="315"
                                        rameBorder='0' 
                                        allow='autoplay; encrypted-media' 
                                        allowFullScreen title='video'
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Person;