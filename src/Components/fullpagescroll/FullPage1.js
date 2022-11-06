import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
 import 'animate.css';
import './FullPage.scss'
import {Link} from "react-router-dom";
import { motion} from 'framer-motion'
import 'aos/dist/aos.css';
import AOS from "aos";
import exterior from '../assets/images/1.jpg'
import interior from '../assets/images/ff.jpg'
import shop from '../assets/images/3.jpg'
import arch from '../assets/images/24.jpg'
import arch_villa from '../assets/images/25.jpg'
import arch_sport from '../assets/images/29.jpg'
import shop2 from '../assets/images/33.JPG'
import mhmd from '../assets/images/mhmd3.jpg'


AOS.init();
const anchors = [ "abouttt","exterior-project", "interior-design", "shop-drawing","shop-drawing2","architectural-mosuqe","architectural-villa","architectural-sportclub"];

class Full extends React.Component {
  
  render(){  
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', appHeight)
  appHeight()

  
return (
  <ReactFullpage
    anchors={anchors}
    navigation
    
    navigationTooltips={anchors}
    navigat
    
  //   onLeave={(origin, destination, direction) => {
  //     console.log("onLeave event", { origin, destination, direction });


  //   }
  
  // }
  
    
    render={({ state, fullpageApi }) => {
      
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
        <main> 
        <motion.div
 data-aos="fade-left"
>

          
        <div  id="scroll-pages" >      

  <div className="section  " id="mhmdinfo">
   <div >

   </div>



  </div>


          <div className="section" id="exter"  >
             
            <div style={exteri}> 
            <div className="container"> 
            <div className="full-line " > 
            
            <div className="info" > 
            
           <span className="animate__animated animate__fadeInRight" >
           <h4 id="work">work</h4>
           <h4 id="num">01</h4>

           </span>
          </div>
           </div>
           </div>
<div className="d-flex justify-content-between container weke" > 
         
            
           
            <div  className="inter animate__animated animate__fadeInRight" > 
            <span >exterior design</span>
            <h2>exterior project <br></br> Saudi Arabia</h2>
            </div>
              <Link  className="btn1 " to="/exterior-design" >
           <button  className="btn2 animate__animated animate__pulse animate__infinite ">
            </button>
            </Link>
            </div>
          </div>
          </div>
          <div className="section" id="img" style={inter}>
          <div className="container"> 
         
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


          </div>
          
          <div className="section" id="img2" style={shopdraw}>
          <div className="container"> 
            <div className="full-line2"> 
            <div className="info animate__animated animate__fadeInRight"> 
           <span>
           <h4 style={{color:'black'}} id="work">work</h4>
           <h4 id="num" style={{color:'black'}}>03</h4>

           </span>
           </div>
           <Link   className="btn5 " to="/drawing" > 
           <button className="btn6 animate__animated animate__pulse animate__infinite "></button>
             </Link>
           
            <div  className="inter2 animate__animated animate__fadeInRight"> 
            <span >shop drawing</span>
            <h2>shop drawing <br></br> America</h2>
            </div>
           </div>
           </div>


          </div>

          <div className="section" id="img2" style={shopdraw2 }>
          <div className="container"> 
            <div className="full-line2"> 
            <div className="info animate__animated animate__fadeInRight"> 
           <span>
           <h4 style={{color:'black'}} id="work">work</h4>
           <h4 id="num" style={{color:'black'}}>04</h4>

           </span>
           </div>
           <Link   className="btn7 " to="/hall_villa" > 
           <button className="btn8 animate__animated animate__pulse animate__infinite "></button>
             </Link>
           
            <div  className="inter6 animate__animated animate__fadeInRight"> 
            <span >shop drawing</span>
            <h2>Hall Villa <br></br>UAE</h2>
            </div>
           </div>
           </div>


          </div>

          <div className="section" id="img2" style={architectural}>
          <div className="container"> 
            <div className="full-line2"> 
            <div className="info animate__animated animate__fadeInRight"> 
           <span>
           <h4 style={{color:'black'}} id="work">work</h4>
           <h4 id="num" style={{color:'black'}}>05</h4>

           </span>
           </div>
           <Link   className="btn9 " to="/mosque" > 
           <button className="btn10 animate__animated animate__pulse animate__infinite "></button>
             </Link>
           
            <div  className="inter3 animate__animated animate__fadeInRight"> 
            <span >architectural design</span>
            <h2>mosque <br></br> damascus/syria</h2>
            </div>
           </div>
           </div>
          </div>


          <div className="section" id="img2" style={architectural_villa}>
          <div className="container"> 
            <div className="full-line2"> 
            <div className="info animate__animated animate__fadeInRight"> 
           <span>
           <h4 style={{color:'black'}} id="work">work</h4>
           <h4 id="num" style={{color:'black'}}>06</h4>

           </span>
           </div>
           <Link   className="btn11 " to="/villa" > 
           <button className="btn12 animate__animated animate__pulse animate__infinite "></button>
             </Link>
           
            <div  className="inter4 animate__animated animate__fadeInRight"> 
            <span >architectural design</span>
            <h2>VILLA <br></br>Saudi Arabia</h2>
            </div>
           </div>
           </div>


          </div>

          <div className="section" id="img2" style={architectural_sport}>
          <div className="container"> 
            <div className="full-line2"> 
            <div className="info animate__animated animate__fadeInRight"> 
           <span>
           <h4 style={{color:'black'}} id="work">work</h4>
           <h4 id="num" style={{color:'black'}}>07</h4>

           </span>
           </div>
           <Link   className="btn13 " to="/sport" > 
           <button className="btn14 animate__animated animate__pulse animate__infinite "></button>
             </Link>
           
            <div  className="inter5 animate__animated animate__fadeInRight"> 
            <span >architectural design</span>
            <h2>SPORT CLUB <br></br>Egypt</h2>
            </div>
           </div>
           </div>


          </div>



        </div>
        </motion.div>
        </main>
        </>
      );

    }}
    
  />
)
  }
  };

export default Full;
