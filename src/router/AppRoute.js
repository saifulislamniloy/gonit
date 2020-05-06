import React, {Component, Fragment} from 'react';
import HomePage from "../page/HomePage";
import CoursePage from "../page/CoursePage";
import ContactPage from "../page/ContactPage";
import {Route, Switch} from "react-router-dom";
import CourseDetailsPage from "../page/CourseDetailsPage";
import VideoTutorialPage from "../page/VideoTutorialPage";
import AboutPage from "../page/AboutPage";
import TermsPage from "../page/TermsPage";
import FaqPage from "../page/FAQPage";
import BlogListPage from "../page/BlogListPage";
import BlogDetailsPage from "../page/BlogDetailsPage";
import NoticePage from "../page/NoticePage";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/available-courses" component={CoursePage}/>
                    <Route exact path="/video" component={VideoTutorialPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/course-details/:courseId" component={CourseDetailsPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                    <Route exact path="/faq" component={FaqPage}/>
                    <Route exact path="/blog" component={BlogListPage}/>
                    <Route exact path="/blog-details/:blogId" component={BlogDetailsPage}/>
                    <Route exact path="/notice" component={NoticePage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;