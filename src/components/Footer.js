import React from 'react';

import '../styles/common.css';
import '../styles/footer.css';

import Translatable from "./Translatable";

class Footer extends Translatable {
    render() {
        return (
            <footer className="background-color-dark">
                <h3 className="logo">Archi<span>Wiki</span></h3>
            </footer>
        )
    }
}

export default Footer;