import React from "react";
import './projects2.css'
import architectural from '../assets/images/24.jpg'
import arch1 from '../assets/images/18.jpg'
import arch2 from '../assets/images/19.jpg'
import arch3 from '../assets/images/20.jpg'
import arch4 from '../assets/images/21.jpg'
import { motion} from "framer-motion";
function Projects2(){
  

    const archstyle={
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${architectural})`,
    

}

return(


<motion.div
 data-aos="fade-right"


>


    <div id="all" className="exter" style={archstyle}>

    </div>
    
<div >
<div className="row col-12 container">

<div className="col-md-5 py-5">
    <div className="contaier1 tex"  style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>CLIENT <br></br></span>
<span style={{color:"black"}} >AH-S-T</span> <br></br>

    </div>

    <div className="contaier1 tex vv " style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>PROJECT<br></br></span>
<span style={{color:"black"}} >ARCHITECTURAL DESING / MOSQUEE </span>




</div>

</div>

<div className="col-md-6 py-5">
    <div className="contaier1 tex" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>DETAILS <br></br></span>
<span style={{color:"black",}}  className="bg">The mosque was designed in the Ottoman style after his name and was the basis for making it a landmark in the region
 Because it is considered the second largest mosque in Damascus, meaning that it can receive 6000 worshipers.</span>

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


        <img  src={arch1} width="100%" >

            
        </img>
        <span  className="hov">1</span>
       
       

        
        </div>


    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={arch2} width="100%"></img>
        <span  className="hov">2</span>
        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={arch3} width="100%"></img>
        <span  className="hov">3</span>

        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={arch4} width="100%"></img>
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