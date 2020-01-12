import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faMapMarker, faMapMarkedAlt, faIdCard} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footer p-0">
                   <Container fluid={true} className="footerSection">
                       <Row>
                           <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                               <h1 className="footerTitle">FOLLOW US</h1>
                               <a className="footerSubTitle" href="https://www.facebook.com/gonit01799141479/" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                               <a className="footerSubTitle" href="https://www.youtube.com/channel/UCjNLSHSy9TJAyqKgF3gAREw" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube}/> Youtube</a><br/>
                               <a className="footerSubTitle" href="https://goo.gl/maps/wnXss3o44cV1GemY6" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarker}/>  Google Map</a>
                           </Col>
                           <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                               <h1 className="footerTitle">ADDRESS</h1>
                               <a className="footerSubTitle" href="/address"><FontAwesomeIcon icon={faMapMarkedAlt}/> Banomala Road, Tongi, Gazipur</a><br/>
                               <a className="footerSubTitle" href="/"><FontAwesomeIcon icon={faEnvelope}/>  gonit-carca-kendra@gmail.com</a><br/>
                               <a className="footerSubTitle" href="/"><FontAwesomeIcon icon={faPhone}/> 01799141479</a>
                           </Col>
                           <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                               <h1 className="footerTitle">Application Form</h1>
                               <a className="footerSubTitle" href="/"><FontAwesomeIcon icon={faIdCard}/> Teacher Application</a><br/>
                               <a className="footerSubTitle" href="/"><FontAwesomeIcon icon={faIdCard}/> Student Admission</a>
                           </Col>
                           <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                               <h1 className="footerTitle">OTHERS</h1>
                               <a className="footerSubTitle" href="/">About</a><br/>
                               <a className="footerSubTitle" href="/">FAQ</a><br/>
                               <a className="footerSubTitle" href="/">Terms & Condition</a>
                           </Col>
                       </Row>
                   </Container>
                    <Container fluid={true} className="text-center copyRightSection">
                        <a className="copyRightLink" href="/">© Gonit Corca kendro 2019-2020</a><br/>
                        <a className="copyRightLink" href="/">Developed by Saiful Islam Niloy</a>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;