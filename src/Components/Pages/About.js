import React, { useEffect } from 'react'
import '../CSS/about.css'
import { motion, Variants } from "framer-motion";
const About = () => {
    const ScrollDown = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"

        })
    }
    useEffect(() => {
        ScrollDown();
    })
    const cardVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    };
    return (
        <div
            className='AboutUs'>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="container about-us">
                <motion.div variants={cardVariants}
                    className="row  border">
                    <div className="col-md-4">
                        <img src={require('../Images/AboutImages/AboutImage1.png')} alt="" />
                    </div>
                    <div className="col-md-8 px-4">
                        <div className="col md-12 d-flex align-items-center">
                            <div className="w-100 d-flex ">
                                <h1 className="title">About</h1>
                                <h1>&nbsp; Us</h1>
                            </div>
                            <img src={require('../Images/AboutImages/AboutImage2.png')} alt="AboutImage2" style={{ height: "80px", width: '80px', position: 'unset' }} />
                        </div>
                        <h5><b>Signature Diamond</b></h5>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, c
                            Lorem ipsum dolor sit amet, c</p>
                    </div>

                </motion.div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} className="ourStory storyMission ">
                <div className="row">
                    <div className="col-6" style={{ backgroundColor: "#54AFA6" }}>
                    </div>
                    <div className="col-6">
                    </div>
                    <motion.div variants={cardVariants} className="ourStoryContent">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="w-100 d-flex">
                                    <h1 className="title">Our</h1>
                                    <h1>&nbsp; Story</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                            </div>
                            <div className="col-md-4">
                                <img src={require('../Images/Contact/indian-map.png')} alt="" />
                            </div>

                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                 className="ourMission storyMission">
                <div className="row">
                    <div className="col-6" >
                    </div>
                    <div className="col-6" style={{ backgroundColor: "#54AFA6" }}>
                    </div>
                    <motion.div variants={cardVariants} className="ourStoryContent">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={require('../Images/AboutImages/AboutImage4.png')} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="w-100 d-flex">
                                    <h1 className="title">Our</h1>
                                    <h1>&nbsp; Mission</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                            </div>


                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                 className="ourMember">
                <div className="container">
                    <div className="w-100 d-flex w-100 justify-content-center align-items-center">
                        <h1 className="title">Our</h1>
                        <h1>&nbsp; Members</h1>
                    </div>
                    <motion.div variants={cardVariants} className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="memberImg">
                                    <img src={require('../Images/AboutImages/member1.png')} alt="" />
                                    <div className="socialIcon">
                                        <div className="dflex">
                                            <i class="fa-brands fa-square-facebook"></i>
                                            <i class="fa-brands fa-square-instagram"></i>
                                            <i class="fa-brands fa-linkedin"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="memberIdentity">
                                   <h4>John Doe</h4>
                                    <span>Managing Director</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="memberImg">
                                    <img src={require('../Images/AboutImages/member2.png')} alt="" />
                                    <div className="socialIcon">
                                        <div className="dflex">
                                            <i class="fa-brands fa-square-facebook"></i>
                                            <i class="fa-brands fa-square-instagram"></i>
                                            <i class="fa-brands fa-linkedin"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="memberIdentity">
                                   <h4>John Doe</h4>
                                    <span>Non Executive Director</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="memberImg">
                                    <img src={require('../Images/AboutImages/member3.png')} alt="" />
                                    <div className="socialIcon">
                                        <div className="dflex">
                                            <i class="fa-brands fa-square-facebook"></i>
                                            <i class="fa-brands fa-square-instagram"></i>
                                            <i class="fa-brands fa-linkedin"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="memberIdentity">
                                   <h4>John Doe</h4>
                                    <span>Non Executive Director</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    )
}

export default About