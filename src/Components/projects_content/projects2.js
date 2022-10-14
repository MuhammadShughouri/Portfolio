import React from "react";
import './projects2.css'
import interior from '../assets/images/2.jpg'
import interior1 from '../assets/images/8.jpg'
import interior2 from '../assets/images/9.jpg'
import interior3 from '../assets/images/10.jpg'
import interior4 from '../assets/images/11.jpg'
import { motion} from "framer-motion";
function Projects2(){
  

    const interstyle={
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${interior})`,
    

}

return(


<motion.div
 data-aos="fade-right"


>


    <div id="all" className="exter" style={interstyle}>

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
<span style={{color:"black"}} >INTERIOR DESING </span>




</div>

</div>

<div className="col-md-6 py-5">
    <div className="contaier1 tex" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>DETAILS <br></br></span>
<span style={{color:"black"}}  className="bg">Interior design for a studio of 60 m2
 Modern style
 The studio contains a short entrance, a kitchen open to the living room, a bedroom + a servicing bathroom. We relied on clarity and modern artistic touches to give the user a feeling of comfort.</span>

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


        <img  src={interior1} width="100%" >

            
        </img>
        <span  className="hov">1</span>
       
       

        
        </div>


    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={interior2} width="100%"></img>
        <span  className="hov">2</span>
        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={interior3} width="100%"></img>
        <span  className="hov">3</span>

        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={interior4} width="100%"></img>
        <span  className="hov">4</span>
        </div>


    </div>


</div>


    </div>


</div>







</motion.div>

)


}

export default Projects2 ;