import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import Footer from "../component/Footer/Footer";
import CourseDetails from "../component/Course/CourseDetails";
import TopBanner2 from "../component/TopBanner/TopBanner2";
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import Loading from "../component/Loading/Loading";

class CourseDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            loading:true,
            myCourseId:match.params.courseId,
            courseData:[]
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        RestClient.GetRequest(AppUrl.courseDetails+this.state.myCourseId).then(result=>{
            this.setState({courseData:result, loading:false});
        }).catch(error=>{

        })
    }
    render() {
        if (this.state.loading === true){
            return (
                <Fragment>
                    <TopNavigation/>
                    <TopBanner2/>
                    <Loading/>
                    <Footer/>
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <TopNavigation/>
                    <TopBanner2/>
                    <CourseDetails coursedata={this.state.courseData}/>
                    <Footer/>
                </Fragment>
            );
        }
    }
}

export default CourseDetailsPage;