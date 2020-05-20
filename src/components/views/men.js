import React ,{useContext , useEffect , useState} from "react";
import {CardModel } from "../tinycomponents/card";
import {MaleContext }from "../../modelcontext";



//importing reactsrap 
import {Col , Row } from 'reactstrap';

const axios = require('axios');
let dataToRender= [""];
let cardsToRender=["dsad"];


function Men() {

  const [male , setMale] = useContext(MaleContext);
  let [loading , setLoading] = useState(true);
  const server= "http://ec2-54-219-56-242.us-west-1.compute.amazonaws.com:1337/";

  useEffect(() => {
    const server = "";
    axios.get("http://ec2-54-219-56-242.us-west-1.compute.amazonaws.com:1337/genders/1").then((response) => {
      setMale(response.data.models);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    dataToRender = male;
    console.log("yeh data render hoga ", dataToRender);

    cardsToRender = dataToRender.map((model) => (
      <Col md="4">
        <CardModel
         model={model}
          title={model.firstName}
          height={model.height}
          chest={model.chest}
          waist={model.waist}
          hips={model.hips}
          eye={model.eyeColor}
          hair={model.hairColor}
          image={server + model.images[0].formats.small.url}
        />
      </Col>
    ));

  }
    

  return (
    <React.Fragment>
      <div className="titleContainer">
      <h1 className="text-center">Men</h1>
      </div>
      <div className="container">

      <Row className="my-4">
      {loading ?  <img src={require('../images/loader.gif')} className="loader mx-auto"/>: <React.Fragment>{cardsToRender}</React.Fragment>  }
      {/* {cardsToRender} */}
        
      </Row>
      </div>
    </React.Fragment>
  );
}

export default Men;
