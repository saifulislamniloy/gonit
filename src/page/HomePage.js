import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner from "../component/TopBanner/TopBanner";
import Footer from "../component/Footer/Footer";
import Course from "../component/Course/Course";
import VideoTutorialFrontPage from "../component/VideoTutorial/VideoTutorial Front Page";
import NoticeFrontPage from "../component/Notice/NoticeFrontPage";
import BlogFrontPage from "../component/Blog/BlogFrontPage";


class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
                <Course/>
                <VideoTutorialFrontPage/>
                <BlogFrontPage/>
                <NoticeFrontPage/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;