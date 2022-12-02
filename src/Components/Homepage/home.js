import React,{useState} from "react";
import './home.scss'
import pdf from '../assets/images/mhmdpdf.pdf'
function Home (){
  

  function openNav() {


    const mq = window.matchMedia( "(max-width: 819px)" );
    if (mq.matches) {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("fp-nav").style.visibility="hidden"
      document.getElementById("scroll-pages").style.marginLeft="0px"



      } else {
        document.getElementById("mySidenav").style.width = "410px";
        document.getElementById("scroll-pages").style.marginLeft="450px"


      }
      
      mq.addListener(openNav)
      document.getElementById("spa1").style.opacity="1"

    document.getElementById("sp1").style.opacity="0"
    document.getElementById("spa1").style.visibility="visible"






    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("er");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }

  };
 



  
  function closeNav() {
    document.getElementById("scroll-pages").style.marginLeft="0px"

    document.getElementById("fp-nav").style.visibility="visible"

    document.getElementById("mySidenav").style.width = "0px";
    document.body.style.backgroundColor = "white";
    document.getElementById("sp1").style.opacity="1"
    document.getElementById("spa1").style.opacity="0"

    document.getElementById("spa1").style.visibility="hidden"
    document.getElementById("fp-nav").style.visibility="visible"


  }

  function about(){
    document.getElementById("About").style.opacity="0"
    document.getElementById("services").style.opacity="1"
    document.getElementById("services").style.transitionDelay="0.1s"



  }
  function services(){

    document.getElementById("About").style.opacity="1"
    document.getElementById("services").style.opacity="0"
    document.getElementById("About").style.transitionDelay="0.1s"



    
  }

  



return(

 
<div >
   <div className="col">
<div style={{height:"49px"}}>  
<button  id="sp1" className="spa ss"  onClick={()=>{

openNav()
}}></button>
 
<button className="s" id="spa1"  onClick={()=>{

closeNav()
}}></button>
 </div>
 </div>
 
<div   id="mySidenav" class="sidenav " style={{overflowY:"auto"}}>

  <div   id="myDIV" className="we offset-md-1 custom"> 
  
  <div   className=""> 
  <a style={{cursor:"pointer"}}  onClick={()=>{
services()

  }}
  
   className="er active "  >About</a>

 <div id="About">
<h3 className="py-1 col-md-2" id="p1">Creative<br/>
Passionate<br/>
Focused</h3>


<p style={{fontSize:"18px"}} className="py-5  ">Currently I am a freelance architectural designer, working with a variety of clients.</p>
<p style={{fontSize:"16px"}} className="py-4">The main goal in my work is to reach the main goal of the client and work to develop the level of work within the common group of engineers and experts</p>
<p className=" py-5 m-4"> <a className="resume" id="resume" href={pdf} target='_blank'>view resume</a></p>

</div>
  </div>

  <div className="">  
 
  <a style={{cursor:"pointer"}} onClick={()=>{
    about()
  }} className="er" >Services</a>
<div id="services" > 
<div className="services-menu">
<div className="row ">
<div className="col-md-6 py-3">
<div className="contaier1">

<i>Interior Design</i>

   </div>


</div>
<div className="col-md-6">
<div className="contaier1 py-3 ">
<i>Exterior Design</i>
  
   </div>


</div>

<div className="col-md-6">
<div className="contaier1 py-3">
<i>Shop Drawing</i>

  
   </div>


</div>
<div className="col-md-6">
<div className="contaier1 py-3">
<i>Architectural Design</i>
  
   </div>


</div>


</div>
</div>
</div>
  </div>

  {/* <div className=""> 
  <a className="er" href="#">Contact</a>
  
  </div> */}

  </div>
  <footer  className="social">
  <ul >
  <li>
    <a href="https://www.facebook.com/muhammad.alshughouri" target="_blank">
      <i class="fab fa-facebook-f icon"></i>    </a>
  </li>
  <li>
    <a href="https://wa.me/+963994568348" target="_blank"><i class="fab fa-whatsapp icon"></i></a>
  </li>
  <li>
    <a href="https://www.instagram.com/alshughouri/" target="_blank"><i class="fab fa-instagram icon"></i></a></li>
  <li>
    <a href="mailto:email@example.com"><i class="fab fa-google-plus-g icon"></i></a></li>
</ul>
</footer>
<div>

</div>



  </div>



  
</div>



)


}



export default Home