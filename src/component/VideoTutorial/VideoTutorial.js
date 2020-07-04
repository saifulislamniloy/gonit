import React, {Component, Fragment} from 'react';
import {Card, Col, Container,  Nav, Navbar, Row} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import RestClient from "../../restAPI/RestClient";
import AppUrl from "../../restAPI/AppUrl";
import Loading from "../Loading/Loading";

class VideoTutorial extends Component {
    constructor() {
        super();
        this.state={
            loading:true,
            classData:[],
            subjectData:[],
            chapterData:[],
            videoData:[],
            selectedClassId:"",
            selectedClass:"",
            selectedSubjectId:"",
            selectedSubject:"",
            selectedChapterId:"",
            selectedChapter:"",
            classView: "",
            subjectView:"",
            chapterView:"",
            videoView:"",
            link:"",
            playingVideoTitle: ""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.class).then(result=>{
            this.setState({classData:result})
            const classData = this.state.classData;
            const classView = classData.map(classData=>{
                return(
                    <NavDropdown.Item onClick={() => this.onClassItemSelect(classData.id, classData.class)}>{classData.class+": "+classData.id}</NavDropdown.Item>
                )
            })
            this.setState({classView:classView, loading:false});
        })
    }

    onClassItemSelect(selectedClassId, selectedClass){
        this.setState({selectedClassId:selectedClassId,selectedClass:selectedClass,link:"",playingVideoTitle:"",  loading:true});
        RestClient.GetRequest(AppUrl.subject+"/"+selectedClassId)
            .then(result=>{
                this.setState({subjectData:result})
                const subjectData = this.state.subjectData;
                const subjectView = subjectData.map(subjectData=>{
                    return(
                        <NavDropdown.Item  onClick={() => this.onSubjectItemSelect(subjectData.id, subjectData.subject)}>{subjectData.subject+": "+subjectData.id}</NavDropdown.Item>
                    )
                })
                this.setState({subjectView:subjectView,selectedSubject:"", selectedChapter:"", videoView:"", loading:false});
                // alert(result);
            }).catch(error=>{
            alert(error +" Inside REST");
        });


    }

    onSubjectItemSelect(selectedSubjectId, selectedSubject){
        this.setState({selectedSubjectId:selectedSubjectId, selectedSubject:selectedSubject, link:"",playingVideoTitle:"",  loading:true});
        RestClient.GetRequest(AppUrl.chapter+"/"+selectedSubjectId)
            .then(result=>{
                this.setState({chapterData:result})
                const chapterData = this.state.chapterData;
                const chapterView = chapterData.map(chapterData=>{
                    return(
                        <NavDropdown.Item  onClick={() => this.onChapterItemSelect(chapterData.id, chapterData.chapter)}>{chapterData.chapter+": "+chapterData.id}</NavDropdown.Item>
                    )
                })
                this.setState({chapterView:chapterView, videoView:"", selectedChapter:"", loading:false});
                // alert(result);
            }).catch(error=>{
            alert(error +" Inside REST");
        });
    }

    onChapterItemSelect(selectedChapterId, selectedChapter){
        this.setState({selectedChapterId:selectedChapterId, selectedChapter:selectedChapter, link:"",playingVideoTitle:"", loading:true})
        RestClient.GetRequest(AppUrl.video+"/"+selectedChapterId).then(result=>{
            this.setState({videoData:result})
            const videoData = this.state.videoData;
            const videoView = videoData.map(videoData=>{
                return(
                    <Card onClick={() => this.setVideo(videoData.link, videoData.title)} style={{cursor:'pointer'}}>
                        <Card.Body>
                            <Card.Title className="title">{videoData.title}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            })
            this.setState({videoView:videoView, loading:false});
        })
    }

    setVideo(s, p) {
        this.setState({link:s, playingVideoTitle:p})
    }
    render() {
        if (this.state.loading === true){
            return(
                <Fragment>
                    <Container>
                        <Row className="video">
                            <Col lg={6} md={6} sm={12}>
                                <iframe className="player" title="title" src={"https://www.youtube.com/embed/"+this.state.link} frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="largeCard">
                                <Card className="videoNav">
                                    <Row >
                                        <Col>
                                            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                <Navbar.Collapse id="responsive-navbar-nav" >
                                                    <Nav className="mr-auto">
                                                        <NavDropdown className="navDropDown" title={"ক্লাস: "+this.state.selectedClass} id="basic-nav-dropdown">
                                                            {this.state.classView}
                                                            <NavDropdown.Divider />
                                                        </NavDropdown>
                                                        <NavDropdown className="navDropDown" title={"বিষয়: "+this.state.selectedSubject} id="basic-nav-dropdown">
                                                            {this.state.subjectView}
                                                            <NavDropdown.Divider />
                                                        </NavDropdown>
                                                        <NavDropdown className="navDropDown" title={"অধ্যায়: "+this.state.selectedChapter} id="basic-nav-dropdown">
                                                            {this.state.chapterView}
                                                            <NavDropdown.Divider />
                                                        </NavDropdown>
                                                    </Nav>
                                                    <Nav>
                                                    </Nav>
                                                </Navbar.Collapse>
                                            </Navbar>
                                        </Col>
                                    </Row>
                                </Card>
                                <Row><Col className="videos">
                                    <Loading/>
                                </Col></Row>

                            </Col>
                        </Row>
                    </Container>
                </Fragment>
                )
        }

        else {
            return (
                <Fragment>
                    <Container>
                        <Row className="video">
                            <Col lg={6} md={6} sm={12}>
                                <iframe className="player" title="title" src={"https://www.youtube.com/embed/"+this.state.link} frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                <h6>{this.state.playingVideoTitle}</h6>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="largeCard">
                                <Card className="videoNav">
                                    <Row >
                                        <Col>
                                            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                <Navbar.Collapse id="responsive-navbar-nav" >
                                                    <Nav className="mr-auto">
                                                        <NavDropdown className="navDropDown" title={"ক্লাস: "+this.state.selectedClass} id="basic-nav-dropdown">
                                                            {this.state.classView}
                                                            <NavDropdown.Divider />
                                                        </NavDropdown>
                                                        <NavDropdown className="navDropDown" title={"বিষয়: "+this.state.selectedSubject} id="basic-nav-dropdown">
                                                            {this.state.subjectView}
                                                            <NavDropdown.Divider />
                                                        </NavDropdown>
                                                        <NavDropdown className="navDropDown" title={"অধ্যায়: "+this.state.selectedChapter} id="basic-nav-dropdown">
                                                            {this.state.chapterView}
                                                            <NavDropdown.Divider />
                                                        </NavDropdown>
                                                    </Nav>
                                                    <Nav>
                                                    </Nav>
                                                </Navbar.Collapse>
                                            </Navbar>
                                        </Col>
                                    </Row>
                                </Card>
                                <Row><Col className="videos">
                                    {this.state.videoView}
                                </Col></Row>

                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }

}

export default VideoTutorial;