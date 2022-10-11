import React from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

import Projects5 from "./projects5";
import Projectsside from "./projectsside";
 function Projects_villa(){
    const navigate = useNavigate();

return( 
    
<>  
<div  >
        
<button onClick={() => navigate('/projects#architectural-villa')} className="back animate__animated animate__pulse animate__infinite"></button>

<span className="name_pro1 animate__animated animate__fadeInLeft">villa design</span>

<button onClick={()=>{
navigate('/sport')

}} className="next animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>NEXT</button>

<button onClick={()=>{
navigate('/mosque')

}} className="pre animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>PREVIOUS</button>
    </div>
<Projects5></Projects5>
<Projectsside></Projectsside>

</>  

)


} 

export default Projects_villa;