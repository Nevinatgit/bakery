import React from 'react'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const styles = {
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  iconLink: {
    textDecoration: 'none',
  },
  icon: {
    fontSize: '24px',
    color: '#333', // You can change the color of the icons
    transition: 'color 0.3s',
  },
};
export default function Chefs() {

    const Chefcard = (props) => {
        return (
          <div className="card p-2" style={{ width: '20rem' }}>
            <div className='image'>
            <img
              src={props.img}
              className="card-img-top "
              alt="Card image"
            />
            <div className="circle" style={{width:"70px",height:"0px",color:"white",borderRadius:"50%",position:"relative",top:"-170px",right:"-120px"}}>
            <div className='d-flex gap-3  justify-content-center ' style={{maxheight:"100%"}} >
                <div className='bg-white align-items-center' style={{borderRadius:"50%",display:"flex",justifyContent:"center",width:"40px",height:'40px'}}>
                <FontAwesomeIcon icon={faFacebookF} style={styles.icon} />
                  </div>
                <div className='bg-white align-items-center' style={{borderRadius:"50%",display:"flex",justifyContent:"center",width:"40px",height:'40px'}}>
                <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
                </div>
            
                <div className='bg-white align-items-center' style={{borderRadius:"50%",display:"flex",justifyContent:"center",width:"40px",height:'40px'}}>
                <FontAwesomeIcon icon={faLinkedinIn} style={styles.icon} />
                </div>
            </div>
            </div>
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                {props.text}
              </p>
             
            </div>
          </div>
        );
      };
      
      
  return (
    <div className=' mt-5 pt-2'>
        <div className='d-flex justify-content-center align-items-center flex-column mt-5 '>
        <div className='d-flex align-items-center '  style={{ border: "none", display: "inline-block", marginRight: "10px"}}>
            
              <h6 className='mb-4' style={{fontWeight: "500", color: "red", display: "inline-block"}}>OUR CHEFS</h6>
        </div>
       <div>
       <h2 className=' mb-0 ' style={{fontWeight:"900",fontSize:"30px"}}>We offer the best</h2>
       <h2 className='mt-0 mb-4' style={{fontWeight:"900"}}> ingredients for you</h2></div>
       <div className='d-flex gap-3'>
            <Chefcard img="images/chefs-01.jpg" title="Randy Walker" text="Pastry Chef"/>
            <Chefcard img="images/chefs-02.jpg" title="David Martin" text="Cookie Chef"/>
            <Chefcard img="images/chefs-03.jpg" title="Peter Perkson" text="Pancake Chef"/>
       </div>
       </div>
    </div>
  )
}
