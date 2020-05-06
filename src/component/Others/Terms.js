import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";
import {stateToHTML} from "draft-js-export-html";
import {convertFromRaw} from "draft-js";
import Loading from "../Loading/Loading";

class Terms extends Component {
    constructor() {
        super();
        this.state={
            loading:true,
            termsData:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.others+"/terms").then(result=>{
            this.setState({termsData:result[0]["data"], loading:false});
            this.convertData();
        })

    }
    convertData() {
        let data = this.state.termsData;
        let convertedData = stateToHTML(convertFromRaw(JSON.parse(this.state.termsData)));
        this.setState({termsData:convertedData})
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
                                {ReactHtmlParser(this.state.termsData)}
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Terms;