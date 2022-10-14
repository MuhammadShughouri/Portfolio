
import React, { useState, useEffect } from 'react';
import './splash.css'
import PropagateLoader from "react-spinners/PropagateLoader";
import BackPages from '../backpages/backpages';
const SplashPage = () => {
  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
  
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  // Custom css for loader
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  size:100
`;
  return isLoading ?
  
    // If page is still loading then splash screen
    <PropagateLoader className='spinner' color={'#36D7B7'} 
      css={override}  /> :
    <div className="App">
    
 <BackPages/>
    </div>
    
}
  
export default SplashPage;