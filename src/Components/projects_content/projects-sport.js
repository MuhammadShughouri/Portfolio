import React from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './projects-exterior.css'
import Projects6 from "./projects6";
import Projectsside from "./projectsside";
import Home from "../Homepage/home";
import { motion } from "framer-motion"




function Projects_sport(){
  
    const navigate = useNavigate();


return(

<> 

<div


>

<div className="" >
       
<button onClick={()=>{
navigate('/projects#architectural-sportclub')

}} className="back animate__animated animate__pulse animate__infinite "></button>

<span className="name_pro5  animate__animated animate__fadeInLeft">sport club design </span>
  


<button onClick={()=>{
navigate('/mosque')

}} className="pre animate__animated animate__pulse animate__infinite" style={{fontSize:"14px"}}>PREVIOUS</button>

    </div>
   
<Projects6></Projects6>
<Projectsside></Projectsside>


</div>
</>
)


} 

export default Projects_sport;