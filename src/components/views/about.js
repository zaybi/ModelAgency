import React from "react";

function About() {
  return (
    <div>
      <div class="container my-5 z-depth-1">
        <section class="dark-grey-text">
          <div class="row pr-lg-5">
            <div class="col-md-7 mb-4">
              <div class="view">
                <img
                  src={require('../images/about.png')}
                  class="img-fluid"
                  alt="smaple image"
                />
              </div>
            </div>
            <div class="col-md-5 d-flex align-items-center">
              <div>
                <h3 class="font-weight-bold mb-4">About Toixcmodelmgmt</h3>

                <p>
                  Toxic Models Management is a scouting company, founded on
                  2012.
                </p>
                <p>
                    With  a deep understanding of the fashion market from their founders. Years of traveling and working experience in different markets gave TOXIX's founders a wide and comprehensive perspective of how the scouting fiels could improve it's functioning.

                </p>
                <p>
                    Instead of quantity, Toxic is known and respected for the superior scouting level and the consistent ability to determine the correct development strategy for each of our models.
                    We seek of fulfill the needs of fashion markets with a new concept of management, leading our models to successful careers.
                    <hr />
                    Dynamic and discriplined.
                    Welcome to TOXIC MODELS MANAGEMENT.                 
                </p>

               
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
