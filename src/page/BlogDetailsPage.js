import React, {Component, Fragment} from 'react';
import RestClient from "../restAPI/RestClient";
import AppUrl from "../restAPI/AppUrl";
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner2 from "../component/TopBanner/TopBanner2";
import Footer from "../component/Footer/Footer";
import BlogDetails from "../component/Blog/BlogDetails";
import Loading from "../component/Loading/Loading";

class BlogDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            loading:true,
            blogId:match.params.blogId,
            blogData:[]
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        RestClient.GetRequest(AppUrl.blog+"/"+this.state.blogId).then(result=>{
            this.setState({blogData:result, loading:false});
        }).catch(error=>{

        })
    }
    render() {
        if (this.state.loading === true){
            return(
                <Fragment>
                    <TopNavigation/>
                    <TopBanner2/>
                    <Loading/>
                    <BlogDetails blogData={this.state.blogData}/>
                    <Footer/>
                </Fragment>
            )}

        else {
            return (
                <Fragment>
                    <TopNavigation/>
                    <TopBanner2/>
                    <BlogDetails blogData={this.state.blogData}/>
                    <Footer/>
                </Fragment>
            );
        }
    }
}

export default BlogDetailsPage;