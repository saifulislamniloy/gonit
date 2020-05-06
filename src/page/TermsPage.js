import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner2 from "../component/TopBanner/TopBanner2";
import Footer from "../component/Footer/Footer";
import Terms from "../component/Others/Terms";

class TermsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner2/>
                <Terms/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;