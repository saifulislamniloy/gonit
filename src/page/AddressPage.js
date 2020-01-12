import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner2 from "../component/TopBanner/TopBanner2";
import Footer from "../component/Footer/Footer";

class AddressPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner2/>
                <Container className="map">
                    <Row>
                        <Col className="text-center">
                            <iframe title="myMap" className="embedMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3647.3498282809696!2d90.4027231!3d23.9126634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5feaa73eb5b%3A0x8a0b75593ee5a49!2sGonit%20Chorcha%20Kendro!5e0!3m2!1sbn!2sbd!4v1577946471192!5m2!1sbn!2sbd"  frameBorder="0"  allowFullScreen=""></iframe>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </Fragment>
        );
    }
}

export default AddressPage;