import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { Image } from 'react-bootstrap';

import "../styles/common.css";
import "../styles/person.css";

import Translatable from './Translatable';
import PersonsBase from '../base/persons.json';

class Person extends Translatable {
    getId() {
        let personId = window.location.hash.substring(1);
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
            <TimelineItem key={index} dateText={timeline.year}>
                <p>{timeline.contentText}</p>
            </TimelineItem>
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
            <section>
                <Container>
                    <Row>
                        <Col md="5">
                            <Image src={this.translate("persons." + personId + ".photo")} className="person-img"/>
                            <div className="person-caption">
                                <p className="person-name">{this.translate("persons." + personId + ".name")}</p>
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
            <section className="inner-section">
                <Container>
                    <Row>
                        <Col md>
                            <div className="person-map">
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
                        <Col className="d-flex align-items-center">
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