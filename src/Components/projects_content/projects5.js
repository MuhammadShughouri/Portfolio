import React from "react";
import './projects2.css'
import villa from '../images/25.jpg'
import villa1 from '../images/26.jpg'
import villa2 from '../images/27.jpg'
import villa3 from '../images/28.jpg'
import { motion} from "framer-motion";
import AOS from "aos";
AOS.init();
function Projects5(){
  

    const interstyle={
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${villa})`,
    

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
<span style={{color:"black"}} >ARCHITECTURAL DESING / VILLA </span>




</div>

</div>

<div className="col-md-6 py-5">
    <div className="contaier1 tex" style={{marginLeft:"18px"}}>

    <span style={{color:"#a5a7a7"}}>DETAILS <br></br></span>
<span style={{color:"black"}}  className="bg">The villa is designed in a modern style
 It contains different Gulf system spaces to meet customer needs
 And it relied on the design of the interface on the contrast and the creation of a striking and integrated visual vision.</span>

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


        <img  src={villa} width="100%" >

            
        </img>
        <span  className="hov">1</span>
       
       

        
        </div>


    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={villa1} width="100%"></img>
        <span  className="hov">2</span>
        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={villa2} width="100%"></img>
        <span  className="hov">3</span>

        </div>

    </div>


</div>
<div className="col-md-6 py-2">
    <div className="contaier1">
<div className="img-"> 
        <img src={villa3} width="100%"></img>
        <span  className="hov">4</span>
        </div>


    </div>


</div>


    </div>


</div>







</motion.div>

)


}

export default Projects5 ;