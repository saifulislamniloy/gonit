import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class VideoTutorialFrontPage extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="videoTutorialFrontPage m-0 p-0">
                    <Container fluid={true} className="bannerVideo ">
                        <Container className="container ">
                            <Row className="vertical-center">
                                <Col className="bannerColumn">
                                    <Link to="/video">
                                    <Card className="bannerCard">
                                        <Card.Img className="bannerCardImg" src="http://gonitcorcakendro.com/images/main/VideoTutorial-camera.png" />
                                        <Card.Title className="subTitle text-center">
                                            ক্লিক কর
                                        </Card.Title>
                                    </Card></Link>
                                </Col>
                                <Col className="bannerColumn">
                                        <h4 className="title text-center">!! অল্প সময়ে সহজে শিখ !!</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default VideoTutorialFrontPage;