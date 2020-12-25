import React, { useState } from "react";

function About() {
  const [brazil, setBrazil] = useState(true);

  function handleChange(e) {
    if (e.target.value === "english") {
      setBrazil(false);
    } else {
      setBrazil(true)
    }
  }
  return (
    <div>
      <div class="container my-5 z-depth-1">
        {/* radio starts */}
        <div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" onChange={handleChange} class="form-check-input" name="optradio" checked={brazil == false} value="english" />English
          </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" checked={brazil == true} onChange={handleChange} class="form-check-input" name="optradio" value="brazil" />
          Portuguese
          </label>
          </div>
        </div>




        {/* radio ends */}
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

                {brazil ? <div>
                  <p>
                    Toxic Models Management é uma empresa de agenciamento internacional de modelos fundada em 2013.

                    Fundada por Bruno Pecci e Havne Jacob, que possuem um profundo conhecimento do mercado da moda.
                </p>
                  <p>
                    Bruno e Havne trabalharam como modelos internacionais durante 15 anos, estamparam as maiores publicações de moda do mundo entre elas Vogue, Elle, Harper’s Bazar, GQ, Cosmopolitan.

                    Anos de viagens e experiência de trabalho em dezenas  mercados deram aos fundadores da Toxic uma perspectiva ampla e abrangente de como os campos de scouting e agenciamento internacional funcionam e como podem melhorar.

                </p>
                  <p>
                    Em vez de quantidade, Toxic Model é conhecida e respeitada pelo nível superior de agenciamento e pela capacidade consistente de determinar a estratégia de desenvolvimento correta para cada um de nossos modelos.

                    Buscamos atender às necessidades do mercado da moda com um novo conceito de gestão, levando nossos modelos a carreiras de sucesso.
                    <hr />
                    Bem-vindo a TOXIC MODEL MANAGEMENT.
                </p>
                </div> :
                  <div>
                    <p>
                      Toxic Models Management is an international modeling agency founded in 2013.
                      Founded by Bruno Pecci and Havne Jacob, who have a deep knowledge of the fashion market.
                </p>
                    <p>
                      Bruno and Havne worked as international models for 15 years, stamped the biggest fashion publications in the world including Vogue, Elle, Harper’s Bazar, GQ, Cosmopolitan.
                      Years of travel and work experience in dozens of markets have given Toxic's founders a broad and comprehensive perspective on how the fields of scouting and international agency work and how they can improve.

                </p>
                    <p>
                      Instead of quantity, Toxic Model is known and respected for its superior level of agency and for its consistent ability to determine the right development strategy for each of our models.
                      We seek to meet the needs of the fashion market with a new management concept, leading our models to successful careers.

                    <hr />
                    Welcome to TOXIC MODEL MANAGEMENT.
                </p>
                  </div>
                }


              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
