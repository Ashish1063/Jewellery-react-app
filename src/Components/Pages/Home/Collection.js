import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collection = () => {

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
    <>
    
    <section className="Collection container">
                <div className="collectionTitle d-flex w-100 justify-content-center m-0 ">
                    <h1 className="title">Our</h1>
                    <h1> &nbsp; Collection</h1>
                </div>
                <Slider {...settings}>
                    <div className="col-md-4  ">
                        <div className="card card-body">
                            <div className="cardTop">
                                <div className="icon ">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-solid fa-share"></i>
                                </div>
                                <img src={require("../../Images/Category/catImg2.png")} alt="" />
                            </div>
                            <div className="cardBottom">
                                <div className="row">
                                    <div className="col-6 left">
                                        <h4 className="m-0">Earrings</h4>
                                        {/* <p className="lh-1">Floral Uncut Diamond Jhumkis</p> */}
                                        <span className="fs-6 mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="20" viewBox="0 0 26 20" fill="none">
                                            <path
                                                d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                fill="#414142" fillOpacity="0.43" />
                                        </svg>Gold</span>
                                    </div>
                                    <div className="col-6 right text-lg-end text-end">
                                        <p className="text-muted fs-6 text-decoration-line-through m-0"><i
                                            className="fa-solid fa-indian-rupee-sign"></i>56,135,00</p>
                                        <span className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i>54,505,00</span>
                                        <button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card card-body">
                            <div className="cardTop">
                                <div className="icon">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-solid fa-share"></i>
                                </div>
                                <img src={require("../../Images/Category/Ring/ringImg1.png")} alt="" />
                            </div>
                            <div className="cardBottom">
                                <div className="row">
                                    <div className="col-6 left">
                                        <h4 className="m-0">Rings</h4>
                                        {/* <p className="lh-1"> Exciting Single Diamond Ring</p> */}
                                        <span className="fs-6 mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="20" viewBox="0 0 26 20" fill="none">
                                            <path
                                                d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                fill="#414142" fillOpacity="0.43" />
                                        </svg> Gold</span>
                                    </div>
                                    <div className="col-6 right text-lg-end text-end">
                                        <p className="text-muted fs-6 text-decoration-line-through m-0"><i
                                            className="fa-solid fa-indian-rupee-sign"></i>181,616,00</p>
                                        <span className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i>180,246,00</span>
                                        <button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card card-body">
                            <div className="cardTop">
                                <div className="icon">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-solid fa-share"></i>
                                </div>
                                <img src={require("../../Images/Category/catImg6.png")} alt="" />
                            </div>
                            <div className="cardBottom">
                                <div className="row">
                                    <div className="col-6 left">
                                        <h4 className="m-0">Nosepin</h4>
                                        {/* <p className="lh-1">Cosmos Glistening Diamond Nose Pin</p> */}
                                        <span className="fs-6 mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="20" viewBox="0 0 26 20" fill="none">
                                            <path
                                                d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                fill="#414142" fillOpacity="0.43" />
                                        </svg>Platinum</span>
                                    </div>
                                    <div className="col-6 right text-lg-end text-end">
                                        <p className="text-muted fs-6 text-decoration-line-through m-0"><i
                                            className="fa-solid fa-indian-rupee-sign"></i>18,891,00</p>
                                        <span className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i>18,441,00</span>
                                        <button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card card-body">
                            <div className="cardTop">
                                <div className="icon">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-solid fa-share"></i>
                                </div>
                                <img src={require("../../Images/Category/catImg5.png")} alt="" />
                            </div>
                            <div className="cardBottom">
                                <div className="row">
                                    <div className="col-6 left">
                                        <h4 className="m-0">Pendant</h4>
                                        {/* <p className="lh-1">Eternal Spark Diamond Pendant</p> */}
                                        <span className="fs-6 mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="20" viewBox="0 0 26 20" fill="none">
                                            <path
                                                d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                fill="#414142" fillOpacity="0.43" />
                                        </svg> Silver</span>
                                    </div>
                                    <div className="col-6 right text-lg-end text-end">
                                        <p className="text-muted fs-6 text-decoration-line-through m-0"><i
                                            className="fa-solid fa-indian-rupee-sign"></i>58,726,00</p>
                                        <span className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i>56,630,00</span>
                                        <button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card card-body">
                            <div className="cardTop">
                                <div className="icon">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-solid fa-share"></i>
                                </div>
                                <img src={require("../../Images/Category/catImg7.png")} alt="" />
                            </div>
                            <div className="cardBottom">
                                <div className="row">
                                    <div className="col-6 left">
                                        <h4 className="m-0">Bangel</h4>
                                        {/* <p className="lh-1"> Grand Luxury Paradise</p> */}
                                        <span className="fs-6 mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="20" viewBox="0 0 26 20" fill="none">
                                            <path
                                                d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                fill="#414142" fillOpacity="0.43" />
                                        </svg> Gold</span>
                                    </div>
                                    <div className="col-6 right text-lg-end text-end">
                                        <p className="text-muted fs-6 text-decoration-line-through m-0"><i
                                            className="fa-solid fa-indian-rupee-sign"></i> 63,330,00</p>
                                        <span className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 43,340,00</span>
                                        <button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
    </>
  )
}

export default Collection