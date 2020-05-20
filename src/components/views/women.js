import React, { useContext, useState, useEffect } from "react";
import { CardModel } from "../tinycomponents/card";
import { FemaleContext } from "../../modelcontext";

//importing reactsrap
import { Col, Row } from "reactstrap";

const axios = require("axios");
let dataToRender = [""];
let cardsToRender = ["dsad"];

function Women() {
  const [female, setFemale] = useContext(FemaleContext);
  let [loading, setLoading] = useState(true);
  const server = "http://ec2-54-219-56-242.us-west-1.compute.amazonaws.com:1337/";

  // axio request starts(FEMALE)

  useEffect(() => {
    const server = "";
    axios.get("http://ec2-54-219-56-242.us-west-1.compute.amazonaws.com:1337/genders/2").then((response) => {
      setFemale(response.data.models);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    dataToRender = female;
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

    console.log("card are ready for launch", cardsToRender);
    console.log(
      "Navigating to the image",
      dataToRender[1].images[0].formats.small.url
    );
    console.log("solving height wala rola", dataToRender[1].waist);
  }

  return (
    <React.Fragment>
      <div className="titleContainer">
        <h1 className="text-center">Women</h1>
      </div>
      <div className="container">
        <Row className="my-4">
  {loading ?  <img src={require('../images/loader.gif')} className="loader mx-auto"/>: <React.Fragment>{cardsToRender}</React.Fragment>  }
         
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Women;
