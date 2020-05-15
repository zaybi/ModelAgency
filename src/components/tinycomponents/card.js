import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

 export const Cardz = (props) => {
  return (
    <div class="cardz">
      <Card >
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
        <CardTitle></CardTitle>
        
   
        </CardBody>
      </Card>
    </div>
  );
};



 export const CardModel = (props) => {
  return (
    <div class="priders">
    <img src={props.image} /> 
    <div class="pop">
      <i class="fa fa-dot-circle mt-5"> Height:176cm</i>
     <i class="fa fa-dot-circle"> Bust: 80 cm</i>
     <i class="fa fa-dot-circle"> Waist:59 cm</i>
     <i class="fa fa-dot-circle"> Hips:87 cm</i>
     <i class="fa fa-dot-circle"> Eyes:Blue</i>
     <i class="fa fa-dot-circle"> Hair:Blonde</i>


    </div>
   <div class="text">
     <h5>{props.title}</h5>
   </div>
 </div>
  );
};

