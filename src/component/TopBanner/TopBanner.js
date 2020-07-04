import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestClient from '../../restAPI/RestClient';
import AppUrl from '../../restAPI/AppUrl';
import BannerData from '../../localStorage/BannerData';

class TopBanner extends Component {
    constructor() {
        super();
        this.state = {
            bannerView: "",
            loading: true
        }
    }
    componentDidMount() {
        if (BannerData.bannerDataLoaded()===true) {
            let result = BannerData.getBannerData()
            const bannerView = result.map(result => {
                return (
                    <Container className="text-center topContentMargin">
                        <h1 className="title">{result.title}</h1>
                        <h4 className="subTitle">{result.subtitle}</h4>
                        <h4 className="subTitle">{result.subtitle2}</h4>
                    </Container>
                )
            })
            this.setState({ bannerView: bannerView, loading: false })     
        } else {
            RestClient.GetRequest(AppUrl.banner)
                .then(result => {
                    const bannerView = result.map(result => {
                        return (
                            <Container className="text-center topContentMargin">
                                <h1 className="title">{result.title}</h1>
                                <h4 className="subTitle">{result.subtitle}</h4>
                                <h4 className="subTitle">{result.subtitle2}</h4>
                            </Container>
                        )
                    })
                    this.setState({ bannerView: bannerView, loading: false })     
                    BannerData.setBannerData(JSON.stringify(result))
                })
        }
    }

    activateLoader = () => {
        if (this.state.loading === true)
            return <div className="loader"></div>
    }
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
                                {this.activateLoader()}
                                {this.state.bannerView}
                           </Slider>
                       </Container>
                   </Container>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;