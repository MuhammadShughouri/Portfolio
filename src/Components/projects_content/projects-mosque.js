import React from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

import Projects4 from "./projects4";
import Projectsside from "./projectsside";
 function Projects_mosque(){
    const navigate = useNavigate();

return( 
    
<>  
<div  >
        
<button onClick={() => navigate('/projects#architectural-mosuqe')} className="back animate__animated animate__pulse animate__infinite"></button>
<span className="name_pro animate__animated animate__fadeInLeft">mosque design</span>

<button onClick={()=>{
navigate('/villa')

}} className="next animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>NEXT</button>

<button onClick={()=>{
navigate('/hall_villa')

}} className="pre animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>PREVIOUS</button>
    </div>
<Projects4></Projects4>
<Projectsside></Projectsside>

</>  

)


} 

export default Projects_mosque;