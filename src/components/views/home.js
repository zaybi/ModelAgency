import React, { Component } from "react";
import  { SliderSimpler , Slider } from "../tinycomponents/slider";
import { Cardz } from "../tinycomponents/card";
import Sidebar from "../tinycomponents/sidebar";

import { Col, Row } from "reactstrap";

class MainHome extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    


    let set1=[
      {
        src:require('../images/men.jpg'),
      },
      {
        src:require('../images/model1.jpg'),
      },
      {
        src:require('../images/men.jpg'),
      },
      {
        src:require('../images/model1.jpg'),
      },
      {
        src:require('../images/men.jpg'),
      },
      {
        src:require('../images/model1.jpg'),
      },
    ];

   


    let set2=[
      {
        src:require('../images/model1.jpg'),
      },
      {
        src:require('../images/men.jpg'),
      },
      {
        src:require('../images/model1.jpg'),
      },
      {
        src:require('../images/men.jpg'),
      },
      {
        src:require('../images/model1.jpg'),
      },
      {
        src:require('../images/men.jpg'),
      },
    ];

    let set3=[
      {
        src:require('../images/men.jpg'),
      },
      {
        src:require('../images/model1.jpg'),
      },
      {
        src:require('../images/model1.jpg'),
      },
      {
        src:require('../images/men.jpg'),
      },
      {
        src:require('../images/model1.jpg'),
      },
      {
        src:require('../images/men.jpg'),
      },
    ];


    return (
      <React.Fragment>
        <Slider />

        <div className="container-fluid">
          <h2 class="maintitle">Toxicmodelmgmt Represents</h2>
          <h5 class="subtitle">
            The arrival that will change the way you think
          </h5>
          <Row>
            {/* products will render here */}

            <Col md="4" className="p-2">
              <SliderSimpler interval="1800" items={set1} />
            </Col>
            <Col md="4" className="p-2">
              <SliderSimpler interval="1800" items={set2} />
            </Col>
            <Col md="4" className="p-2">
              <SliderSimpler interval="1800" items={set3} />
            </Col>
          </Row>

          {/* <Row className="my-5" label="secondRow">

            <Col md="5" className="offset-1  p-1 d-flex justify-content-center">
              <a href="/men">
              <span className="fa fa-male fa-10x"></span>
              <p className="text-center">Men</p>
              </a>
            </Col>

            <Col md="5" className="p-1 d-flex justify-content-center">
            <a href="/women">
            <span  className="fa fa-female fa-10x"></span>
            <p className="text-center">Women</p>
            </a>
            </Col>
          </Row> */}

          <Row className="my-5" label="thirdRow">
            <Col md="10" className="offset-1  p-1">
            <div className="titleContainermini">
                <h4>Most Recent</h4>
              </div>
             <div id="recent"></div>
            </Col>

          </Row>


          <Row className="my-5" label="fourthRow">
            <Col md="5" className="offset-1  p-1">
              <div className="titleContainermini">
                <h4>News</h4>
              </div>
             <div id="news"></div>
            </Col>
            <Col md="5" className=" p-1">
            <div className="titleContainermini">
                <h4>Events</h4>
              </div>
             <div id="events"></div>
            </Col>

          </Row>



        </div>
      </React.Fragment>
    );
  }
}

export default MainHome;
