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
            <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
                    <Marker position={{ lat: -34.397, lng: 150.644 }}/>
            </GoogleMap>
        ))

        return(
            <section>
                <Container>
                    <Row>
                        <Col md="5">
                            <Image src={this.translate("persons." + personId + ".photo")} className="person-img"/>
                            <p className="person-name">{this.translate("persons." + personId + ".name")}</p>
                            <p className="person-years">{this.translate("persons." + personId + ".yol")}</p>
                            <div className="person-map">
                                <MapComponent
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ9XlL-dtaOdfgVs5Bizuu8ddInbxYhgY"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                            </div>
                            <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ' 
                                    rameBorder='0' 
                                    allow='autoplay; encrypted-media' 
                                    allowFullScreen title='video'
                            />
                        </Col>
                        <Col>
                            <Timeline>
                                {this.translate("persons." + personId + ".biography", { returnObjects: true }).map(this.renderBiographyItem, this)}
                            </Timeline>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Person;