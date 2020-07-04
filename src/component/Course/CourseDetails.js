import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
class CourseDetails extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        let topic = "";
        let time = "";
        let payment = "";
        let courseDetailsArray = this.props.coursedata;
        if( courseDetailsArray.length === 1){
            topic = courseDetailsArray[0]['topic'];
            time = courseDetailsArray[0]['time'];
            payment = courseDetailsArray[0]['payment'];
        }

        return (
            <Fragment>
                <Container className="course">
                    <Row>
                        <Col sm = {12} md = {12} lg={12}>
                            <Card className="cardDetails">
                                <h1 className="title">Topics Covered</h1>
                                <h1 className="subtitle text-center">{ReactHtmlParser(topic)}</h1>
                            </Card>
                        </Col>
                        <Col sm = {12} md = {12} lg={12}>
                            <Card>
                                <h1 className="title">Time Schedule</h1>
                                <h1 className="subtitle text-center">{ReactHtmlParser(time)}</h1>
                            </Card>
                        </Col>
                        <Col sm = {12} md = {12} lg={12}>
                            <Card>
                                <h1 className="title">Payment</h1>
                                <h1 className="subtitle text-center">{ReactHtmlParser(payment)}</h1>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;