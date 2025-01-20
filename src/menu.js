import React, { useEffect, useRef, useState } from 'react'
import { faChevronRight,faChevronLeft, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './menu.css'
export default function Menu() {
    let [count,setCount]=useState(1)
    let imgref= useRef(null)
    let [direction,setDirection]=useState(1)
    let [imageUrl,setimageUrl]= useState("images/slide-01.jpg")
    let IncrementCount=()=>{
      setDirection(1)
        if(count!=10){
        setCount(count+1)
        }
        else{
            setCount(1)
        }
    }
    let decrementCount=()=>{
      setDirection(-1)
      if(count>=-5){
      setCount(count-1)
      }
      else{
          setCount(1)
      }
  }
    const getTranslateX = () => {
    if(direction==1){
      return `-${295 * (count - 1)}px`;
    }else{
      return `-${295 * (count - 1)}px`;
    }
  };
  
  let TranslateX=()=>{
    return `-${299+295 * (count - 1) }px`;
  }
  useEffect(()=>{
    const intervalId = setInterval(() => {
      IncrementCount()
    }, 2000);
    return () => clearInterval(intervalId);
  })
    let Foodcard=(prop)=>{
        return(
        <div >
            {console.log(prop.index)}
            <div className="outer-div" style={{
                backgroundImage: 'url(/images/menu-item-0'+prop.index+'.jpg)', 
              
                width: '270px',
                height:"380px" 
            }}  >
               <div className="" style={{ width: "50px", height: "50px", background: "#fb5849",fontSize:'20px',fontWeight:"700",color:"white",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"45px" }}>
               {`$${9}`}
        </div>
             <div className="inner-div  d-flex justify-content-center flex-column " style={{backgroundColor:"#fb5849",width:"270px",height:"170px"}}>
                <h2 className='mt-3 ms-5 text-white' style={{fontWeight:"700",fontSize:"20px"}}>Klassy pancake</h2>
                <br/>
                <p className='ms-3 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
            </div>
            </div>
           
        </div>
        )
    }
  return (
    <div>
    <div className='m-5' >
        <div style={{marginLeft:"10%"}}>
         <div className='d-flex align-items-center '  style={{ border: "none", display: "inline-block", marginRight: "10px"}}>
              <hr  style={{width: "4%", height: "1px", backgroundColor: "red", border: "none", display: "inline-block", marginRight: "10px",marginBottom:"40px"}} />
              <h6 className='mb-4' style={{fontWeight: "500", color: "red", display: "inline-block"}}>OUR MENU</h6>
        </div>
        <div>
        <h2 className=' mb-0 ' style={{fontWeight:"1000",fontSize:"30px"}}>Our selection of cakes</h2>
        <h2 className='mt-0 mb-4' style={{fontWeight:"900"}}> with quality taste</h2></div>
        </div>
        <br/>
        <br/>
       
    </div>
    <div 
  className="col-12 col-md-6 m-4 align-items-center gap-4 moveleft" 
  style={{
    display: "flex",
    transform: direction === 1 ? `translateX(${getTranslateX()})` : `translateX(${getTranslateX()})`,
    transition: count==1?'none':'transform 1s ease'
  }}>
      
        {[1, 2, 3, 4, 5].map((index) => (
          <Foodcard key={index} index={index} className="ml-5"/>
        ))}
        
        {[1, 2, 3, 4, 5].map((index) => (
          count > index ?<Foodcard key={index} index={index} />: null
        ))}
             {[1, 2, 3, 4, 5].map((index) => (
          count > index ?<Foodcard key={index} index={index} />: null
        ))}
    </div>

      <br/>
      <div className=""  style={{color:"red",display:'inline-block',marginLeft:"48.5%"}} onClick={()=>IncrementCount(1)}>
      <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "20px" }} />
</div> 
<span style={{width:"40px"}}> </span>
      <div className="" style={{color:"red",display:'inline-block'}} onClick={()=>decrementCount()}>
      <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "20px" }} />

        </div>
    </div>
  )
}
