import React from "react";
import { useNavigate} from 'react-router-dom';

import Projects2 from "./projects2";
import Projectsside from "./projectsside";
 function Projects_interior(){
    const navigate = useNavigate();

return( 
    
<>  
<div  >
        
<button onClick={() => navigate('/projects#interior-design')} className="back animate__animated animate__pulse animate__infinite"></button>

<span className="name_pro3 animate__animated animate__fadeInLeft">interior Sitting design </span>

<button onClick={()=>{
navigate('/drawing')

}} className="next animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>NEXT</button>

<button onClick={()=>{
navigate('/exterior-design')

}} className="pre animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>PREVIOUS</button>
    </div>
<Projects2></Projects2>
<Projectsside></Projectsside>

</>  

)


} 

export default Projects_interior;