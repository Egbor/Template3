import {Container} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import first from './images/Borsukov.png'
import second from './images/Sementsova.png'
import "../styles/common.css"
import Translatable from "./Translatable";

class Footer extends Translatable {
    render() {
        return (
            <footer>
                <h3 style={{color: "#FFFFFF"}}>About developers</h3>
                <Container className="d-flex justify-content-around">

                    <Card style={{width: '18rem'}} className="p-2">
                        <Card.Img variant="top"  class="rounded" src={first}/>
                        <Card.Body>
                            <Card.Title>Yegor Borsukov</Card.Title>
                            <Card.Text>Contributer</Card.Text>
                            <Card.Link href="https://github.com/Egbor">https://github.com/Egbor</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}} className="p-2">
                        <Card.Img variant="top" class="rounded" src={second}/>
                        <Card.Body>
                            <Card.Title>Sementsova Kristina</Card.Title>
                            <Card.Text>Contributer</Card.Text>
                            <Card.Link href="https://github.com/sssplinter">https://github.com/sssplinter</Card.Link>
                        </Card.Body>
                    </Card>
                </Container>
            </footer>
        )
    }
}

// function Footer() {
//     return (
//         <footer>
//             <Container>
//                 <p className="text-left" style={{color: "#FFFFFF"}}>About developers</p>
//                 <Card style={{ width: '15rem' }}>
//                     <Card.Img variant="top" src={first} />
//                     <Card.Body>
//                         <Card.Title>{this.translate("home.welcom")}</Card.Title>
//                         <Card.Text>Contributer</Card.Text>
//                         <Card.Link href="https://github.com/Egbor">https://github.com/Egbor</Card.Link>
//                     </Card.Body>
//                 </Card>
//             </Container>
//         </footer>
//     );
// }

export default Footer;