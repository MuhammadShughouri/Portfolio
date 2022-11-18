import React from "react";
import './projects-shop2.css'

import './projects1.css'
import shop2 from '../assets/images/33.JPG'
import shop3 from '../assets/images/34.JPG'
import shop4 from '../assets/images/35.JPG'
import shop5 from '../assets/images/36.JPG'
import shop6 from '../assets/images/37.JPG'
import shop7 from '../assets/images/38.JPG'
import ProgressiveImage from "react-progressive-image";

import lood from '../assets/images/looc.gif'



import { motion} from 'framer-motion'
import Aos from "aos";
Aos.init();
function Projects7(){
  
const shopd={
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${shop2})`,

}

return(
<> 

<motion.div
data-aos="fade-right"



>

    <div id="all" className="exter" style={shopd}>

    </div>
    
<div >
<div className="row col-12 container">

<div className="col-md-5 py-5">
    <div className="contaier1 tex" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>CLIENT <br></br></span>
<span style={{color:"black"}} >AM-B-A</span> <br></br>

    </div>

    <div className="contaier1 tex vv" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>PROJECT<br></br></span>
<span style={{color:"black"}} >HALL VILLA</span>




</div>

</div>

<div className="col-md-6 py-5">
    <div className="contaier1 tex " style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>DETAILS <br></br></span>
<span style={{color:"black"}}  className="bg">We offer a business in exploiting part of the outdoor space of a house and building a small car wash that serves the surrounding area and the homeowner benefits in creating a business for him.</span>

    </div>



</div>


</div>



</div>
<br></br>

<div>
    <div className="row  col-12 mx-auto ">
<div className="col-md-6 py-2" >
    <div className="contaier1">
<div className="img- border"> 


<ProgressiveImage src={shop2}  placeholder={lood}>
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
<div className="img- border"> 
<ProgressiveImage src={shop3}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">2</span>
        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img- border"> 
<ProgressiveImage src={shop4}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' height='576px' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">3</span>

        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img- border" > 
<ProgressiveImage src={shop5}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">4</span>
        </div>


    </div>


</div>

<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img- border" > 
<ProgressiveImage src={shop6}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' height='660px' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">5</span>
        </div>


    </div>


</div>

<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img- border" > 
<ProgressiveImage src={shop7}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">6</span>
        </div>


    </div>


</div>


    </div>


</div>








</motion.div>
</>

)


}

export default Projects7 ;