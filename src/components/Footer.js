import {Container} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import '../styles/common.css';

import Translatable from "./Translatable";

class Footer extends Translatable {
    render() {
        return (
            <footer>
                <h3 style={{color: "#FFFFFF"}}>About developers</h3>
            </footer>
        )
    }
}

export default Footer;