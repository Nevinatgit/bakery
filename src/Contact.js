import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  return (
    <div className='mt-5 p-5 gap-5 w-100 d-flex flex-row justify-content-center align-items-center'
        style={{
            backgroundImage: 'url(/images/reservation-bg.jpg)', 
        }}
    >
        <div  style={{width:"35%"}}>
            <div className='text-white'> 
            <div className='d-flex align-items-center '  style={{ border: "none", display: "inline-block", marginRight: "10px"}}>
              <hr  style={{width: "7%", height: "2px", backgroundColor: "white", border: "none", display: "inline-block", marginRight: "10px",marginBottom:"40px"}} />
              <h6 className='mb-4' style={{fontWeight: "500", color: "white", display: "inline-block"}}>CONTACT US</h6>
        </div>
       
            <br/>
            <h2>Here You Can Make A Reservation Or Just walkin to our cafe</h2>
            <br/>
            <p>Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.</p>
            </div>
           
        <div className='d-flex gap-3'>
           
            <div className='bg-white d-flex pt-3 rounded justify-content-center flex-column align-items-center' style={{width:"230px", height:"170px"}}>
                <div style={{width:"70px", height:"70px", borderRadius:"50%", background:"coral",marginTop:"-25%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-phone" style={{fontSize: '30px', color: 'white'}}></i>
                </div>
                <h3 className='fs-4 fw-bold'>Phone Numbers</h3>
                <p className='m-0'>080-090-0990</p>
                <p className='m-0 mb-4'>080-090-0880</p>
            </div>

            <div className='bg-white pt-3 d-flex rounded justify-content-center flex-column align-items-center' style={{width:"230px", height:"170px"}}>
                <div style={{width:"70px", height:"70px", borderRadius:"50%", background:"coral", marginTop:"-25%",display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-envelope" style={{fontSize: '30px', color: 'white'}}></i>
                </div>
                <h3 className='fs-4  fw-bold'>Emails</h3>
                <p className='m-0'>hello@company.com</p>
                <p className='m-0 mb-4'>info@company.com</p>
            </div>
        </div>
        </div>

        <div className='bg-white p-4 rounded' style={{width:"500px",height:'500px'}}>
            <h2 className='m-3 text-center' style={{fontWeight:"900"}}>Table Reservation</h2>
            <form className='p-4 ms-4' style={{ width: "400px" }}>
                <div className="mb-3 row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-6">
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="number"
                            className="form-control"
                            id="guests"
                            name="guests"
                            min="1"
                            placeholder="Number of Guests"
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-6">
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="time"
                            className="form-control"
                            id="time"
                            name="time"
                            required
                        />
                    </div>
                </div>

                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                
                <button type="submit" className="btn btn-primary mt-2 col-12" style={{background:"coral"}}>
                    Make a Reservation
                </button>
            </form>
        </div>
    </div>
  )
}
