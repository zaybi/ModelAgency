import React, { useContext } from "react";
import  { SliderSimpler , Slider } from "../tinycomponents/slider";
import { Cardz } from "../tinycomponents/card";
import Sidebar from "../tinycomponents/sidebar";

import { Col, Row } from "reactstrap";

const axios = require("axios");

function MainHome() {




    let set1=[
      {
        src:require('../images/simpleslider/img0.jpg'),
      },
      {
        src:require('../images/simpleslider/img7.jpeg'),
      },
      {
        src:require('../images/simpleslider/img14.jpeg'),
      },
      {
        src:require('../images/simpleslider/img1.jpg'),
      },
      {
        src:require('../images/simpleslider/img8.jpeg'),
      },
      {
        src:require('../images/simpleslider/img15.jpeg'),
      },
      {
        src:require('../images/simpleslider/img20.jpeg'),
      },
    ];

   


    let set2=[
      {
        src:require('../images/simpleslider/img2.jpeg'),
      },
      {
        src:require('../images/simpleslider/img9.jpeg'),
      },
      {
        src:require('../images/simpleslider/img16.jpeg'),
      },
      {
        src:require('../images/simpleslider/img3.jpeg'),
      },
      {
        src:require('../images/simpleslider/img10.jpeg'),
      },
      {
        src:require('../images/simpleslider/img17.jpeg'),
      },
      {
        src:require('../images/simpleslider/img13.jpeg'),
      }
    ];

    let set3=[
      {
        src:require('../images/simpleslider/img4.jpeg'),
      },
      {
        src:require('../images/simpleslider/img11.jpeg'),
      },
      {
        src:require('../images/simpleslider/img18.jpeg'),
      },
      {
        src:require('../images/simpleslider/img5.jpeg'),
      },
      {
        src:require('../images/simpleslider/img12.jpeg'),
      },
      {
        src:require('../images/simpleslider/img19.jpeg'),
      },
      {
        src:require('../images/simpleslider/img6.jpeg'),
      }
    ];


    return (
      <React.Fragment>
        <Slider />

        <div className="container-fluid">
          <h2 class="maintitle"><span className="font-weight-bold">T</span>oxic <span className="font-weight-bold">M</span>odel <span className="font-weight-bold">M</span>gmt Represents</h2>
          <h5 class="subtitle py-3">
          
          </h5>
          <Row>
            {/* products will render here */}

            <Col xs="6" md="4" className="p-2">
              <SliderSimpler interval="1800" items={set1} />
            </Col>
            <Col xs="6" md="4" className="p-2">
              <SliderSimpler interval="2000" items={set2} />
            </Col>
            <Col xs="12" md="4" className="p-2">
              <SliderSimpler interval="1300" items={set3} />
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

          {/* <Row className="my-5" label="thirdRow">
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

          </Row> */}



        </div>
      </React.Fragment>
    );
  }


export default MainHome;
