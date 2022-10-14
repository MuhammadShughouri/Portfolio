import React from "react";
import './projects1.css'
import shopdrawing from '../images/12.jpg'

import { motion} from 'framer-motion'
import Aos from "aos";
Aos.init();
function Projects3(){
  
const shopd={
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${shopdrawing})`,

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
<span style={{color:"black"}} >CAR WASH</span>




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
<div className=" py-2" >
    <div className="contaier1">
<div className="img-"> 


        <img  src={shopdrawing} width="100%" >

            
        </img>
        <span  className="hov">1</span>
       
       

        
        </div>


    </div>


</div>



    </div>


</div>








</motion.div>
</>

)


}

export default Projects3 ;