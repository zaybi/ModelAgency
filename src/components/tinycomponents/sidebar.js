import React, { useState, useContext } from "react";
import Sidebar from "react-sidebar";
import { CartContext } from "../../cartcontext";
import { SidebarContext } from "../../sidebarcontext";

import { Row, Col } from "reactstrap";
import { DetailbarContext } from "../../detailbarcontext";

function SidebarBag() {
 
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

export function Detailbar() {
  const [detailbar, setDetailbar] = useContext(DetailbarContext);

  // function SetSidebarOpen(open) {
  //     setSidebar(open)
  // }

  return (
    <Sidebar
      sidebar={
        <div>
          <button
            onClick={() => setDetailbar(false)}
            className="m-3 btn btn-bag btn-primary "
          >
            <span className="fas fa-chevron-left"></span> Back
          </button>

          <hr />
          <InsideDetailbar />
        </div>
      }
     
      open={detailbar}
      styles={{
        sidebar: {
          background: "rgba(31, 31, 31, 0.87)",
          position: "fixed",
         
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

function InsideDetailbar() {
  return (
    <React.Fragment>
     <h1 className="text-center">Thayla</h1>


<div className="container">
     {/* pasted starts */}
     <section>
    
    
    
		<div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body p-0">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						
						<div class="row">
						
							<div class="col-md-6 py-5 pl-5">
								
								<h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

								<p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

								<ul class="list-unstyled font-small mt-5">
									<li>
										<p class="text-uppercase mb-2"><strong>Client</strong></p>
										<p class="text-muted mb-4">Envato Inc.</p>
									</li>

									<li>
										<p class="text-uppercase mb-2"><strong>Date</strong></p>
										<p class="text-muted mb-4">June 27, 2019</p>
									</li>

									<li>
										<p class="text-uppercase mb-2"><strong>Skills</strong></p>
										<p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
									</li>

									<li>
										<p class="text-uppercase mb-2"><strong>Address</strong></p>
										<a href="https://mdbootstrap.com/docs/jquery/design-blocks/">MDBootstrap</a>
									</li>
								</ul>
								
							</div>
						
							<div class="col-md-6">
								
								<div class="view rounded-right">
									<img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/5.jpg" alt="Sample image"/>
								</div>
								
							</div>
						
						</div>
					
						
					</div>
				</div>
			</div>
		</div>

    <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">portfolio</h6>
   
    <hr class="w-header my-4"/>
    <p class="lead text-center text-muted pt-2 mb-5">I am a model and this is a dummy text about myself</p>

    <div class="row">

      <div class="col-md-12 dark-grey-text d-flex justify-content-around mb-5 text-white">
            <p>Height:</p>
            <p>Chest:</p>
            <p>Waist:</p>
            <p>Hips:</p>
            <p>Dress:</p>
            <p>Shoes:</p>
            <p>Hair Color:</p>
            <p>eye Color:</p>
            <p>Pronouns:</p>
       

      </div>

    </div>

    <div class="gallery mb-5" id="gallery">

      <div class="mb-3 pics all 2 animation">
        <a data-toggle="modal" data-target="#basicExampleModal">
          <img class="img-fluid z-depth-1 rounded" src={require('../images/model2.jpg')} alt="Card image cap"/>
        </a>
      </div>

      <div class="mb-3 pics animation all 1">
        <a data-toggle="modal" data-target="#basicExampleModal">
          <img class="img-fluid z-depth-1 rounded" src={require('../images/model3.jpg')} alt="Card image cap"/>
        </a>
      </div>

      <div class="mb-3 pics animation all 1">
        <a data-toggle="modal" data-target="#basicExampleModal">
          <img class="img-fluid z-depth-1 rounded" src={require('../images/model4.jpg')} alt="Card image cap"/>
        </a>
      </div>

      <div class="mb-3 pics all 2 animation">
        <a data-toggle="modal" data-target="#basicExampleModal">
          <img class="img-fluid z-depth-1 rounded" src={require('../images/model5.jpg')} alt="Card image cap"/>
        </a>
      </div>

      <div class="mb-3 pics all 2 animation">
        <a data-toggle="modal" data-target="#basicExampleModal">
          <img class="img-fluid z-depth-1 rounded" src={require('../images/model6.jpg')} alt="Card image cap"/>
        </a>
      </div>

     

    </div>
    

  </section>
     {/* pasted ends */}
     </div>
    </React.Fragment>
  );
}

export default SidebarBag;
