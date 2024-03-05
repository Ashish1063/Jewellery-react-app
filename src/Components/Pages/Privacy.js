import React, { useEffect } from 'react'
import '../CSS/policy.css'
import { motion, Variants } from "framer-motion";
function Privacy() {
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
                duration: 0.8
            }
        }
    };
    return (
        <div className='Privacy policy'>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="policyUpper">
                <motion.div variants={cardVariants}
                    className="d-flex">
                    <h1 className="title" >Privacy </h1>
                    <h1> &nbsp; Policy</h1>
                </motion.div>
            </motion.div>
            <div className="policyBottom">
                <div className="container">
                    <h2 >Signature Diamonds</h2>
                    <span>Welcome to our website/mobile apps. This website/mobile apps is subject to the Privacy and conditions listed below. Please read them carefully before using it. You may not use this Website/mobile apps if you do not agree to these Privacy of Use. The use of this website/mobile apps constitutes your explicit assent to these Privacy and conditions and the website/mobile apps privacy policy.</span>
                    <div className="card">
                        <h3>Changes to the Privacy Policy:</h3>
                        <span><i class="fa-regular fa-gem"></i><p> Please note that this Privacy Policy may be subject to changes and updates without prior notice. We encourage you to review this policy periodically to stay informed about how we protect your privacy Collection of Personal Information:</p></span>
                    </div>
                    <div className="card">
                        <h3>Use of Information:</h3>
                        <span><i class="fa-regular fa-gem"></i> <p> We use the personal information you provide to fulfill your service requests. This includes troubleshooting problems, conducting surveys, and delivering information about our latest offers. We may also analyze demographic and profile data to better understand user activity on our website. Furthermore, we utilize IP addresses to diagnose any technical issues that may arise.</p></span>
                    </div>
                    <div className="card">
                        <h3>Security Precautions:</h3>
                        <span><i class="fa-regular fa-gem"></i> <p> We have implemented strict security measures to protect your information from loss, alteration, and misuse. Our website utilizes secure servers to store and safeguard your personal account information. Once your information is in our possession, we adhere to stringent security guidelines to prevent unauthorized access.</p></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy
