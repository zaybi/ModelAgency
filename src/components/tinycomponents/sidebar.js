import React, { useState, useContext , useEffect } from "react";
import Sidebar from "react-sidebar";
import { CartContext } from "../../cartcontext";
import { SidebarContext } from "../../sidebarcontext";

import { Row, Col ,Alert } from "reactstrap";
import { DetailbarContext } from "../../detailbarcontext";
import {ModelCarrierContext} from "../../modelcontext";


const axios = require('axios');

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
      touch={false}
      open={sidebar}
      styles={{
        sidebar: {
          background: "#000000d6",
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

function InsideSidebar() {

// alert stuff starts 

const [visible, setVisible] = useState(true);

const onDismiss = () => setVisible(false);
// alert stuff ends



const [submitted , setSubmitted] = useState(false);
const [wait, setWait] = useState(false);

const[firstName , setFirstName] = useState("");
const[lastName , setLastName] = useState("");
const[email , setEmail] = useState("");
const [dob , setDob] = useState("");
const [city , setCity] = useState("");
const[about , setAbout] = useState("Tell us about yourself:");
const [height , setHeight]  = useState("");
const[chest , setChest] = useState("");
const[waist, setWaist] = useState("");
const[hips , setHips] = useState("");
const[dress , setDress] = useState("");
const[shoes , setShoes] = useState("");
const[hairColor , setHairColor] = useState("");
const[eyeColor , setEyeColor] = useState("");
const[pronouns , setPronouns] = useState("");

//files
const[image1 , setImage1] = useState("");
const[image2 , setImage2] = useState("");
const[image3 , setImage3] = useState("");
const[image4 , setImage4] = useState("");



function handleChange(e){

  console.log(e.target.name , e.target.value);
  switch(e.target.name) {

    case "firstName" : setFirstName(e.target.value); 
    break;
    case "lastName" :   setLastName(e.target.value);
    break;
    case "email" :     setEmail(e.target.value);
    break;
    case "dob" : setDob(e.target.value);
    break;
    case "city" : setCity(e.target.value);
    break;
    case "about" : setAbout(e.target.value);
    break;
    case "height" : setHeight(e.target.value);
    break;
    case "chest" : setChest(e.target.value);
    break;
    case "waist" : setWaist(e.target.value);
    break;
    case "hips" : setHips(e.target.value);
    break;
    case "dress" : setDress(e.target.value);
    break;
    case "shoes" : setShoes(e.target.value);
    break;
    case "hairColor" : setHairColor(e.target.value);
    break;
    case "eyeColor" : setEyeColor(e.target.value);
    break;
    case "pronouns" : setPronouns(e.target.value);

   }
}


function handleFile(e) {
  console.log(e.target.files);

switch(e.target.name) {
  case "image1" : setImage1(e.target.files[0]);
  case "image2" :  setImage2(e.target.files[0]);
  case "image3" : setImage3(e.target.files[0]);
  case "image4" :   setImage4(e.target.files[0]);

}
  
 
  

  
}


function handleSubmit(e) {
  e.preventDefault();


   axios({
    method: 'post',
    url: 'http://toxicmodelmgmt.com:5002/requests',
    data: {
  
      "firstname": firstName,
      "lastname": lastName,
      "email": email,
       "dataOfBirth": dob,
      "about": about,
      "height":height,
      "chest": chest,
      "waist":waist,
      "hips": hips,
      "dress": dress,
      "shoes": shoes,
      "hairColor": hairColor,
      "eyeColor": eyeColor,
      "pronoun": pronouns,
      "country":city,
     
  
     }
  }).then(response => {
    console.log(response);
    setWait(true);

       // image stuff here

  
  let data = new FormData();
  data.append('files' , image1);
  data.append('files' , image2);
  data.append('files' , image3);
  data.append('files' , image4);

data.append('ref' , 'request');
data.append('field' , 'images');
data.append('refId' , response.data.id);


  axios({
    method: 'post',
    url: 'http://toxicmodelmgmt.com:5002/upload',
    data:data,

    
  

  }).then(response => {
    setWait(false);
    setSubmitted(true); });

// image ends here


  }).catch(err => console.log(err))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  // images ends
  
}






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
                  <form class="text-center" onSubmit={handleSubmit}>
                    <p class="h4 mb-4">Form</p>

                    <div class="form-row mb-4">
                      <div class="col">
                        <input
                          onChange={handleChange}
                          value={firstName}
                          name="firstName"
                          required

                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={lastName}
                         name="lastName"
                          type="text"
                          id="defaultRegisterFormLastName"
                          class="form-control"
                          placeholder="Last name"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={email}
                         name="email"
                          type="email"
                          id="defaultRegisterFormLastName"
                          class="form-control"
                          placeholder="Email"
                          required
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
                         onChange={handleChange}
                         value={dob}
                         name="dob"
                          type="date"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="dob"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={city}
                         name="city"
                          type="text"
                          id="defaultRegisterFormLastName"
                          class="form-control"
                          placeholder="Current City"
                          required
                        />
                      </div>
                    </div>
                    {/* second row ends */}

                    {/* Third row */}

                    <textarea 
                    class="form-control mb-4"
                       onChange={handleChange}
                          value={about}
                          name="about"
                          required
                          >
                      
                    </textarea>

                    {/* Third row ends */}

                    {/* fourth row */}
                    <div class="form-row mb-4">
                      <div class="col">
                        <input
                         onChange={handleChange}
                          value={height}
                         name="height"
                          type="number"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Height(cm)"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={chest}
                         name="chest"
                          type="number"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Chest(cm)"
                          required
                        />
                      </div>

                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={waist}
                         name="waist"
                          type="number"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Waist(cm)"
                          required
                        />
                      </div>
                    </div>
                    {/* fouth row ends */}

                    {/* fifth row */}
                    <div class="form-row mb-4">
                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={hips}
                         name="hips"
                          type="number"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Hips(cm)"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={dress}
                         name="dress"
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Dress"
                         
                        />
                      </div>

                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={shoes}
                         name="shoes"
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
                         onChange={handleChange}
                         value={hairColor}
                         name="hairColor"
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Hair Color"
                        />
                      </div>
                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={eyeColor}
                         name="eyeColor"
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Eye Color"
                        />
                      </div>

                      <div class="col">
                        <input
                         onChange={handleChange}
                         value={pronouns}
                         name="pronouns"
                          type="text"
                          id="defaultRegisterFormFirstName"
                          class="form-control"
                          placeholder="Pronouns"
                        />
                      </div>
                    </div>
                    {/* sixth row ends */}
                    <label> 4 images (less than 2MB each) </label>
                    <br/>
                    <input required type="file" className="btn-upload" id="pehla" onChange={handleFile} name="image1" />
                    <input    required type="file" className="btn-upload " id="doosri" onChange={handleFile}   name="image2" />
                    <input    required type="file" className="btn-upload" id="teesri" onChange={handleFile}  name="image3"  />
                    <input     required type="file" className=" btn-upload" id="chothi" onChange={handleFile}  name="image4" />
                    {wait &&
            <div className="py-3"> <Alert color="info" isOpen={visible} toggle={onDismiss}>
            Wait.. We are just processing your application.
          </Alert></div>  } 
                   
                    {submitted &&
            <div className="py-3"> <Alert color="sucess" isOpen={visible} toggle={onDismiss}>
            Your Application has been successfully submited!. You will be contacted soon
          </Alert></div>  } 
                    <button class="btn btn-grey my-4 btn-block" type="submit">
                      Submit
                    </button>

                    <hr />


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
console.log()
  return (
    <Sidebar
      sidebar={
        <div id="portfolioContainer">
          <button
            onClick={() => setDetailbar(false)}
            className="m-3 btn btn-bag btn-primary "
          >
            <span className="fas fa-chevron-left"></span> Back
          </button>

          <hr />
          <InsideDetailbar />
          <hr/>
        
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
  const server = "http://toxicmodelmgmt.com:5002";
  const [modelCarrier , setModelCarrier] = useContext(ModelCarrierContext);
  let [loading , setLoading] = useState(true);
  let pictures = "";
  const images =  modelCarrier.images;
  let imagesToRender = [""];


  if(modelCarrier.gender ==2 || modelCarrier.gender == 1) {
     images.map( image => console.log(image.formats.small));



imagesToRender = images.map( image => (
  <div class="mb-3 pics all 2 animation">
        <a data-toggle="modal" data-target="#basicExampleModal">
          <img class="img-fluid z-depth-1 rounded" src={server + image.formats.small.url} alt="Card image cap"/>
        </a>
      </div>
) , () => {
      setLoading(false);
  } );

  
  
}


 

  



 

  return (
    <React.Fragment>
     <h1 className="text-center">{modelCarrier.firstName}</h1>


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
  <p class="lead text-center text-muted pt-2 mb-5">{modelCarrier.about}</p>

    <div class="row">

      <div class="col-md-12 dark-grey-text d-flex  flex-wrap justify-content-between mb-5 text-white">
  <p className="mx-3"> Height: {modelCarrier.height}cm</p>
            <p className="mx-3">Chest: {modelCarrier.chest}cm</p>
            <p className="mx-3">Waist: {modelCarrier.waist}cm</p>
            <p className="mx-3">Hips: {modelCarrier.hips}cm</p>

            <p className="mx-3">Shoes: {modelCarrier.shoes}</p>
            <p className="mx-3">Hair Color: {modelCarrier.hairColor}</p>
            <p className="mx-3">Eye Color: {modelCarrier.eyeColor}</p>

       

      </div>

    </div>

    <div class="gallery mb-5" id="gallery">

     {imagesToRender}




     

     

    </div>
    

  </section>
     {/* pasted ends */}
     </div>
    </React.Fragment>
  );
}



export default SidebarBag;
