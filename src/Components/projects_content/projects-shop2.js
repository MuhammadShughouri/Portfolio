import React from "react";
import { useNavigate } from "react-router-dom";
import Projects7 from "./projects7";
import Projectsside from "./projectsside";

function Projects_shop2(){
const navigate=useNavigate();
return(

<>
<div>

<button className="back animate__animated animate__pulse animate__infinite" onClick={()=>{

    navigate('/projects#shop-drawing2')
}}></button>
    <span className="name_pro2 animate__animated animate__fadeInLeft">shop-drawing design</span>

<button onClick={()=>{
navigate('/mosque')

}} className="next animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>NEXT</button>


<button onClick={()=>{
navigate('/drawing')

}} className="pre animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>PREVIOUS</button>

</div>

<Projects7></Projects7>
<Projectsside></Projectsside>

</>
)


} 

export default Projects_shop2;