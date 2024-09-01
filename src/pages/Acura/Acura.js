import React from 'react';
import './Style.css';
import  { useState } from 'react';

import { Carousel } from 'antd';


const Acura = () => {
    
    const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the accordion item
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    return (
        <div className="acura-vin-decoder">
            <div className="vin-decoder-header">
                <img
                    src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2020/10/acura-1-120x120.png"
                    alt="Acura Logo"
                    className="acura-logo"
                />
                <h1>Acura VIN Decoder</h1>
                <p>
                    Looking for a reliable way to decode your Acura's Vehicle Identification Number (VIN)?
                    Look no further than Detailed Vehicle History's Acura VIN Decoder! This powerful tool allows you to
                    quickly and easily decode your Acura's VIN to uncover important details about its make, model, and year.
                    While the tool's basic version is free to use, those seeking more detailed vehicle history information
                    can access the paid version. So why wait? Try the Acura VIN Decoder from Detailed Vehicle History
                    today and discover the power of decoding your vehicle's VIN!
                </p>
            </div>
            
            <section className="why-vin-decoding">
                <div className="content-column">
                    <h2>Why is Acura VIN Decoding Important?</h2>
                    <p>
                        Vehicle Identification Number (VIN) decoding is a crucial process for anyone looking to buy or sell a car,
                        and Acura VIN decoding is no exception. By decoding your Acura's VIN, you can uncover valuable information
                        about its make, model, and year, which can help you negotiate a better price and avoid common scams and frauds.
                        With a paid VIN chec k, you can spot red flags that might indicate a problem with the vehicle, such as accident history,
                        salvage titles, or odometer rollbacks.
                    </p>
                </div>
                <div className="image-column">
                    <img
                        src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2023/05/acura-rear-2834133_640.jpg"
                        alt="VIN Decoding Service"
                        className="vin-info-image"
                    />
                </div>
            </section>

            <section className="vin-info">
                <div className="image-column">
                    <img
                        src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2023/04/iphonecar-bg_01.jpg"
                        alt="VIN Decoding Service"
                        className="vin-info-image"
                    />
                </div>
                <div className="content-column">
                    <h2>The Information Provided by Our Acura VIN Decoder</h2>
                    <ul>
                        <li>Make and model of the vehicle</li>
                        <li>Year of manufacture</li>
                        <li>Country of origin</li>
                        <li>Engine type and size</li>
                        <li>Trim level and package options</li>
                        <li>Transmission type</li>
                        <li>Body style and dimensions</li>
                        <li>Vehicle identification and serial numbers</li>
                    </ul>
                    <p>
                        In addition to these basic details, our Acura VIN Decoder can also provide information about any
                        factory-installed options or accessories.
                    </p>
                </div>
            </section>
            <section className="how-to-decode">
            <h2>How to Decode a VIN Number?</h2>
            <div className="decode-content">
                <div className="steps">
                    <div className="step">
                        <img
                            src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2022/06/one.svg"
                            alt="Step 1"
                        />
                        <p>Enter your VIN, email address, and phone number on the form fields provided, click on "Check VIN"</p>
                    </div>
                    <div className="step">
                        <img
                            src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2022/06/two.svg"
                            alt="Step 2"
                        />
                        <p>Proceed to payment, after which you will be redirected to your dashboard</p>
                    </div>
                    <div className="step">
                        <img
                            src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2022/06/three.svg"
                            alt="Step 3"
                        />
                        <p>On your dashboard, you will get the available report for online view and also downloadable as a PDF</p>
                    </div>
                </div>
                <div className="image-column">
                    <img
                        src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2022/12/vin-check-2.jpg"
                        alt="VIN Number Identification"
                        className="vin-check-image"
                    />
                </div>
            </div>
        </section>

        <section className="identify-acura-specs">
        <div className="carousel-content-wrapper">
      <div className="carousel-container">
        <Carousel autoplay>
          <div>
            <img
              src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2021/12/rp02.png"
              alt="Detailed Vehicle History Report 1"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2021/12/rp09.png"
              alt="Detailed Vehicle History Report 2"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2021/12/rp10.png"
              alt="Detailed Vehicle History Report 3"
              className="carousel-image"
            />
          </div>
        </Carousel>
      </div>
      <div className="content-column">
        <h2>How To Identify Acura Specs By VIN Decoding?</h2>
        <ul>
          <li>
            Locate your Acura’s 17-digit VIN, typically on the dashboard, inside
            the door frame, or on the vehicle registration documents.
          </li>
          <li>
            Enter the VIN into the Acura VIN Decoder tool on the Detailed
            Vehicle History website.
          </li>
          <li>
            The tool will quickly generate a report with all the important
            details about your Acura.
          </li>
        </ul>
        <p>
          You can use this information to identify your Acura’s specific specs
          and features, such as horsepower, torque, fuel economy, towing
          capacity, and interior and exterior options.
        </p>
      </div>
    </div>
        </section>
        <section className="sample-report">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Acura VIN Decoder Sample Report</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="image-box">
              <a href="https://detailedvehiclehistory.com/report/vin/JH4CU2F67AC036808" target="_blank" rel="noreferrer">
              <img
              decoding="async"
              src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2023/10/2010-acura-tsx-1.png"
              alt="Acura Vehicle History Report Sample"
              style={{ width: '100%', height: 'auto' }}  // Ensure correct scaling
               />
              </a>
              <div className="image-box-content">
                <h3>
                  <a href="https://detailedvehiclehistory.com/report/vin/JH4CU2F67AC036808" target="_blank" rel="noreferrer">
                    2010 ACURA TSX
                  </a>
                </h3>
                <p>
                  VIN: JH4CU2F67AC036808
                  <br />
                  Style / Body: Sedan/Saloon
                  <br />
                  Engine: 2.4L L4 DOHC 16V
                  <br />
                  Country of Assembly: JAPAN
                </p>
                <a
                  href="https://detailedvehiclehistory.com/report/vin/JH4CU2F67AC036808"
                  className="view-sample-report-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Acura Sample Report
                </a>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </section>
    <section className="useful-info">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2>Useful Information For Acura Vehicle Owners</h2>
            <p>
              As an Acura owner, there are several helpful tips and pieces of information that you should keep in mind to ensure that your vehicle
              stays in top condition and continues to perform at its best. Here are a few things to keep in mind:
            </p>
            <ul>
              <li>
                <strong>Follow the manufacturer’s recommended maintenance schedule</strong>: Acura vehicles require regular maintenance to keep
                them running smoothly and prevent unnecessary wear and tear.
              </li>
              <li>
                <strong>Use genuine Acura parts and accessories</strong>: When it comes time to replace parts or add accessories to your Acura, be
                sure to use only genuine Acura parts and accessories.
              </li>
              <li>
                <strong>Keep your Acura clean</strong>: Regularly washing and detailing your Acura can help prevent rust and other damage to the
                exterior of the vehicle.
              </li>
              <li>
                <strong>Check your tire pressure regularly</strong>: Proper tire pressure is essential for safe and efficient driving.
              </li>
              <li>
                <strong>Drive safely and defensively</strong>: Acura vehicles are designed for performance and handling, but it’s important to
                remember to drive safely and defensively.
              </li>
            </ul>
            <p>
              By keeping these tips in mind, you can help ensure that your Acura stays in top condition and continues to provide you with a smooth
              and enjoyable driving experience.
            </p>
          </div>
          <div className="col-4">
            <h2>Get Accurate VIN Check Report for the Following Acura Models</h2>
            <ul className="vin-model-list">
              <li>Acura ILX</li>
              <li>Acura TLX</li>
              <li>Acura RLX</li>
              <li>Acura NSX</li>
              <li>Acura RDX</li>
              <li>Acura MDX</li>
              <li>Acura SLX</li>
              <li>Acura Integra</li>
              <li>Acura Legend</li>
              <li>Acura Vigor</li>
              <li>Acura CL</li>
              <li>Acura RSX</li>
              <li>Acura TSX</li>
              <li>Acura ZDX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion" role="tablist">
          {/* Question 1 */}
          <div className="accordion-item">
            <h2
              className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`}
              onClick={() => toggleAccordion(1)}
              role="tab"
              aria-expanded={activeIndex === 1}
            >
              <span className="accordion-icon">
                {activeIndex === 1 ? '▲' : '▼'}
              </span>
              How do I decode my Acura VIN?
            </h2>
            <div
              className={`accordion-content ${activeIndex === 1 ? 'open' : ''}`}
              role="tabpanel"
            >
              <p>
                To decode your Acura VIN, you can use an online VIN decoding tool like the{' '}
                <a href="https://detailedvehiclehistory.com/vin-decoder/acura">Acura VIN Decoder</a> provided by Detailed Vehicle History.
                Simply enter your Acura’s 17-digit VIN into the tool, and it will quickly generate a report with all the important details about your vehicle, including its make and model, year of manufacture, engine type and size, trim level, transmission type, body style, and more.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="accordion-item">
            <h2
              className={`accordion-title ${activeIndex === 2 ? 'active' : ''}`}
              onClick={() => toggleAccordion(2)}
              role="tab"
              aria-expanded={activeIndex === 2}
            >
              <span className="accordion-icon">
                {activeIndex === 2 ? '▲' : '▼'}
              </span>
              What is a VIN on Acura?
            </h2>
            <div
              className={`accordion-content ${activeIndex === 2 ? 'open' : ''}`}
              role="tabpanel"
            >
              <p>
                A VIN, or Vehicle Identification Number, is a unique 17-digit code that is assigned to every vehicle manufactured in the United States after 1981. The VIN on an Acura is typically located on the driver’s side dashboard, inside the door frame, or on the vehicle registration documents. The VIN contains important information about the vehicle’s make and model, year of manufacture, engine type and size, and more.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="accordion-item">
            <h2
              className={`accordion-title ${activeIndex === 3 ? 'active' : ''}`}
              onClick={() => toggleAccordion(3)}
              role="tab"
              aria-expanded={activeIndex === 3}
            >
              <span className="accordion-icon">
                {activeIndex === 3 ? '▲' : '▼'}
              </span>
              Where is the VIN number on Acura?
            </h2>
            <div
              className={`accordion-content ${activeIndex === 3 ? 'open' : ''}`}
              role="tabpanel"
            >
              <p>
                The VIN on an Acura is typically located on the driver’s side dashboard, inside the door frame, or on the vehicle registration documents. It can also sometimes be found on the engine block or other parts of the vehicle.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="accordion-item">
            <h2
              className={`accordion-title ${activeIndex === 4 ? 'active' : ''}`}
              onClick={() => toggleAccordion(4)}
              role="tab"
              aria-expanded={activeIndex === 4}
            >
              <span className="accordion-icon">
                {activeIndex === 4 ? '▲' : '▼'}
              </span>
              What information is included on the Acura window sticker?
            </h2>
            <div
              className={`accordion-content ${activeIndex === 4 ? 'open' : ''}`}
              role="tabpanel"
            >
              <p>
                The Acura window sticker includes information such as the model and trim level of the vehicle, its engine size and transmission type, standard and optional features, safety and security features, fuel economy ratings, and manufacturer-suggested retail price (MSRP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="manufacturer-decoder">
      <div className="container">
        <h3>Decode VIN by manufacturer</h3>
        <div className="row">
            {/*first column */}
          <div className="col">
            <ul className="icon-list">
              <li className="icon-list-item heading">A</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/acura/vin-decoder">Acura</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/alfa-romeo/vin-decoder">Alfa Romeo</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/am-general/vin-decoder">AM General</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/amc/vin-decoder">AMC</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/aston-martin/vin-decoder">Aston Martin</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/audi/vin-decoder">Audi</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/avanti-motors/vin-decoder">Avanti Motors</a>
              </li>
              <li className="icon-list-item">B</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/bentley/vin-decoder">Bentley</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/bmw/vin-decoder">BMW</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/bricklin/vin-decoder">Bricklin</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/bugatti/vin-decoder">Bugatti</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/buick/vin-decoder">Buick</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/cadillac/vin-decoder">Cadillac</a>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="col">
            <ul className="icon-list">
              <li className="icon-list-item heading">Ferrari</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/chevrolet/vin-decoder">Chevrolet</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/chrysler/vin-decoder">Chrysler</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/cunningham-vin-decoder">Cunningham</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/daewoo/vin-decoder">Daewoo</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/daihatsu/vin-decoder">Daihatsu</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/datsun/vin-decoder">Datsun</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/dodge/vin-decoder">Dodge</a>
              </li>
              <li className="icon-list-item">E</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/eagle/vin-decoder">Eagle</a>
              </li>
              <li className="icon-list-item">F</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/ferrari/vin-decoder">Ferrari</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/fiat/vin-decoder">Fiat</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/fisker/vin-decoder">Fisker</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/ford/vin-decoder">Ford</a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col">
            <ul className="icon-list">
              <li className="icon-list-item heading">Kia</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/freightliner/vin-decoder">Freightliner</a>
              </li>
              <li className="icon-list-item">G</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/genesis/vin-decoder">Genesis</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/geo/vin-decoder">Geo</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/gmc/vin-decoder">GMC</a>
              </li>
              <li className="icon-list-item">H</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/harley-davidson/vin-decoder">Harley-Davidson</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/austin-healey/vin-decoder">Healey</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/hino/vin-decoder">Hino</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/honda/vin-decoder">Honda</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/hummer/vin-decoder">Hummer</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/hyundai/vin-decoder">Hyundai</a>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="col">
            <ul className="icon-list">
              <li className="icon-list-item heading">Peterbilt</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/infiniti/vin-decoder">Infiniti</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/international/vin-decoder">International</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/isuzu/vin-decoder">Isuzu</a>
              </li>
              <li className="icon-list-item">J</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/jaguar/vin-decoder">Jaguar</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/jeep/vin-decoder">Jeep</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/kawasaki/vin-decoder">Kawasaki</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/kenworth/vin-decoder">Kenworth</a>
              </li>
              <li className="icon-list-item">K</li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/kia/vin-decoder">Kia</a>
              </li>
              <li className="icon-list-item">
                <a href="https://detailedvehiclehistory.com/koenigsegg/vin-decoder">Koenigsegg</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
     
        </div>
    );
};

export default Acura;
