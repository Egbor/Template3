import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import "../styles/common.css";

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

        return(
            <section>
                <Container>
                    {/* <Image src={this.translate("persons." + personId + ".photo")}/>
                    <p>{this.translate("persons." + personId + ".name")}</p>
                    <p>{this.translate("persons." + personId + ".yol")}</p> */}
                    <Timeline>
                        {this.translate("persons." + personId + ".biography", { returnObjects: true }).map(this.renderBiographyItem, this)}
                    </Timeline>
                </Container>
            </section>
        );
    }
}

export default Person;