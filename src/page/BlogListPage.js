import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner2 from "../component/TopBanner/TopBanner2";
import Footer from "../component/Footer/Footer";
import BlogList from "../component/Blog/BlogList";

class BlogListPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner2/>
                <BlogList/>
                <Footer/>
            </Fragment>
        );
    }
}

export default BlogListPage;