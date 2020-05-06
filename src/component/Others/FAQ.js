import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";
import {stateToHTML} from "draft-js-export-html";
import {convertFromRaw} from "draft-js";
import Loading from "../Loading/Loading";

class Faq extends Component {
    constructor() {
        super();
        this.state={
            loading:true,
            faqData:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.others+"/faq").then(result=>{
            this.setState({faqData:result[0]["data"], loading:false});
            this.convertData();
        })

    }
    convertData() {
        let data = this.state.faqData;
        let convertedData = stateToHTML(convertFromRaw(JSON.parse(this.state.faqData)));
        this.setState({faqData:convertedData})
    }

    render() {
        if (this.state.loading == true)
            return <Loading/>
        else {
            return (
                <Fragment>
                    <Container>
                        <Row>
                            <Col>
                                {ReactHtmlParser(this.state.faqData)}
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Faq;