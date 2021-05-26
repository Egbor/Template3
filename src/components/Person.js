import React from 'react';
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

    render() {
        let personId = this.getId();

        return(
            <section>
                <p>{this.translate("persons." + personId + ".name")}</p>
                <p>{this.translate("persons." + personId + ".surname")}</p>
                <p>{this.translate("persons." + personId + ".yol")}</p>
            </section>
        );
    }
}

export default Person;