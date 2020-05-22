import React , {useContext} from 'react';

//importing the context of sidebars
import {DetailbarContext} from '../../detailbarcontext';
import {ModelCarrierContext} from '../../modelcontext';



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
   
  const [detailbar , setDetailbar] = useContext(DetailbarContext);
  const [modelCarrier , setModelCarrier] = useContext(ModelCarrierContext);


  function SetDetailbarOpen(open , event) {
    setModelCarrier(props.model);
    setDetailbar((prev) => !prev);
    console.log(" i am called" ,event.target.id);
    console.log("and the model data is this" , props.model);
  
  }





  return (
    <div class="priders">
    <img src={props.image} className="greyscale" /> 
    <div class="pop" onClick={(event) => SetDetailbarOpen(true, event)} id={[props.model]}>
  <i  class="fa  mt-5" > Height:{props.height}cm</i>
     <i class="fa ">  Bust:{props.chest}cm</i>
  <i class="fa ">  Waist:{props.waist}cm</i>
  <i class="fa ">  Hips:{props.hips}cm</i>
  <i class="fa ">  Eyes:{props.eye}</i>
  <i class="fa ">  Hair:{props.hair}</i>
   

    </div>
   <div class="text">
     <h5>{props.title}</h5>
   </div>
 </div>
  );
};

