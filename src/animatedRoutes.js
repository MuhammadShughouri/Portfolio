import React from "react";
import {  Routes, Route, useLocation } from "react-router-dom";
import Full from './Components/fullpagescroll/FullPage1';
import SplashPage from './Components/Splashpage/splash';
import Projects_exterior from "./Components/projects_content/projects-exterior";
import Projects_interior from "./Components/projects_content/projects-interior";
import Projects_shop from "./Components/projects_content/projects-shop";
import Projects_shop2 from "./Components/projects_content/projects-shop2";
import Projects_mosque from "./Components/projects_content/projects-mosque";
import Projects_villa from "./Components/projects_content/projects-villa";
import Projects_sport from "./Components/projects_content/projects-sport";
import BackPages from "./Components/backpages/backpages";
import Home from './Components/Homepage/home';
import {AnimatePresence} from 'framer-motion'
function AnimatedRoutes(){
const location=useLocation();
return(
    <AnimatePresence> 
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<SplashPage/>}/>
    <Route path="projects" element={<BackPages/>}></Route>
    <Route path='home' element={<Home/>} />
    <Route path="fullpage2" element={<Full/>} />
    <Route path="exterior-design" element={<Projects_exterior/>}  />
    <Route path="interior-design" element={<Projects_interior/>} />
    <Route path="drawing" element={<Projects_shop/>}></Route>    
    <Route path="hall_villa" element={<Projects_shop2/>}></Route>    
    <Route path="mosque" element={<Projects_mosque/>}></Route>    
    <Route path="villa" element={<Projects_villa/>}></Route>    
    <Route path="sport" element={<Projects_sport/>}></Route>    
  </Routes>
  </AnimatePresence>
)

}

export default AnimatedRoutes;