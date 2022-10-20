import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

 import 'animate.css';
import './FullPage.scss'
import {Link} from "react-router-dom";
import { motion} from 'framer-motion'
import 'aos/dist/aos.css';
import AOS from "aos";
import exterior from '../assets/images/1.png'
import interior from '../assets/images/2.jpg'
import shop from '../assets/images/3.jpg'
import arch from '../assets/images/24.jpg'
import arch_villa from '../assets/images/25.jpg'
import arch_sport from '../assets/images/29.jpg'
import shop2 from '../assets/images/33.JPG'
import mhmd from '../assets/images/mhmd3.jpg'


AOS.init();

function Full () {
 
    
  //   onLeave={(origin, destination, direction) => {
  //     console.log("onLeave event", { origin, destination, direction });


  //   }
  
  // }
  
    
      
      // console.log("render prop change", state, fullpageApi);

      const exteri={

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${exterior})`,
        height:'100%'

      }
      
      const inter={

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${interior})`,
height:'100%'
      }
      const shopdraw={

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${shop})`,

      }
      const shopdraw2={

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${shop2})`,

      }

      
        


      const architectural={

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        backgroundImage: `url(${arch})`,

      }
      const architectural_villa={

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        backgroundImage: `url(${arch_villa})`,

      }

      const architectural_sport={

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        backgroundImage: `url(${arch_sport})`,

      }
      const mhmdinfo={

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        backgroundImage: `url(${mhmd})`,
        
        

      }
  
  
  
      return (
        <>
        
        <motion.div
 data-aos="fade-left"
        >

          
        <div  id="scroll-pages">      

  

        <Fullpage>

<FullPageSections>

  <FullpageSection style={{
   
  }}>
<div style={exteri}>

<div className="full-line "> 
            
            <div className="info" > 
            
           <span className="animate__animated animate__fadeInRight">
           <h4 id="work">work</h4>
           <h4 id="num">01</h4>

           </span>
          </div>
           </div>
        
<div className="d-flex justify-content-between container weke" > 
         
            
           
            <div  className="inter animate__animated animate__fadeInRight" > 
            <span >exterior design</span>
            <h2>exterior project <br></br> Saudi Arabia</h2>
            </div>
              <Link  className="btn1 " to="/exterior-design" >
           <button className="btn2 animate__animated animate__pulse animate__infinite ">
            </button>
            </Link>
            </div>

</div>

  </FullpageSection>
  <FullpageSection style={{
  
  }}>
<div style={inter}> 
<div className="full-line1">
            
            <div className="info animate__animated animate__fadeInRight"> 
             
           <span>
           <h4   id="work">work</h4>
           <h4 id="num">02</h4>


           </span>
           
           </div>
           
           <Link  className="btn3" to="/interior-design" >
           <button className="btn4 go animate__animated animate__pulse animate__infinite">
              
            </button>
            </Link>
            <div  className="inter1 animate__animated animate__fadeInRight" > 
            <span >interior design</span>
            <h2>interior project <br></br> Turkey Istanbul</h2>
            </div>
          
           </div>
           
           </div>

          

  </FullpageSection>
  <FullpageSection style={{
    backgroundColor: 'firebrick',
    padding: '1em',
  }}>3</FullpageSection>

</FullPageSections>

</Fullpage>


        </div>
        </motion.div>
        </>
      );

    
    


  
  };

export default Full;
