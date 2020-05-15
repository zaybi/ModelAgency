import React from "react";
import {CardModel } from "../tinycomponents/card";


//importing reactsrap 
import {Col , Row } from 'reactstrap';

function Men() {

    

  return (
    <React.Fragment>
      <div className="titleContainer">
      <h1 className="text-center">Men</h1>
      </div>
      <div className="container">

      <Row className="my-4">
        <Col md="4">
            <CardModel title="Rhouan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
        <Col md="4">
            <CardModel title="Rhouan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
        <Col md="4">
            <CardModel title="Rhouan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
      </Row>


      <Row className="my-4" >
        <Col md="4">
            <CardModel title="Rohuan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
        <Col md="4">
            <CardModel title="Rohuan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
        <Col md="4">
            <CardModel title="Rohuan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
      </Row>


      <Row>
        <Col md="4">
            <CardModel title="Rohuan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
        <Col md="4">
            <CardModel title="Rohuan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
        <Col md="4">
            <CardModel title="Rohuan" subtitle="Shoes" text ="Men's Shoes. Rohuan
                Rohuan processes " image={require('../images/men.jpg')}/>
        </Col>
      </Row>
      </div>
    </React.Fragment>
  );
}

export default Men;
