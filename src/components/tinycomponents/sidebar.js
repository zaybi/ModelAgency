import React, { useState, useContext } from "react";
import Sidebar from "react-sidebar";
import { CartContext } from "../../cartcontext";
import { SidebarContext } from "../../sidebarcontext";

import { Row, Col } from "reactstrap";

function SidebarBag() {
  const [cart, setCart] = useContext(CartContext);
  const [sidebar, setSidebar] = useContext(SidebarContext);

  // function SetSidebarOpen(open) {
  //     setSidebar(open)
  // }

  return (
    <Sidebar
      sidebar={
        <div>
          <button
            onClick={() => setSidebar(false)}
            className="m-3 btn btn-bag btn-primary "
          >
            <span className="fas fa-chevron-left"></span> Back
          </button>

          <hr />
          <InsideSidebar />
        </div>
      }
      pullRight={true}
      open={sidebar}
      styles={{
        sidebar: {
          background: "#000000d6",
          position: "fixed",
          top: "200px",
          padding: "0px 0px",
          width: "100%",
          color: "white",
        },
      }}
    >
      {/* <button className="mt-5 py-5" onClick={() => SetSidebarOpen(true)}>
          Open sidebar
        </button>  */}
    </Sidebar>
  );
}

function InsideSidebar() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="titleContainer">
          <h1
            className="text-center"
            style={{ textShadow: "0px 0px 2px black" }}
          >
            Get Scouted
          </h1>
        </div>
        <Row>
          <Col md="6">
            <h3 className="mt-5">
              We are Looking for You. We are always Scouting!
            </h3>

            <p>
              <strong>
                Answer the form on the right, attach your photos and someone
                from our team will contact you if we are interested in
                representing you.
              </strong>
              Fill out the application form on the right, attach your photos,
              and someone from our team will get in touch if we're interested in
              representing you.
            </p>
            <h3>Requirements!</h3>
            <ul>
              <li>
                {" "}
                The photos must be taken with natural light, little or no
                makeup, without accessories (sunglasses or caps), some wearing
                casual clothes and others in underwear or bathing suits. No
                retouching.
              </li>
            </ul>

            <hr />
            <h3>Example of photos:</h3>
            <div className="d-flex justify-content-center pt-2">
              <img
                src={require("../images/example.jpg")}
                className="img-fluid"
                style={{ width: 400 }}
              />
            </div>
          </Col>

          {/* second col */}
          <Col md="6">
            <br />
            <img
              src={require("../images/photography.png")}
              className="img-fluid"
            />

            <div class="container-fluid my-2 py-1 z-depth-1">
              <div class="row d-flex justify-content-around">
                <div class="col-md-10">
                  <form class="text-center" action="#!">
                    <p class="h4 mb-4">Form</p>

                    <div class="form-row mb-4">
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormLastName"
                          class="form-control"
                          placeholder="Last name"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="email"
                          id="defaultRegisterFormLastName"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    {/* second row */}
                    <div class="form-row mb-4">
                      <div class="col">
                        <label style={{ fontSize: 18, margin: 0 }}>
                          Date of birth:
                        </label>
                      </div>
                      <div class="col">
                        <input
                          type="date"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormLastName"
                          class="form-control"
                          placeholder="Current City"
                        />
                      </div>
                    </div>
                    {/* second row ends */}

                    {/* Third row */}

                    <textarea class="form-control mb-4">
                      Tell us about yourself:
                    </textarea>

                    {/* Third row ends */}

                    {/* fourth row */}
                    <div class="form-row mb-4">
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Height"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Chest"
                        />
                      </div>

                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Waist"
                        />
                      </div>
                    </div>
                    {/* fouth row ends */}

                    {/* fifth row */}
                    <div class="form-row mb-4">
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Hips"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Dress"
                        />
                      </div>

                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Shoes"
                        />
                      </div>
                    </div>
                    {/* fifth row ends */}

                    {/* sixth row */}
                    <div class="form-row mb-4">
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Hair Color"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Eye Color"
                        />
                      </div>

                      <div class="col">
                        <input
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Pronouns"
                        />
                      </div>
                    </div>
                    {/* sixth row ends */}
                    <button className="btn btn-info " >Add Images(4)</button>

                    <button class="btn btn-info my-4 btn-block" type="submit">
                      Submit
                    </button>

                    <hr />

                    <p>
                      By clicking Submit you agree to our
                      <a href="" target="_blank">
                        -Terms of service
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export function Detailbar() {}

function InsideDetailbar() {}

export default SidebarBag;
