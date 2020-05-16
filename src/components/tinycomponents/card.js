import React , {useContext} from 'react';

//importing the context of sidebars
import {DetailbarContext} from '../../detailbarcontext';



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


  function SetDetailbarOpen(open) {
    setDetailbar((prev) => !prev);
  }


  function handleDetailBar(e) {
    console.log(" i am called")
  }



  return (
    <div class="priders">
    <img src={props.image} /> 
    <div class="pop" onClick={() => SetDetailbarOpen(true)}>
      <i  class="fa  mt-5" ><span class="fa fa-dot-circle"></span> Height:176cm</i>
     <i class="fa "><span class="fa fa-dot-circle"></span>  Bust:80 cm</i>
     <i class="fa "><span class="fa fa-dot-circle"></span>  Waist:59 cm</i>
     <i class="fa "><span class="fa fa-dot-circle"></span>  Hips:87 cm</i>
     <i class="fa "><span class="fa fa-dot-circle"></span>  Eyes:Blue</i>
     <i class="fa "><span class="fa fa-dot-circle"></span>  Hair:Blonde</i>
   

    </div>
   <div class="text">
     <h5>{props.title}</h5>
   </div>
 </div>
  );
};

