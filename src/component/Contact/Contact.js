import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";

class Contact extends Component {

    sendContact(){
            alert("This feature is currently unavailable")
            if(0){
                let name =document.getElementById("name").value;
                let mobile = document.getElementById("mobile").value;
                let msg = document.getElementById("msg").value;
    
                let JsonObject = {name:name, mobile:mobile, msg:msg}
    
                RestClient.PostRequest(AppUrl.contact, JSON.stringify(JsonObject)).then(result=>{
                    alert("Message Sent Successful");
                }).catch(error=>{
                    alert("Message Sent Failed!");
                })
            }

}
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">বার্তা পাঠান</h1>
                            <br/>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">আপনার নাম</Form.Label>
                                    <Form.Control id="name" type="text"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription">আপনার মোবাইম নাম্বার</Form.Label>
                                    <Form.Control id="mobile" type="text"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription">বার্তা</Form.Label>
                                    <Form.Control id="msg" as="textarea" rows="3"/>
                                </Form.Group>

                                <Button onClick={() => this.sendContact()} variant="primary">
                                    প্রেরণ করুন
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;