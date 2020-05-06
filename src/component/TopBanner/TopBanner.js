import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TopBanner extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 5000
        };
        return (
            <Fragment>
                <Container fluid={true} className="topBanner m-0 p-0">
                   <Container fluid={true} className="banner ">
                       <Container>
                           <Slider {...settings}>
                               <Container className="text-center topContentMargin">
                                   <h1 className="title">গনিত চর্চা কেন্দ্র</h1>
                                   <h4 className="subTitle">!! অবাক হবেন না !!</h4>
                                   <h4 className="subTitle">সকল বিষয়ই পড়ানো হয়  </h4>
                               </Container>
                               <Container className="text-center topContentMargin">
                                   <h1 className="title">Gonit Corca Kendro</h1>
                                   <h4 className="subTitle">!! Don't be surprised !!</h4>
                                   <h4 className="subTitle">Every subject will be covered</h4>
                               </Container>
                           </Slider>
                       </Container>
                   </Container>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;