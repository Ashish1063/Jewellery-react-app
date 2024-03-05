import React, { useEffect } from 'react'
import '../CSS/policy.css'
import { motion, Variants } from "framer-motion";
function Terms() {
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
    <div className='Terms policy'>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="policyUpper">
        <motion.div variants={cardVariants}
          className="d-flex">
          <h1 className="title" >Terms & </h1>
          <h1> &nbsp; Conditions</h1>
        </motion.div>
      </motion.div>
      <div className="policyBottom">
        <div className="container">
          <h2 >Signature Diamonds</h2>
          <span>Welcome to our website/mobile apps. This website/mobile apps is subject to the terms and conditions listed below. Please read them carefully before using it. You may not use this Website/mobile apps if you do not agree to these Terms of Use. The use of this website/mobile apps constitutes your explicit assent to these terms and conditions and the website/mobile apps privacy policy.</span>
          <div className="card">
            <h3>The use of this website is subject to the following terms of use:</h3>
            <span><i class="fa-regular fa-gem"></i><p>  The content of the pages of this website/mobile apps is for your general information and use only. It is subject to change without notice.</p></span>
            <span><i class="fa-regular fa-gem"></i><p> Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p></span>
          </div>
          <div className="card">
            <h3>Gift Cards:</h3>
            <span><i class="fa-regular fa-gem"></i> <p>  Signature Diamond will not be responsible in case the card is lost, stolen, or misused. The Gift Card(s) are valid for one year from the date of issuance and cannot be revalidated thereafter.</p></span>
          </div>
          <div className="card">
            <h3>Changes to Site Disclaimer:</h3>
            <span><i class="fa-regular fa-gem"></i> <p>  Signature Diamonds reserves the right to modify the website disclaimer periodically. In the event of any changes, we will inform you by posting the updated disclaimer on the website. If you do not agree to be bound by the revised disclaimer, we kindly ask you to refrain from using the website. The continued use of the website after notifying about the updated reminder shall be considered as an acceptance of the updated disclaimer.</p>></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
