import React, {useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 

  
const BackToTopButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 100){ 
      setVisible(true) 
    }  
    else if (scrolled <= 100){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <button onClick={scrollToTop} style={{position: "sticky", bottom: "0px", left:"90%", display: visible ? 'inline' : 'none' }}>
     Till Topp
    </button>
  ); 
} 
  
export default BackToTopButton; 