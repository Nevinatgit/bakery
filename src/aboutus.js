import React from 'react'

export default function Aboutus() {
  return (
    <div className='d-flex p-5 me-5 ms-5 mt-4 I' style={{ height:"700px"}}>
        <div className='text-left  ms-5' style={{width:"50%",padding:"1%"}} >
        <div className='d-flex align-items-center '  style={{ border: "none", display: "inline-block", marginRight: "10px"}}>
              <hr  style={{width: "7%", height: "1px", backgroundColor: "red", border: "none", display: "inline-block", marginRight: "10px",marginBottom:"40px"}} />
              <h6 className='mb-4' style={{fontWeight: "500", color: "red", display: "inline-block"}}>ABOUT US</h6>
        </div>
       
            <div>
            <h2 className=' mb-0 ' style={{fontWeight:"900",fontSize:"30px"}}>We Leave A Delicious</h2>
            <h2 className='mt-0 mb-4' style={{fontWeight:"900"}}> Memory For You</h2></div>
            <p >
            Klassy Cafe is one of the best restaurant HTML templates with Bootstrap v4.5.2 CSS framework. You can download and feel free to use this website template layout for your restaurant business. You are allowed to use this template for commercial purposes.
             </p>
             <br/>
            <p >
           You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please contact us for more information.
            </p>
            <div className='d-flex gap-4'>
            <img src="/images/about-thumb-01.jpg"/>
            <img src="/images/about-thumb-02.jpg"/>
            <img src="/images/about-thumb-03.jpg"/></div>
        </div>
        <div>
        <img  className="m-5 pr-5" src='/images/about-video-bg.jpg' width="500px" height="470px" /> 
        <div style={{position:"relative",borderRadius:"50%",width:"40px",height:"40px"}}></div>
        </div>
    </div>
  )
}
