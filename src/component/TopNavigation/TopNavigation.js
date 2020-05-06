import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.scss';
import '../../asset/css/responsive.scss';
import '../../asset/css/bootstrap.min.css';
import {Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navBarTitle: "navTitle",
            navBarBack: "navBackground",
            navBarItem: "navItem",
            navVariant: "dark"
        }
    }

    onScroll=()=>{
        if(window.scrollY>=100){
            this.setState({navBarTitle:"navTitleScroll" })
            this.setState({navBarBack:"navBackgroundScroll" })
            this.setState({navBarItem:"navItemScroll" })
            this.setState({navVariant:"light" })
        }else if(window.scrollY<100){
            this.setState({navBarTitle:"navTitle" })
            this.setState({navBarBack:"navBackground" })
            this.setState({navBarItem:"navItem" })
            this.setState({navVariant:"dark" })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Container className="topNavigation">
                    <Navbar className={this.state.navBarBack}  variant={this.state.navVariant}  fixed="top" collapseOnSelect expand="lg">
                        <Navbar.Brand href="/" className={this.state.navBarTitle}><img src="https://yt3.ggpht.com/a/AGF-l79T_QzngyNjKYQlDBoI-NLOOyiHepal5bf6PQ=s288-c-k-c0xffffffff-no-rj-mo" height="32" width="32" alt="Smiley face"/>  গনিত চর্চা কেন্দ্র</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav >
                                <NavLink exact activeStyle={{color: '#002C42'}} className={this.state.navBarItem} to="/">হোম</NavLink>
                                <NavLink exact activeStyle={{color: '#002C42'}} className={this.state.navBarItem} to="/notice">নোটিশ বোর্ড</NavLink>
                                <NavLink exact activeStyle={{color: '#002C42'}} className={this.state.navBarItem} to="/video">ভিডিও টিউটোরিয়াল</NavLink>
                                <NavLink exact activeStyle={{color: '#002C42'}} className={this.state.navBarItem}  to="/blog">ব্লগ</NavLink>
                                <NavLink exact activeStyle={{color: '#002C42'}} className={this.state.navBarItem}  to="/available-courses">কোর্সসমূহ</NavLink>
                                <NavLink exact activeStyle={{color: '#002C42'}} className={this.state.navBarItem} to="/contact">যোগাযোগ</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        );
    }
}

export default TopNavigation;