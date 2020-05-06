import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class NoticeFrontPage extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="noticeBoardFrontPage m-0 p-0">
                    <Container fluid={true} className="bannerVideo">
                        <Container fluid={true} >
                            <Container className="container">
                                <Row className="vertical-center">
                                    <Col  lg={6} md={6} sm={6}>
                                        <Link to="/notice">
                                            <Card className="bannerCard">
                                                <Card.Img className="bannerCardImg" src="http://gonitcorcakendro.com/images/admin/AdminFeature-notice.png" />
                                                <Card.Title className="subTitle text-center">
                                                    ক্লিক কর
                                                </Card.Title>
                                            </Card></Link>
                                    </Col>
                                    <Col  lg={6} md={6} sm={6}>
                                        <h4 className="title text-center">আজকের নোটিশ দেখ</h4>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default NoticeFrontPage;