import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faMapMarker, faMapMarkedAlt, faIdCard} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";
import {Link} from "react-router-dom";

class Footer extends Component {
    constructor() {
        super();
        this.state={
            footerData:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.footer).then(fresult=>{
            this.setState({footerData:fresult});
        })
    }
    render() {
        let facebookLink ="";
        let youtubeLink ="";
        let mapLink ="";
        let address = "";
        let email = "";
        let mobile = "";
        const footer = this.state.footerData;
        if(footer.length === 6){
            facebookLink = footer[0]['link'];
            youtubeLink = footer[1]['link'];
            mapLink = footer[2]['link'];
            address = footer[3]['link'];
            email = footer[4]['link'];
            mobile = footer[5]['link'];
        }


        return (
            <Fragment>
                <Container fluid={true} className="footer p-0">
                   <Container fluid={true} className="footerSection">
                       <Row>
                           <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                               <h1 className="footerTitle">অনুসরণ করুন</h1>
                               <a className="footerSubTitle" href={facebookLink} target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/> ফেইসবুক</a><br/>
                               <a className="footerSubTitle" href={youtubeLink} target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube}/> ইউটিউব</a><br/>
                               <a className="footerSubTitle" href={mapLink} target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarker}/>  গুগল ম্যাপ</a>
                           </Col>
                           <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                               <h1 className="footerTitle">ঠিকানা</h1>
                               <a className="footerSubTitle" style={{cursor:'default'}} href="#action/3.1"><FontAwesomeIcon icon={faMapMarkedAlt}/> {address}</a><br/>
                               <a className="footerSubTitle" style={{cursor:'default'}} href="#action/3.1"><FontAwesomeIcon icon={faEnvelope}/> {email}</a><br/>
                               <a className="footerSubTitle" style={{cursor:'default'}} href="#action/3.1"><FontAwesomeIcon icon={faPhone}/>{mobile}</a>
                           </Col>
                           <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                               <h1 className="footerTitle">আবেদন পত্র</h1>
                               <a className="footerSubTitle" href="/"><FontAwesomeIcon icon={faIdCard}/> শিক্ষক আবেদন</a><br/>
                               <a className="footerSubTitle" href="/"><FontAwesomeIcon icon={faIdCard}/> ছাত্র আবেদন</a>
                           </Col>
                           <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                               <h1 className="footerTitle">অন্যান্য</h1>
                               <Link className="footerSubTitle" to="/about">আমাদের সম্পর্কে</Link><br/>
                               <Link className="footerSubTitle" to="/faq">জিজ্ঞাসা</Link><br/>
                               <Link className="footerSubTitle" to="/terms">শর্ত ও নিয়মাবলী</Link>
                           </Col>
                       </Row>
                   </Container>
                    <Container fluid={true} className="text-center copyRightSection">
                        <a className="copyRightLink" href="#action">©  গনিত চর্চা কেন্দ্র ২০২০-২০২১</a><br/>
                        <a className="copyRightLink" href="/">Developed by Saiful Islam Niloy</a>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;