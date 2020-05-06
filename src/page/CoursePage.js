import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner2 from "../component/TopBanner/TopBanner2";
import Course from "../component/Course/Course";
import Footer from "../component/Footer/Footer";

class CoursePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner2/>
                <Course/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;