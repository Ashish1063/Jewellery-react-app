import React from 'react'
import '../../CSS/jewellery.css'
import { Link } from 'react-router-dom'
const Nosepin = () => {
    return (
        <div className='Jewellery Nosepin'>
            <div className="jewelleryTop">
              
                <div className="col-12 d-flex  flex-wrap">
                    <div className="col-md-4 left ps-2">
                        <div className="col-12">
                            <h1>Nosepin</h1>
                            <h5>Grand Luxury Paradise</h5>
                        </div>
                        <div className="col-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                        </div>
                    </div>
                    <div className="col-md-8 right">
                        <img src={require('../../Images/Jewellery/NosepinBanner.png')} alt="" />
                    </div>
                </div>
               
            </div>
            <div className="jewelleryBottom">
                <div className="Category">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="pills-1-tab" data-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="true">Nose Studs</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-2-tab" data-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="false">Hoops</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-3-tab" data-toggle="pill" href="#pills-3" role="tab" aria-controls="pills-3" aria-selected="false">Labret Nose Rings</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-4-tab" data-toggle="pill" href="#pills-4" role="tab" aria-controls="pills-4" aria-selected="false">Nath</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-5-tab" data-toggle="pill" href="#pills-5" role="tab" aria-controls="pills-5" aria-selected="false">Nostrill-screw</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                            <div className="row">
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin1.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin2.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin3.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin4.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin3.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin4.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin1.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin1.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                            <div className="row">
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin1.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin1.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
                            <div className="row">
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin4.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">
                            <div className="row">
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin4.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin3.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-5" role="tabpanel" aria-labelledby="pills-5-tab">
                            <div className="row">
                                <div className="col-md-3 ">
                                    <div className="card card-body">
                                        <div className="cardTop">
                                            <div className="icon ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
                                                    fill="none">
                                                    <path
                                                        d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04688 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861ZM13 20.8711C13 20.8711 2.57031 14.1885 2.57031 8.29397C2.57031 5.30861 5.04004 2.88869 8.08691 2.88869C10.2285 2.88869 12.0859 4.084 13 5.8301C13.9141 4.084 15.7715 2.88869 17.9131 2.88869C20.96 2.88869 23.4297 5.30861 23.4297 8.29397C23.4297 14.1885 13 20.8711 13 20.8711Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                                    fill="none">
                                                    <path
                                                        d="M18 9V3L28.5 13.5L18 24V18C10.5 18 5.25 20.25 1.5 25.5L2.7 21L3 20.4C4.20309 17.2996 6.24161 14.5931 8.88938 12.5808C11.5372 10.5685 14.6906 9.32903 18 9Z"
                                                        fill="#7A7A7A" />
                                                </svg>
                                            </div>
                                            <img src={require("../../Images/Jewellery/Nosepin/Nosepin1.png")} alt="" />
                                        </div>
                                        <div className="cardBottom">
                                            <div className="row">
                                                <div className="col-6">
                                                     <h5 className="m-0 mb-2">Nosepin</h5>
                                                   
                                                    <span className="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                                        height="20" viewBox="0 0 26 20" fill="none">
                                                        <path
                                                            d="M16.7255 0L2.27901 8.30983L0 14.8808L0.400634 15.1109L8.91254 20L26 10.1851L23.9089 4.214L16.7255 0ZM23.3189 5.68921L24.7097 9.66084L19.0289 12.9239L22.7155 6.03401L23.3189 5.68915V5.68921ZM18.3573 8.52326L14.66 15.4332L12.3519 16.759L16.3508 9.66927L18.3573 8.5232V8.52326ZM2.88542 9.74804L4.44796 10.6406L1.45625 13.8688L2.88542 9.74804ZM14.5631 10.6904L10.5741 17.7624L10.5885 17.772L9.63532 18.3195L9.95631 13.3217L14.5631 10.6904ZM5.40526 11.1872L6.34484 11.7239L2.99681 15.3367L2.05906 14.798L5.40526 11.1872ZM8.92511 13.2218L8.58314 18.5454L5.58655 16.8242L8.92511 13.2218Z"
                                                            fill="#414142" fillOpacity="0.43" />
                                                    </svg> Gold</span>
                                                </div>
                                                <div className="col-6 text-lg-end text-end">
                                                    <h5 className="text-black-50 fs-6 text-decoration-line-through"><i
                                                        className="fa-solid fa-indian-rupee-sign"></i> 60,000</h5>
                                                     <h2 className="fs-6"><i className="fa-solid fa-indian-rupee-sign"></i> 40,000</h2>
                                                   <Link to='/detail'><button className="btn btn-light"> <i className="fa-solid fa-arrow-right"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosepin