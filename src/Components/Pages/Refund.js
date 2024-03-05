import React, { useEffect } from 'react'
import '../CSS/policy.css'
import { motion, Variants } from "framer-motion";

function Refund() {
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
        <div className='Refund policy'>
            <motion.div         
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="policyUpper">
                <motion.div variants={cardVariants}
                    className="d-flex">
                    <h1 className="title" >Refund </h1>
                    <h1> &nbsp;Policy</h1>
                </motion.div>
            </motion.div>
            <div className="policyBottom">
                <div className="container">
                    <h2 >Signature Diamonds</h2>
                    <span>Welcome to our website/mobile apps. This website/mobile apps is subject to the Refund and conditions listed below. Please read them carefully before using it. You may not use this Website/mobile apps if you do not agree to these Refund of Use. The use of this website/mobile apps constitutes your explicit assent to these Refund and conditions and the website/mobile apps Refund policy.</span>
                    <div className="card">
                        <h3>Exchange within 3 Days of Purchase:</h3>
                        <span><i class="fa-regular fa-gem"></i><p> You can exchange your jewellery at full value, provided the jewellery is in its original condition.</p></span>
                        <span><i class="fa-regular fa-gem"></i><p> xchange of ornaments in part is not allowed.</p></span>
                        <span><i class="fa-regular fa-gem"></i><p> Signature Diamonds reserves the right to evaluate the product before confirming the exchange value.</p></span>
                        <span><i class="fa-regular fa-gem"></i><p> Exchange policies will not be applicable on promotional products and products sold on special offers.</p></span>
                        <span><i class="fa-regular fa-gem"></i><p> Only one such exchange will be permitted with an invoice</p></span>

                    </div>
                    <div className="card">
                        <h3>Exchange After 3 Days of Purchase:</h3>
                        <span><i class="fa-regular fa-gem"></i> <p> Diamond Jewellery: 100% of the benchmark gold rate and 100% of the prevailing diamond carat rate of the day after deducting the discount given (percentage) at the time of purchase.</p></span>
                        <span><i class="fa-regular fa-gem"></i> <p> Platinum Jewellery: 100% of the benchmark platinum rate and 100% of the diamond value.</p></span>
                        <span><i class="fa-regular fa-gem"></i> <p> Gold Coins: 100% of the benchmark gold rate.</p></span>
                        <span><i class="fa-regular fa-gem"></i> <p> An original invoice and diamond certificate are required.</p></span>
                        <span><i class="fa-regular fa-gem"></i> <p> No Buyback for all pearls and synthetic stones.</p></span>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Refund
