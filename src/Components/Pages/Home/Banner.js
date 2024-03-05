import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
     <section className="home">
                <div className="content">
                    <div className="subContent">
                        <h1>Best Jewellery
                            Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <div className="button">
                            <Link to="/signature">Discover more
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <video loop muted autoPlay id="myVideo " >
                    <source src={require("../../Images/homeVideo1.mp4")} type="video/mp4" />
                </video>
            </section>
    
    </>
  )
}

export default Banner