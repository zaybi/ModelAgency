import React  from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return(
        <div id="mainfooter" className="p-2 mt-4">


<footer class="page-footer text-center font-small info-color-dark">

  <div class="rgba-stylish-strong">

    
    <div class="pt-4">
      <a class="btn btn-outline-white"
        href="/"  role="button">Home
        <i class="fa fa-home ml-2"></i>
      </a>
      <a class="btn btn-outline-white" href="/contact"
         role="button">Contact
        <i class="fas fa-phone ml-2"></i>
      </a>
    </div>
    

    <hr class="my-4"/>

    
    <div class="pb-4" id="iconbar">
      <a href="https://www.facebook.com/toxicmodelmgmt" target="_blank">
        <i class="fab fa-facebook-f mr-3"></i>
      </a>

      <a href="" target="_blank">
        <i class="fab fa-instagram mr-3"></i>
      </a>

     
    </div>
    

 
    <div class="footer-copyright py-3 text-primary">
      © 2020 Copyright: Toxicmodelmgmt
     
    </div>
    
  </div>

</footer>





     

</div>

    )
}


export default Footer;