import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner2 from "../component/TopBanner/TopBanner2";
import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";

class ContactPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner2/>
                <Contact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;