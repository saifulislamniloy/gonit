import React, { Component, Fragment } from 'react';
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";
import { Card, Col, Container, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import NoticeData from '../../localStorage/NoticeData';

class Notice extends Component {
    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true
        }
    }
    componentDidMount() {
        if (NoticeData.noticeDataLoaded() === true) {
            this.setState({ myData: NoticeData.getNoticeData(), loading: false })
        } else {
            RestClient.GetRequest(AppUrl.notice).then(result => {
                this.setState({ myData: result, loading: false })
                NoticeData.setNoticeData(result);
            })
        }
    }

    render() {
        if (this.state.loading === true)
            return <Loading />
        else {
            const courseList = this.state.myData;
            const view = courseList.map(courseList => {
                return (<Col sm={12} md={12} lg={12} className="p-2">
                    <div>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="titleNotice text-center">{courseList.title}</Card.Title>
                                <Card.Text className="subtitleNotice text-center">
                                    {courseList.subtitle}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </Col>)
            })
            return (
                <Fragment>
                    <Container className="notice">
                        <Row className="mt-5 mb-5">
                            {view}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Notice;