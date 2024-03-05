import React from 'react'

const Category = () => {
  return (
    <>
     <section className="Category my-5">
                <div className="w-100 d-flex justify-content-center">
                    <h1 className="title">Select</h1>
                    <h1>&nbsp; Category</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex border-bottom border-1">
                        <div className="card">
                            <div className="row">
                                <div className="categoryContent col-6">
                                    <h5>Earrings</h5>
                                    <p className='mb-0'>Grand Luxury Paradise</p>
                                  <span className='fw-bold fs-5'>20% OFF</span>
                                </div>

                                <div className="categoryImg col-6">
                                    <img className="earringImg" src={require("../../Images/Category/catImg2.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex border border-top-0">
                        <div className="card">
                            <div className="row">
                                <div className="categoryContent col-6">
                                    <h5>Necklace</h5>
                                    <p className='mb-0'>Grand Luxury Paradise</p>
                                    <span className='fw-bold fs-5'>20% OFF</span>

                                </div>
                                <div className="categoryImg col-6">
                                    <img className="image-1" src={require("../../Images/Category/Necklace/necklaceImg1.png")} alt="" />
                                    <img className="image-2 show_hide" src={require("../../Images/Category/Necklace/necklaceImg2.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex border-bottom border-1">
                        <div className="card">
                            <div className="row">
                                <div className="categoryContent col-6">
                                    <h5>Rings</h5>
                                    <p className='mb-0'>Grand Luxury Paradise</p>
                                    <span className='fw-bold fs-5'>20% OFF</span>
                                </div>
                                <div className="categoryImg col-6">
                                    <img className="image-1" src={require("../../Images/Category/Ring/ringImg1.png")} alt="" />
                                    <video loop muted autoPlay className="image-2" id="myVideo">
                                        <source src={require("../../Images/Category/Ring/ring2.mp4")} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex border-bottom border-1">
                        <div className="card">
                            <div className="row">
                                <div className="categoryContent col-6">
                                    <h5>Chain</h5>
                                    <p className='mb-0'>Grand Luxury Paradise</p>
                                    <span className='fw-bold fs-5'>20% OFF</span>
                                </div>
                                <div className="categoryImg col-6">
                                    <img className="chainImg" src={require("../../Images/Category/catImg5.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex border border-top-0">
                        <div className="card">
                            <div className="row">
                                <div className="categoryContent col-6">
                                    <div>
                                        <h5>Nosepin</h5>
                                        <p className='mb-0'>Grand Luxury Paradise</p>
                                        <span className='fw-bold fs-5'>20% OFF</span>
                                        
                                    </div>
                                  
                                </div>
                                <div className="categoryImg col-6">
                                    <img className="nosepinImg" src={require("../../Images/Category/catImg6.png")} alt="" />
                                    <div className="imageSUbCategory">
                                        <ul>
                                            <li><img src={require("../../Images/Category/catImg6.png")} alt="" /></li>
                                            <li><img src={require("../../Images/Category/catImg6.png")} alt="" /></li>
                                            <li><img src={require("../../Images/Category/catImg6.png")} alt="" /></li>
                                            <li><img src={require("../../Images/Category/catImg6.png")} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex   border-bottom border-1">
                        <div className="card">
                            <div className="row">
                                <div className="categoryContent col-6">
                                    <h5>Bangle</h5>
                                    <p className='mb-0'>Grand Luxury Paradise</p>
                                    <span className='fw-bold fs-5'>20% OFF</span>
                                </div>
                                <div className="categoryImg col-6">
                                    <img className="image-1" src={require("../../Images/Category/Bangle/bangleImg1.png")} alt="" />
                                    <img className="image-2" src={require("../../Images/Category/Bangle/bangleImg2.png")} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </>
  )
}

export default Category