import React from 'react'
import '../Loader/Loader.css'
const Loader = () => {
  return (
    <>
    <div className='d-flex align-items-center  justify-content-center' style={{height: "100vh"}}>
  <div class="loader">
    <span class="loader-text">loading</span>
      <span class="load"></span>
  </div>
    </div>

    
    </>
  )
}

export default Loader