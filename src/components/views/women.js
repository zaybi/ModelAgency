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
  const server = "http://toxicmodelmgmt.com:5002";

// function for sorting names into ascending order
  function compare(a , b ) {
    const name1 = a.firstName.toUpperCase();
    const name2 = b.firstName.toUpperCase();

    let comparison = 0;
    if(name1 > name2) {
      comparison = 1;
    }else if (name1 < name2) {
      comparison= -1;
    }
    return comparison;
  }
  // function ends 

  useEffect(() => {
    const server = "";
    axios.get("http://toxicmodelmgmt.com:5002/genders/2").then((response) => {
      setFemale(response.data.models.sort(compare));
      setLoading(false);

     console.log("yeh aya hai response zanana" ,response.data.models)
    });
  }, []);

  if (!loading) {
    dataToRender = female;
    // console.log("yeh data render hoga ", dataToRender);
    //console.log("yeh image url" , dataToRender[0].images[0].formats.small.url);

   cardsToRender = dataToRender.map((model) => (
      <Col xs="6"  md="4">
        <CardModel
         key={model.id.toString()}
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
   { console.log("bavay is ne rola kiya hwa hau " , model.images[0].formats , model.id)}
      </Col>
   ));

    // console.log(
    //   "Navigating to the image",
    //   dataToRender[1].images[0].formats.small.url
    // );
    // console.log("solving height wala rola", dataToRender[1].waist);
  }

  return (
    <React.Fragment>
      <div className="titleContainer">
        <h1 className="text-center">Women</h1>
      </div>
      <div className="container">
        <Row className="my-4">
  {loading ?  <img src={require('../images/loader2.gif')} className="loader mx-auto"/>: <React.Fragment>{cardsToRender}</React.Fragment>  }
         
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Women;
