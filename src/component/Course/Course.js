import React, {Component, Fragment} from 'react';
import { Card, Col, Container, Row} from "react-bootstrap";

class Course extends Component {
    render() {
        return (
            <Fragment>
                <Container className="course">
                    <br/><br/><br/><br/><br/>
                    <h1 className="mainTitle">AVAILABLE COURSE</h1>
                    <Row className="mt-5">
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">Admission Test</Card.Title>
                                    <Card.Text className="subtitle">
                                        This course is offers Physics, Chemistry, Math, Biology. This is specialised for engineering.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="title">Inter 1st Year Science</Card.Title>
                                    <Card.Text className="subtitle">
                                        This course is offers Physics, Chemistry, Math, Ict, English
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card>
                               <Card.Body>
                                    <Card.Title className="title">Inter 2nd Year Science</Card.Title>
                                    <Card.Text className="subtitle">
                                        This course is offers Physics, Chemistry, Math, Ict, English
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Course;