import React, { useEffect, useRef, useState } from 'react';
import './menu.css'
export default function Banner() {
    let [count,setCount]=useState(1)
    let imgref= useRef(null)
    let [imageUrl,setimageUrl]= useState("images/slide-01.jpg")
   
    useEffect(() => {
     
      const intervalId = setInterval(() => {
        IncrementCount()
      }, 3000);
     
      return () => clearInterval(intervalId);
    });
 let IncrementCount=()=>{
    if(count!=3){
      setCount(count+1)
    }
    else{
        setCount(1)
    }
 }
 
 useEffect(()=>{
    setimageUrl("images/slide-0"+count+".jpg")
 },[count])
  return (
    <div>
    
      <div className=" ms-0 d-flex " style={{ height: '700px' }}> 
      
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column" style={{ width: '33%',
        backgroundImage: 'url(/images/top-left-bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        
       }}>
          <h4 className='font-Dancing Script fs-1 text-white cursive' >KlassyCafe</h4>
          <h6 className='text-white'>THE BEST EXPERIENCE</h6>
          <button className="btn btn-sucess col-5 bg-white" style={{color:"red"}} >
          Make A Reservation
        </button>
        </div>
        <div className="w-100 align-items-center " style={{position:"relative",overflow:"hidden" }}>
              <img
              src="images/slide-01.jpg"
              alt="First"
              style={{
              
                position:"absolute",
                top: '0',
                left: count === 1 ? '0%' : count <1 ? '100%' : count>1?'-100%':count==3?"0":"0",
                width: '100%',
                height: '100%',
                transition: 'left 1s ease', // Smooth slide transition
              }}
            />
            {/* Second Image */}
            <img
              src="images/slide-02.jpg"
              alt="Second"
              style={{
                
                position:"absolute",
                top: '0',
                left: count === 2 ? '0%' : (count <2 )? '100%' : count>2?'-100%':count==3?"0":"0",
                width: '100%',
                height: '100%',
                transition: 'left 1s ease', // Smooth slide transition
              }}
            />
            <img
            src="images/slide-03.jpg"
            alt="Second"
            style={{
              position:"absolute",
              top: '0',
              left: count === 3 ? '0%' : count <3  ? '100%' : count>3?'-100%':count==4?"0":"0",
              width: '100%',
              height: '100%',
              transition: 'left 1s ease', // Smooth slide transition
            }}
          />
    <div className='d-flex h-100 align-items-center'>
        <div className="ms-3 d-flex justify-content-center handle" style={{width:"40px", height:"40px",borderRadius:"50%"}} onClick={()=>IncrementCount()}><h2>&lt;</h2></div> 
        <div className="me-4 ms-auto  d-flex justify-content-center handle" style={{width:"40px", height:"40px",borderRadius:"50%"}} onClick={()=>IncrementCount()}><h2>&gt; </h2></div>
     </div>
     </div>
 
      </div>
   
    </div>
  );
}

