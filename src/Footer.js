import React from 'react'
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
    fontSize: '30px',
    color: '#fb5849', // You can change the color of the icons
    transition: 'color 0.3s',
  },
};
export default function Footer() {
  return (
    <div >
    <div className='d-flex w-100 p-5' style={{background:"coral",height:"150px",gap:'300px'}}>
        <div className='d-flex gap-2  justify-content-center '  >
        <div className='bg-white align-items-center' style={{borderRadius:"50%",display:"flex",justifyContent:"center",width:"50px",height:'50px'}}>
        <FontAwesomeIcon icon={faFacebookF} style={styles.icon} />
          </div>
        <div className='bg-white align-items-center' style={{borderRadius:"50%",display:"flex",justifyContent:"center",width:"50px",height:'50px'}}>
        <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
        </div>
        <div className='bg-white align-items-center' style={{borderRadius:"50%",display:"flex",justifyContent:"center",width:"50px",height:'50px'}}>
        <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
        </div>
        <div className='bg-white align-items-center' style={{borderRadius:"50%",display:"flex",justifyContent:"center",width:"50px",height:'50px'}}>
        <FontAwesomeIcon icon={faLinkedinIn} style={styles.icon} />
        </div>
        </div>
        <img width="140px" height="60px" src="/images/white-logo.png"/>
        <img  width="140px" height="60px" src="/images/peta.jpg"/>
    </div>
    <div>
    <h6 className='d-flex justify-content-center'>All ingredients are vegan and Cruelty free</h6></div>
    </div>
  )
}
