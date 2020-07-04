import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {stateToHTML} from "draft-js-export-html";
import {convertFromRaw} from "draft-js";

class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        let title = "";
        let writer = "";
        let blog = "";
        let blogDetailsArray = this.props.blogData;
        if(blogDetailsArray.length === 1){
            title = blogDetailsArray[0]['title'];
            writer = blogDetailsArray[0]['writer'];
            blog = stateToHTML(convertFromRaw(JSON.parse(blogDetailsArray[0]['text'])));
        }
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col sm = {12} md = {12} lg={12}>
                            <h1>{ReactHtmlParser(title)}</h1>
                            <h5>{"লেখক: "+ReactHtmlParser(writer)}</h5>
                        </Col>
                        <Col sm = {12} md = {12} lg={12}>
                            <Row>
                                <Col>
                                    {ReactHtmlParser(blog)}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default BlogDetails;