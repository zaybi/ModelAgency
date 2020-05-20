import React , {useState} from 'react';
import {Alert } from 'reactstrap';


const axios = require('axios');
const server= "http://localhost:1337";



function Contact() {


// alert stuff starts 

  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
// alert stuff ends







  const [contacted , setContacted] = useState(false);

const [firstName , setFirstName] = useState("");
const [lastName , setLastName] = useState("");
const [email , setEmail] = useState("");
const [phone , setPhone] = useState("");
const [subject , setSubject] = useState("");
const [message , setMessage] = useState("");


    function handleChange(e) {
     
      
      switch(e.target.name) {
       case "firstName" : setFirstName(e.target.value); 
       break;
       case "lastName" :   setLastName(e.target.value);
       break;
       case "email" :     setEmail(e.target.value);
       break;
       case "phone" : setPhone(e.target.value);
       break;
       case "subject" : setSubject(e.target.value);
       break;
       case "message" : setMessage(e.target.value);

      }
    
    

    };


    function handleSubmit(e) {
      e.preventDefault();
      console.log("g mai agya submit honnu")
     
axios({
  method: 'post',
  url: 'http://ec2-54-219-56-242.us-west-1.compute.amazonaws.com:1337/contacts',
  data: {
    firstName: firstName,
    lastName: lastName,
    email : email,
    phone : phone ,
    subject : subject,
    message : message
  }
}).then(response => {
  if(response.status == 200 ) {
    setContacted(true);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setSubject("");
  }
});
      
    }
  


    return(
        <div>
             <div className="container my-5 py-5 z-depth-1">
        {/*Section: Content*/}
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <h3 className="font-weight-bold">Contact Us</h3>
          
          <hr className="my-5" />
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
             
              <p className="text-muted mb-4">Feel free to contact us.We will be happy to listen to you.</p>
                <p className="mb-2"><a href="#">Contact support</a></p>
                <p className="font-weight-bold">Phone:</p>
              <p className="mb-2">+ 5532991851709</p>
            
              <p className="font-weight-bold">WeChat:</p>
              <p className="mb-2">toxicmodelmgmt</p>
              <p className="font-weight-bold">Email:</p>
              <p className="mb-2"><a href="#">models@toxicmodelmgmt.com</a></p>
              <p className="font-weight-bold">Address:</p>
              <p className="mb-2">Juiz de Fora-MG, Brazil</p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            
            <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
              {/*Grid row*/}
              <div className="row">
              
                {/*Grid column*/}
                <div className="col-md-6">
                  {/* Material outline input */}
                 
                  <div className="md-form md-outline mb-0">
                    <input type="text" id="form-first-name"  onChange={handleChange} value={firstName} name="firstName" className="form-control" />
                    <label htmlFor="form-first-name">First name</label>
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6">
                  {/* Material outline input */}
                  <div className="md-form md-outline mb-0">
                    <input type="text" id="form-last-name"  onChange={handleChange} value={lastName} name="lastName"   className="form-control" />
                    <label htmlFor="form-last-name">Last name</label>
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/* Material outline input */}
             
              {/* Material outline input */}
              <div className="md-form md-outline mt-3">
                <input type="email" id="form-email"  onChange={handleChange} value={email}  name="email" className="form-control" />
                <label htmlFor="form-email">E-mail</label>
              </div>
              {/* Material outline input */}
              <div className="md-form md-outline mt-3">
                <input type="number" id="form-number"  onChange={handleChange} value={phone} name="phone"  className="form-control" />
                <label htmlFor="form-number">Phone</label>
              </div>
           
              {/* Material outline input */}
              <div className="md-form md-outline">
                <input type="text" id="form-subject"  onChange={handleChange} value={subject} name="subject"  className="form-control" />
                <label htmlFor="form-subject">Subject</label>
              </div>
              {/*Material textarea*/}
              <div className="md-form md-outline mb-3">
                <textarea id="form-message"  onChange={handleChange} value={message} name="message"  className="md-textarea form-control" rows={3} defaultValue={""} />
                <label htmlFor="form-message">How we can help?</label>
              </div>
              <button type="button" onClick={handleSubmit} className="btn btn-info btn-sm ml-0">Submit<i className="far fa-paper-plane ml-2" /></button>
              {contacted &&
            <div className="py-3"> <Alert color="info" isOpen={visible} toggle={onDismiss}>
            Your Message has been successfully submited!. You will be contacted soon
          </Alert></div>  } 
            
            </div>

         
    
          
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </section>
        {/*Section: Content*/}
      </div>
        </div>


    )
} 


export default Contact;