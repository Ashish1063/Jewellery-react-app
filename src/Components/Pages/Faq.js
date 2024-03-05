import React, { useEffect } from 'react'
import { motion, Variants } from "framer-motion";
import '../CSS/faq.css'
const Faq = () => {

    const ScrollDown = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(()=>{
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
        <div className='Faq'>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="faqUpper">
                <div className="row">
                    <div className="col-md-5">
                        <motion.div variants={cardVariants} className=" ">
                            <h1 className="title text-light" >Let us</h1>
                            <h1> Help you</h1>
                        </motion.div>
                        

                    </div>
                    <div className="col-md-7">
                        <img src={require('../Images/faq/faq1.png')} alt="" />
                    </div>
                </div>
            </motion.div>
            <div className="faqBottom">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                            <div className="faqs">
                                <span>Have a question?</span>
                            <div className=" d-flex">
                                <h1 className="title">FAQ</h1>
                                <h1>'s</h1>
                            </div>
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                How does Try at Home work?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Our Try at Home service allows you to try out our designs in the comfort of your own home or office. It is a free service and there is no obligation to buy. All you need to do is select one of your favorite designs, and schedule an appointment at your convenience.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                How can I place a return request?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">you can raise a return request by calling our customer care team at +110 9343034 or by writing a email to signature@gmail.com</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Is there an option of getting jewellery with different metal or gemstone that is not offered on signature.com website?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">For this purpose, you need to call our customer care team and they will provide you with the choices.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                How can I make the payment for a product?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">We offer different methods for making payment like net banking, debit card & credit card, Cheque, demand draft and fund transfer.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headinFive">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                If there are any refunds, how long will it take to reach?
                                            </button>
                                        </h2>
                                        <div id="flush-collapsFive" class="accordion-collapse collapse" aria-labelledby="flush-headinFive" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Once we receive the product within 3 working days. We will refund the money with in 2hrs</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headinSix">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                Do you deliver products?
                                            </button>
                                        </h2>
                                        <div id="flush-collapsSix" class="accordion-collapse collapse" aria-labelledby="flush-headinSix" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">NO. Currently home delivery is unavailable.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <span>Didn't Find Answer</span>
                            <div className=" d-flex">
                                <h1 className="title">Contact</h1>
                                <h1>&nbsp; Us</h1>
                            </div>
                            <form action="">
                                <div className="col-md-12">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Enter your name.." />
                                        <label for="floatingInput">First Name</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="floatingInput" placeholder="Enter your mobile number.." />
                                        <label for="floatingInput">Mobile Number</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
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
                                    <div className="button ">
                                        <a href="" className='px-5'> Send  
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </form>
                            <h4 className='my-4'>Or</h4>
                            <div className="contactList">
                                <div className='d-flex'><div className="icon"><i class="fa-solid fa-phone"></i></div>&nbsp; +11-222-89320
                                </div>
                                <div className='d-flex'><div className="icon"><i class="fa-solid fa-envelope"></i></div>&nbsp; signature@gmail.com
                                </div>
                                <div className='d-flex'><div className="icon"><i class="fa-solid fa-location-dot"></i></div>&nbsp; Noida, UP - 110072
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq