import React from "react";
import { useNavigate } from "react-router-dom";
import Projects3 from "./projects3";
import Projectsside from "./projectsside";

function Projects_shop(){
const navigate=useNavigate();
return(

<>
<div>

<button className="back animate__animated animate__pulse animate__infinite" onClick={()=>{

    navigate('/projects#shop-drawing')
}}></button>
    <span className="name_pro2 animate__animated animate__fadeInLeft">shop-drawing design</span>

<button onClick={()=>{
navigate('/hall_villa')

}} className="next animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>NEXT</button>


<button onClick={()=>{
navigate('/interior-design')

}} className="pre animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>PREVIOUS</button>

</div>

<Projects3></Projects3>
<Projectsside></Projectsside>

</>
)


} 

export default Projects_shop;