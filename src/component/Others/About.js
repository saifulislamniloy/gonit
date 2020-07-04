import React, {Component, Fragment} from 'react';
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";
import {Col, Container, Row} from "react-bootstrap";
import {stateToHTML} from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js';
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";

class About extends Component {
    constructor() {
        super();
        this.state={
            loading:true,
            aboutData:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.others+"/about").then(result=>{
            this.setState({aboutData:result[0]["data"], loading:false});
            this.convertData();
        })

    }
    convertData() {
        let convertedData = stateToHTML(convertFromRaw(JSON.parse(this.state.aboutData)));
        this.setState({aboutData:convertedData})
    }


    render() {
        if (this.state.loading === true)
            return <Loading/>
        else {
            return (
                <Fragment>
                    <Container>
                        <Row>
                            <Col>
                                {ReactHtmlParser(this.state.aboutData)}
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default About;