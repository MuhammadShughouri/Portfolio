import React from "react";
import './projects2.css'
import sport from '../assets/images/29.jpg'
import sport1 from '../assets/images/30.jpg'
import sport2 from '../assets/images/31.jpg'
import sport3 from '../assets/images/32.jpg'
import { motion} from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import lood from '../assets/images/looc.gif'

import AOS from "aos";
AOS.init();
function Projects6(){
  

    const sportstyle={
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${sport})`,
    

}

return(


<motion.div
 data-aos="fade-right"


>


    <div id="all" className="exter" style={sportstyle}>

    </div>
    
<div >
<div className="row col-12 container">

<div className="col-md-5 py-5">
    <div className="contaier1 tex"  style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>CLIENT <br></br></span>
<span style={{color:"black"}} >AH-S-T</span> <br></br>

    </div>

    <div className="contaier1 tex vv" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>PROJECT<br></br></span>
<span style={{color:"black"}} >ARCHITECTURAL DESING / SPORT CLUB </span>




</div>

</div>

<div className="col-md-6 py-5">
    <div className="contaier1 tex" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>DETAILS <br></br></span>
<span style={{color:"black"}}  className="bg">The stadium design is one of the complex designs to meet the requirements and needs of visitors with a modern and contemporary system
 This is what I worked on by making the way of movement comfortable for visitors and meeting all the requirements within the visitor's journey
 And the adoption of the stands and the stadium on a global system.</span>

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


<ProgressiveImage src={sport}  placeholder={lood}>
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
<ProgressiveImage src={sport1}  placeholder={lood}>
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
<ProgressiveImage src={sport2}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">3</span>

        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
<ProgressiveImage src={sport3}  placeholder={lood}>
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} width='100%' src={src} alt="an image" />
  )}
</ProgressiveImage>        <span  className="hov">4</span>
        </div>


    </div>


</div>


    </div>


</div>







</motion.div>

)


}

export default Projects6 ;