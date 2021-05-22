import React from 'react';

class Translatable extends React.Component {
    translate = null;
    changeLanguage = null;

    constructor(props) {
        super(props);
        this.translate = props.t;
        this.changeLanguage = (language) => {
            props.i18n.changeLanguage(language);
        }
    }
}

export default Translatable;