import React from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './projects-exterior.css'
import Projects1 from "./projects1";
import Projectsside from "./projectsside";
import Home from "../Homepage/home";
import { motion } from "framer-motion"




function Projects_exterior(){
  
    const navigate = useNavigate();


return(

<> 
<main> 
<div 
className="body1"

>

<div className="" >
       
<button onClick={()=>{
navigate('/projects#exterior-project')

}} className="back animate__animated animate__pulse animate__infinite "></button>

<span className="name_pro4  animate__animated animate__fadeInLeft">exterior Sitting design </span>
  
<button onClick={()=>{
navigate('/interior-design')

}} className="next " style={{fontSize:"14px"}}>NEXT</button>

    </div>
   
<Projects1></Projects1>
<Projectsside></Projectsside>


</div>
</main>
</>
)


} 

export default Projects_exterior;