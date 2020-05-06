import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class BlogFrontPage extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="blogBoardFrontPage m-0 p-0">
                    <Container fluid={true} className="bannerVideo">
                        <Container fluid={true} >
                            <Container className="container">
                                <Row className="vertical-center">
                                    <Col className="bannerColumn">
                                        <Link to="/blog">
                                            <Card className="bannerCard">
                                                <Card.Img className="bannerCardImg" src="http://gonitcorcakendro.com/images/admin/AdminFeature-blog.png" />
                                                <Card.Title className="subTitle text-center">
                                                    ক্লিক কর
                                                </Card.Title>
                                            </Card></Link>
                                    </Col>
                                    <Col className="bannerColumn">
                                        <h4 className="title text-center">ব্লগ পড়তে পছন্দ কর</h4>
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

export default BlogFrontPage;