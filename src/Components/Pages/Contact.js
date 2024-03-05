import React, { useEffect } from 'react'
import { motion, Variants } from "framer-motion";
import '../CSS/contact.css'
const Contact = () => {
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
        <div className='Contact'>
            <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} className="UpperContact py-5">
                <motion.div variants={cardVariants} className="row">
                    <div className=" col-md-12 w-100 d-flex justify-content-center">
                        <h1 className="title">Contact</h1>
                        <h1>&nbsp; Us</h1>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <i className="fa-solid fa-envelope"></i>
                            <p>signature@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>  Signature Diamonds
                                Sec - 95, Noida,
                                UP, India
                                110065</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <i className="fa-solid fa-phone"></i>
                            <p>+110013767868</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <i class="fa-brands fa-square-whatsapp" style={{ fontSize: "24px" }}></i>
                            <p>+91 8890899033</p>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
            <section className="BottomContact py-5">
                <div className="row">
                    <div className=" col-md-12 w-100 d-flex justify-content-center">
                        <h1 className="title">Get</h1>
                        <h1>&nbsp; In Touch</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Enter your first name.." />
                            <label for="floatingInput">First Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Enter your last name.." />
                            <label for="floatingInput">Last Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="Enter your mobile number.." />
                            <label for="floatingInput">Mobile Number</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="button">
                            <a href="" className='px-5'>Send
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Contact