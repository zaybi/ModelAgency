import React from "react";
import { CardModel } from "../tinycomponents/card";

//importing reactsrap
import { Col, Row } from "reactstrap";

const axios = require("axios");

function Women() {
  axios
    .get("http://localhost:1337/genders/2")
  .then((response) => {
    console.log(response.data.models);


    
  })
    .catch((err) => console.log(err));

  return (
    <React.Fragment>
      <div className="titleContainer">
        <h1 className="text-center">Women</h1>
      </div>
      <div className="container">


        <Row className="my-4">
          <Col md="4">
            <CardModel
              title="Thayla"
              subtitle="Shoes"
              text="Men's Shoes. Thayla
                Thayla processes "
              image={require("../images/model1.jpg")}
            />
          </Col>
          
          
        </Row>

        

       
      </div>
    </React.Fragment>
  );
}

export default Women;
