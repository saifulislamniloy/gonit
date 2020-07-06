import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";
import Loading from "../Loading/Loading";
import CourseData from '../../localStorage/CourseData';


class Course extends Component {
    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true
        }
    }
    componentDidMount() {
        if (CourseData.courseDataLoaded() === true) {
            this.setState({ myData: CourseData.getCourseData(), loading: false })
        } else {
            RestClient.GetRequest(AppUrl.courses).then(result => {
                this.setState({ myData: result, loading: false })
                CourseData.setCourseData(result)
            })
        }
    }

    render() {
        if (this.state.loading === true)
            return <Loading />
        else {
            const courseList = this.state.myData;
            const view = courseList.map(courseList => {
                return (<Col sm={12} md={6} lg={4} className="p-2">
                    <div>
                        <Link to={"/course-details/" + courseList.id}><Card className="card">
                            <Card.Body>
                                <Card.Title className="title">{courseList.title}</Card.Title>
                                <Card.Text className="subtitle">
                                    {courseList.subtitle}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                </Col>)
            })
            return (
                <Fragment>
                    <Container className="course">
                        <Row className="mt-5 mb-5">
                            {view}
                        </Row>
                    </Container>
                </Fragment>
            );

        }
    }

}

export default Course;