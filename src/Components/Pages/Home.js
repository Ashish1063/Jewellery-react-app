import React from 'react'
import '../CSS/home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Banner from './Home/Banner';
import Category from './Home/Category';
import Collection from './Home/Collection';
// import img1 from '../Images/'
const Home = () => {

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#54B0A7", borderRadius: '50%', }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (

        <div className=' Home'>
            <Banner/>
           <Category/>        
            <section className="About">
                <div className="container">
                    <div className="aboutUs left">
                        <img src={require("../Images/About/aboutUsImg1.png")} alt="" />
                    </div>
                    <div className="aboutUs right">
                        <div className="aboutTitle d-flex">
                            <h1 className="title">About</h1>
                            <h1>&nbsp; Us</h1>
                        </div>
                        <div className="aboutContent">
                            <h5><b>Signature Diamond</b></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                            <div className="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 30 30" fill="none">
                                <path
                                    d="M5 25C4.3125 25 3.72417 24.7554 3.235 24.2663C2.74583 23.7771 2.50083 23.1883 2.5 22.5V7.5C2.5 6.8125 2.745 6.22417 3.235 5.735C3.725 5.24583 4.31333 5.00083 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81333 27.5 7.5V22.5C27.5 23.1875 27.2554 23.7763 26.7663 24.2663C26.2771 24.7563 25.6883 25.0008 25 25H5ZM15 16.25L25 10V7.5L15 13.75L5 7.5V10L15 16.25Z"
                                    fill="#54B0A7" />
                            </svg>&nbsp; signature@gmail.com</div>
                           
                        </div>
                    </div>
                </div>
            </section>
            <section className="Offer">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-md-6 my-2 offer1 position-relative">
                            <img src={require("../Images/Offers/offerImg1.png")} alt="" />
                            <div className="offerContent">
                                <h4>Up to 15% OFF</h4>
                                <button type="button" className="btn btn-link offerButton">Show more <i
                                    className="fa-solid fa-arrow-right-long"></i></button>
                            </div>
                        </div>
                        <div className="col-md-6 my-2 d-flex flex-column justify-content-between">
                            <div className="col-md-12 pb-2 offer2 position-relative">
                                <img src={require("../Images/Offers/offerImg2.png")} alt="" />
                                <div className="offerContent">
                                    <h4>Up to 15% OFF</h4>
                                    <button type="button" className="btn btn-link offerButton">Show more <i
                                        className="fa-solid fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                            <div className="col-md-12 pt-2 offer3 position-relative">
                                <img src={require("../Images/Offers/offerImg3.png")} alt="" />
                                <div className="offerContent">
                                    <h4>Up to 15% OFF</h4>
                                    <button type="button" className="btn btn-link offerButton">Show more <i
                                        className="fa-solid fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Collection/>
            <section className="ourCulture my-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={require("../Images/Culture/cultureImg1.png")} alt="" />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-between">
                            <div className="col-md-12 d-flex justify-content-between">
                                <div className="cultureTitle d-flex">
                                    <h1 className="title">Our</h1>
                                    <h1> &nbsp; Culture</h1>
                                </div>
                              
                            </div>
                            <div className="col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="col-md-12">
                                <Slider {...settings}>
                                    <div className="col-md-4">
                                        <div className="card card-body">
                                            <img src={require("../Images/Culture/cultureImg2.png")} alt="" />
                                            <div className="content text-center border">
                                                <h4 className="m-1">Punjabi</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 ">
                                        <div className="card card-body">
                                            <img src={require("../Images/Culture/cultureImg3.png")} alt="" />
                                            <div className="content text-center border">
                                                <h4 className="m-1">Tamil</h4>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-md-4 ">
                                        <div className="card card-body">
                                            <img src={require("../Images/Culture/cultureImg5.png")} alt="" />
                                            <div className="content text-center border">
                                                <h4 className="m-1">Punjabi</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 ">
                                        <div className="card card-body">
                                            <img src={require("../Images/Culture/cultureImg4.png")} alt="" />
                                            <div className="content text-center border">
                                                <h4 className="m-1">Lakhnow</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="schemesOffers my-5">
                <div className="row py-3 px-1">
                    <div className="col-md-12 px-4 py-2">
                        <h1>Save the Joy for the Future</h1>
                    </div>
                    <div className="col-md-4 d-flex flex-column justify-content-center ">
                        <p>The world's favourite jeweller has made owning your most wanted jewellery easier, more secure and
                            convenient. joyalukkas easy gold scheme is to help you plan and buy gold jewellery you wish to buy.
                        </p>
                       
                    </div>
                    <div className="col-md-4 d-flex flex-column justify-content-center ">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                            <path d="M25.625 6.875H6.875V33.125H33.125V24.375" stroke="#54B0A7" strokeWidth="3.75"
                                strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.375 19.375L20.625 25.625L35.625 9.375" stroke="#54B0A7" strokeWidth="3.75"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg> Pay Monthly</span>

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                <path d="M25.625 6.875H6.875V33.125H33.125V24.375" stroke="#54B0A7" strokeWidth="3.75"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.375 19.375L20.625 25.625L35.625 9.375" stroke="#54B0A7" strokeWidth="3.75"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Starting from Rs. 1,000 Onwards
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                <path d="M25.625 6.875H6.875V33.125H33.125V24.375" stroke="#54B0A7" strokeWidth="3.75"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.375 19.375L20.625 25.625L35.625 9.375" stroke="#54B0A7" strokeWidth="3.75"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Save on making charges
                        </span>
                    </div>
                    <div className="col-md-4">
                        <img src={require("../Images/Rectangle 69.png")} style={{ width: "100%", height: "100%" }} alt="" />
                    </div>
                </div>
            </section>
            <section className="chooseHere my-2 py-2">
                <div className="chooseHereTitle d-flex w-100 justify-content-center">
                    <h1 className="title">What to wear,</h1>
                    <h1> &nbsp; Choose here</h1>
                </div>
                <div className="container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                    >
                        <SwiperSlide>
                           
                            <div className="chooseHereContent">
                                <img src={require("../Images/ChooseHere/chooseHere6.png")} alt="" />
                                <h4>Bride </h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="chooseHereContent">
                                <img src={require("../Images/ChooseHere/chooseHere2.png")} alt="" />
                                <h4>Party Jewellery</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="chooseHereContent">
                                <img src={require("../Images/ChooseHere/chooseHere8.png")} alt="" />
                                <h4>Light Weight</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="chooseHereContent">
                                <img src={require("../Images/ChooseHere/chooseHere4.png")} alt="" />
                                <h4>Heavy Jewellery</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="chooseHereContent">
                                <img src={require("../Images/ChooseHere/chooseHere5.png")} alt="" />
                                <h4>Traditional </h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="chooseHereContent">
                                <img src={require("../Images/Culture/cultureImg5.png")} alt="" />
                                <h4>Wedding</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="chooseHereContent">
                                <img src={require("../Images/ChooseHere/chooseHere7.png")} alt="" />
                                <h4>Anniversary </h4>
                            </div>
                        </SwiperSlide>
                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </section>
            <section className="grandLuxuryProduct">
                <div className="container-fluid">
                    <img src={require('../Images/Rectangle 45.png')} alt="test" className="img-responsive" />
                    <div className="content">
                        <h1>Grand Luxury Jewellery Collection</h1>
                        <span>New in our shop</span>
                        <div className="button">
                            <a href="">Discover more
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services my-5 ">
                <div className="row">
                    <div className="col-md-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path
                                d="M33.3333 33.3332C33.3333 31.0311 26.8041 29.1665 18.75 29.1665M33.3333 33.3332C33.3333 35.6353 26.8041 37.4998 18.75 37.4998C10.6958 37.4998 4.16665 35.6353 4.16665 33.3332M33.3333 33.3332V43.6186C33.3333 45.9915 26.8041 47.9165 18.75 47.9165C10.6958 47.9165 4.16665 45.9936 4.16665 43.6186V33.3332M33.3333 33.3332C41.3 33.3332 47.9166 31.2769 47.9166 29.1665V8.33317M18.75 29.1665C10.6958 29.1665 4.16665 31.0311 4.16665 33.3332M18.75 29.1665C9.54581 29.1665 2.08331 27.1103 2.08331 24.9998V14.5832M18.75 10.4165C9.54581 10.4165 2.08331 12.2811 2.08331 14.5832M2.08331 14.5832C2.08331 16.8853 9.54581 18.7498 18.75 18.7498C18.75 20.8603 25.5271 22.9165 33.4937 22.9165C41.4583 22.9165 47.9166 20.8603 47.9166 18.7498M47.9166 8.33317C47.9166 6.03109 41.4583 4.1665 33.4937 4.1665C25.5271 4.1665 19.0708 6.03109 19.0708 8.33317M47.9166 8.33317C47.9166 10.6353 41.4583 12.4998 33.4937 12.4998C25.5291 12.4998 19.0708 10.6353 19.0708 8.33317M19.0708 8.33317V29.5123"
                                stroke="#00332E" strokeWidth="3.33333" />
                        </svg>
                        <h4>Money Back Guarantee</h4>
                    </div>
                    <div className="col-md-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path
                                d="M29.1667 31.25V35.4167C29.1667 35.9692 28.9472 36.4991 28.5565 36.8898C28.1658 37.2805 27.6359 37.5 27.0833 37.5H12.5L6.25 43.75V22.9167C6.25 22.3641 6.46949 21.8342 6.86019 21.4435C7.25089 21.0528 7.7808 20.8333 8.33333 20.8333H12.5M43.75 29.1667L37.5 22.9167H22.9167C22.3641 22.9167 21.8342 22.6972 21.4435 22.3065C21.0528 21.9158 20.8333 21.3859 20.8333 20.8333V8.33333C20.8333 7.7808 21.0528 7.25089 21.4435 6.86019C21.8342 6.46949 22.3641 6.25 22.9167 6.25H41.6667C42.2192 6.25 42.7491 6.46949 43.1398 6.86019C43.5305 7.25089 43.75 7.7808 43.75 8.33333V29.1667Z"
                                stroke="#00332E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>24/7 Support</h4>
                    </div>
                    <div className="col-md-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M13.6146 6.771C13.0143 6.77119 12.4233 6.91962 11.8941 7.2031C11.365 7.48658 10.914 7.89634 10.5812 8.396L3.10417 19.6085C2.64792 20.296 2.59375 21.1752 2.9625 21.9127C7.05435 30.0961 12.7408 37.3791 19.6875 43.3335L23.3333 46.4606C23.7978 46.8587 24.3893 47.0775 25.001 47.0775C25.6128 47.0775 26.2043 46.8587 26.6687 46.4606L30.3146 43.3356C37.2623 37.3808 42.9495 30.0971 47.0417 21.9127C47.4104 21.1752 47.3542 20.296 46.8979 19.6085L39.4167 8.396C39.0839 7.89702 38.6331 7.48785 38.1044 7.20476C37.5756 6.92166 36.9852 6.77339 36.3854 6.77308L13.6146 6.771ZM13.1812 10.1272C13.2289 10.056 13.2934 9.99767 13.3689 9.95733C13.4445 9.91699 13.5289 9.89593 13.6146 9.896H18.4896L14.5 19.471C14.4086 19.6901 14.3388 19.9175 14.2917 20.1502C12.8245 20.0406 11.359 19.9087 9.89583 19.7543L6.96875 19.4481L13.1812 10.1272ZM6.83333 22.5752C10.5717 29.4336 15.5063 35.5684 21.4042 40.6897L14.8937 23.3272C13.1175 23.2052 11.3436 23.051 9.57292 22.8647L6.83333 22.5752ZM18.3042 23.521L25 41.3835L31.6979 23.521C27.2349 23.7239 22.7651 23.7239 18.3021 23.521M35.1083 23.3272L28.5979 40.6897C34.4958 35.5684 39.4304 29.4336 43.1688 22.5752L40.4292 22.8647C38.6583 23.0502 36.8854 23.2043 35.1083 23.3272ZM43.0312 19.4481L40.1021 19.7564C38.6389 19.9108 37.1735 20.0427 35.7062 20.1522C35.6599 19.919 35.5908 19.6908 35.5 19.471L31.5104 9.896H36.3854C36.4711 9.89593 36.5555 9.91699 36.6311 9.95733C36.7066 9.99767 36.7711 10.056 36.8187 10.1272L43.0312 19.4481ZM32.4833 20.3543C27.4979 20.6127 22.5042 20.6127 17.5167 20.3543L21.875 9.896H28.125L32.4833 20.3543Z"
                                fill="#00332E" />
                        </svg>
                        <h4>High Quality</h4>
                    </div>
                    <div className="col-md-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path
                                d="M36.6666 20.0002C36.6666 30.0002 29.35 36.6668 20.3233 36.6668C12.9866 36.6668 7.06665 32.7752 4.99998 26.6668M3.33331 20.0002C3.33331 10.0002 10.65 3.3335 19.6783 3.3335C27.0133 3.3335 32.93 7.22516 35 13.3335"
                                stroke="#00332E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.6666 28.3337L4.99998 26.667L3.33331 33.3337M28.3333 11.667L35 13.3337L36.6666 6.66699"
                                stroke="#00332E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>Easy Exchange</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home