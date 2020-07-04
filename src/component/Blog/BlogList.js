import React, {Component, Fragment} from 'react';
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";

class BlogList extends Component {
    constructor() {
        super();
        this.state={
            loading:true,
            myData:[],
            blogView: ""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.blog).then(result=>{
            this.setState({myData:result});
            const courseList = this.state.myData;
            const view = courseList.map(courseList=>{
                return  (<Col sm={12} md={6} lg={4} className="p-2">
                    <div>
                        <Link to={"/blog-details/"+courseList.id}><Card className="cardBlog">
                            <Card.Body>
                                <Card.Title className="mainTitle">{courseList.title}</Card.Title>
                                <Card.Text className="subtitle text-center">
                                    {"লেখক: "+courseList.writer}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                </Col>)
            })
            this.setState({blogView:view, loading:false});
        })
    }
    render() {
        if (this.state.loading === true)
            return <Loading/>
        else {
            return (
                <Fragment>
                    <Container className="blog">
                        <Row className="mt-5 mb-5">
                            {this.state.blogView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default BlogList;