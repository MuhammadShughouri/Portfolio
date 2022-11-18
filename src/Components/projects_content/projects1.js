import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import './projects1.css'
import exterior from '../assets/images/1.png'
import exterior1 from '../assets/images/4.jpg'
import exterior2 from '../assets/images/5.jpg'
import exterior3 from '../assets/images/6.jpg'
import exterior4 from '../assets/images/7.jpg'
import lod from '../assets/images/lod.gif'
import lood from '../assets/images/looc.gif'


import { motion} from 'framer-motion'
import AOS from "aos";
import ProgressiveImage from "react-progressive-image";
AOS.init();


function Projects1(){



  
const interstyle={
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${exterior})`,

}


return(
<>



<motion.div
    data-aos="fade-right"
  >
  
<div className=""> 
    <div id="all" className="exter " style={interstyle}>

    </div>
    
<div >
    
<div className="row col-12 container" >

<div className="col-md-6 py-5" >
    
    <div className="contaier1 tex " style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>CLIENT <br></br></span>
<span style={{color:"black"}} >GH-A-A</span> <br></br>

    </div>

    <div className="contaier1 tex vv" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>PROJECT<br></br></span>
<span style={{color:"black"}} >EXTERIOR DESING</span>




</div>

</div>

<div className="col-md-6 py-5">
    <div className="contaier1 tex" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>DETAILS <br></br></span>
<span style={{color:"black"}}  className="bg">Outdoor seating for meeting guests and small events
 It has views from three sides
 In addition, there is a servicing room to meet the needs.</span>

    </div>



</div>


</div>



</div>
<br></br>

<div>
    <div className="row  col-12 mx-auto ">
<div className="col-md-6 py-2" >
    <div className="contaier1">
<div className="img-"> 
<ProgressiveImage src={exterior1}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>

        <span  className="hov">1</span>
       
       

        
        </div>


    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
<ProgressiveImage src={exterior2}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">2</span>
        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
<ProgressiveImage src={exterior3}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">3</span>

        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-" > 
<ProgressiveImage src={exterior4}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">4</span>
        </div>


    </div>


</div>


    </div>


</div>








</div>
</motion.div>
</>

)


}

export default Projects1 ;