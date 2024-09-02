import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css_folders/WindowSticker.css";
import Logo from "../images/samples.png"; 
import { Link } from 'react-router-dom';
import expoIMG1 from "../images/1expo.png";  
import expoIMG2 from "../images/2expo.png";
import expoIMG3 from "../images/3expo.png";
import expoIMG4 from "../images/4expo.webp";
import expoIMG5 from "../images/5expo.webp";
import expoIMG6 from "../images/6expo.webp";
import Circle1 from "../images/c_01.webp"
import Circle2 from "../images/c_03.webp"
import Circle3 from "../images/c_03 (1).webp"
import SheetIMG from "../images/sheetimages.webp"
import IMG1 from "../images/icon-vin-lookup.svg"
import IMG2 from "../images/icon-review.svg"
import IMG3 from "../images/icon-get-window-sticker.svg"



const WindowSticker = () => {
  const [isVINSelected, setVINSelected] = useState(true);
  const [currentImage, setCurrentImage] = useState(expoIMG1); // Set default image to expoIMG1

  const buttons = [
    { label: 'Cars', image: expoIMG1 },
    { label: 'SUVs and Pickups', image: expoIMG2 },
    { label: 'Electric Vehicles', image: expoIMG3 },
    { label: 'Classic Cars', image: expoIMG4 },
    { label: 'Trucks', image: expoIMG5 },
    { label: 'Motorcycles', image: expoIMG6 },
  ];

  const manufacturers = [
    { letter: 'A', brands: ['Acura', 'Alfa Romeo', 'AMC'] },
    { letter: 'B', brands: ['Bentley', 'BMW', 'Bricklin', 'Bugatti','Buick'] },
    { letter: 'C', brands: ['Cadillac', 'Chevrolet', 'Chrysler', ] },
    { letter: 'D', brands: ['Daewoo', 'Daihatsu', 'Datsun', 'Dodge',] },
    { letter: 'E', brands: ['Eagle'] },
    { letter: 'F', brands: ['Ferrari', 'Fiat', 'Fisker', 'Ford', 'Freightliner', ] },
    { letter: 'H', brands: ['Harley-Davidson', 'Hino', 'Honda', 'Hummer', 'Hyundai',] },
    { letter: 'I', brands: ['Infiniti', 'International', 'Isuzu'] },
    { letter: 'J', brands: ['Jaguar', 'Jeep',] },
    { letter: 'K', brands: ['Kawasaki', 'Kenworth', 'Kia', 'Koenigsegg',] },
    { letter: 'L', brands: ['Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus',] },
    { letter: 'M', brands: ['Maserati', 'Maybach', 'Mazda', 'McLaren', 'Mercedes-benz', 'Mercury', 'MG', 'MINI', 'Mitsubishi', 'Morgan', ] },
    { letter: 'N', brands: ['Nissan', ] },
    { letter: 'O', brands: ['Oldsmobile',] },
    { letter: 'P', brands: ['Peterbilt', 'Plymouth', 'Polestar', 'Pontiac', 'Porsche',] },
    { letter: 'Q', brands: ['Genesis', 'Geo', 'GMC'] },
    { letter: 'R', brands: ['Ram', 'Rolls-Royce',] },
    { letter: 'S', brands: ['Saab', 'Saleen', 'Saturn', 'Scion', 'Shelby', 'Smart', 'Subaru', 'Suzuki',] },
    { letter: 'T', brands: ['Tesla', 'Toyota', 'Triumph'] },
    { letter: 'V', brands: ['Volkswagen', 'Volvo',] },
    { letter: 'Y', brands: ['Yamaha',] },

    // Add other manufacturers similarly...
  ];

  const reviews = [
    { name: 'Ray Fouler | USA', date: 'September 19, 2023', review: 'Great experience with the purchase of a window sticker. Had a follow up call from Brian tonight and he did a great job checking on my satisfaction of the service.' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='ws-default-main'>
      <div className="ws-window-sticker">
        <div className="ws-left-section">
          <div className='ws-toggle-txt'>
            <h2 className='ws-txt-h1'>
              Window Sticker Lookup by VIN
            </h2>
            <p className='ws-txt-p'>
              It’s Fast & Easy, Use your VIN to search now
            </p>
          </div>
          <div className="ws-toggle-buttons">
            <button onClick={() => setVINSelected(true)} className={isVINSelected ? 'ws-active' : ''}>By VIN</button>
            <button onClick={() => setVINSelected(false)} className={!isVINSelected ? 'ws-active' : ''}>By US License Plate</button>
          </div>
          <div className="ws-form">
            {isVINSelected ? (
              <div>
                <input type="text" placeholder="Enter VIN" />
                <input type="email" placeholder="Enter Email Address" />
                <input type="text" placeholder="Enter Phone (Optional)" />
              </div>
            ) : (
              <div>
                <input type="text" placeholder="Enter License Plate" />
                <input type="text" placeholder="Enter State" />
                <input type="email" placeholder="Enter Email Address" />
              </div>
            )}
            <button className="ws-get-sticker">Get Window Sticker</button>
          </div>
        </div>

        <div className="ws-right-section">
          <h4>Trusted by over 1,000,000 people across 100+ countries.</h4>
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="ws-review">
                <h5>Date of experience: {review.date}</h5>
                <p>{review.review}</p>
                <p><strong>{review.name}</strong></p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* "What is a Window Sticker?" Section */}
      <div className='ws-what-is-window'>
        <h1 className='ws-sticker-content'>
          What is a Window Sticker?
        </h1>
        <div className='ws-window-explainer'>
          <div className='ws-left-skickers'>
            <p className='ws-texts-ex'>
              A window sticker is mandated for display on all new cars in the U.S. It provides essential information about the car, its manufacturer along with the features, options (optional equipment) & packages it comes with. The label is typically placed on the side window or windshield of a car, usually on the driver’s side. <br/><br/>
              Following the Automobile Information Disclosure Act of 1958 led by Oklahoma senator Mike Monroney, the NHTSA and EPA updated the rule in May 2011, mandating the new label for 2013 models and above to include an estimate of fuel or electricity consumption for 100 miles, thus providing a clue of the fuel consumption per distance traveled. This update is especially crucial for electric, plug-in hybrids, hydrogen fuel cell, flexible-fuel, and natural gas vehicles manufactured in the United States.
            </p>
          </div>
          <div className='ws-right-stickers'>
            <img src={Logo} alt="Logo" className="logo" />
          </div>
        </div>
        <div className='ws-btn-stiker'>
          <button>Get your Window Sticker</button>
          <a href="https://detailedvehiclehistory.com/sticker/vin/54DBDW1B3JS811938-DF26DF26-CFCF-9BBC-5FF5-711C9C1C777C" target="_blank" rel="noopener noreferrer">
            <p>View Samples</p>
          </a>
        </div>
      </div>

      {/* "Breakdown of an Original Window Sticker" Section */}
      <div className="window-sticker-container">
        <h1>Breakdown of an Original Window Sticker</h1>
        <div className="video-container">
          <iframe style={{borderRadius: '18px'}}  src="https://www.youtube.com/embed/2Rm880rAtSA?si=bUMZLS5RsV6oezmL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>
          Following is the detailed breakdown of a window sticker and what it includes:
        </p>
      </div>

      {/* Features Section */}
      <div className="ws-features-container">
        <h3 className="ws-section-title">Vin Description</h3>
        <p className="ws-section-description">It includes details like the year, make, model, and VIN number of the car.</p>

        <h3 className="ws-section-title">Interior & Exterior Color</h3>
        <p className="ws-section-description">It includes interior and exterior color. This information is essential for buyers seeking customization and ensures that they can choose a ride that matches their aesthetic preferences.</p>

        <h1 className="ws-heading">Standard Equipment, Features & Warranties</h1>
        <p className="ws-description">It includes a comprehensive overview of original equipment that came with the car from the manufacturer. Here's the rundown of the details available in the section:</p>
        <ul className="ws-features-list">
          <li className="ws-feature-item"><strong>Exterior features</strong> verify the type of paint used, such as clear coat, indicates whether the windows are tinted or not, describe the type of brake lights, whether LED or another technology, etc.</li>
          <li className="ws-feature-item"><strong>Interior features</strong> specify the material used for the seats, such as leather or fabric, verify the air conditioning system, the dashboard features, thus providing insights into the interior technology.</li>
          <li className="ws-feature-item"><strong>Mechanical features</strong> detail the type of engine installed in the vehicle, specify the type of transmission, such as automatic or manual, indicate the fuel tank capacity, confirm whether the car is front-wheel drive (FWD), rear-wheel drive (RWD), or all-wheel drive (AWD).</li>
          <li className="ws-feature-item"><strong>Safety and Security features</strong> list the number and types of airbags installed for occupant safety, specify the type of safety belts, verify the availability of safety sensors like low tire pressure sensors and parking sensors, enhancing overall safety.</li>
          <li className="ws-feature-item"><strong>Warranty Information</strong> A car window sticker lookup provides information about the coverage of warranties which may include basic, powertrain, corrosion perforation, roadside assistance, and maintenance. This provides buyers with assurance, clarity, and peace of mind regarding the purchase.</li>
        </ul>
      </div>

      {/* Pricing and Other Info Section */}
      <div className="wst-container">
        <h2 className="wst-title">MSRP (Manufacturer's Suggested Retail Price), Total price & Shipping Cost</h2>
        <p className="wst-description">The Manufacturer’s Suggested Retail Price or Recommended Retail Price (RRP) serves as a pricing guideline for dealerships, maintaining consistent prices for buyers. However, it is flexible, allowing them to set prices below or above the MSRP, based on various factors either to make profit or accelerate sales.</p>
        <ul className="wst-list">
          <li className="wst-list-item"><strong>Manufacturer suggested retail price</strong> The MSRP price is set by the manufacturer as the baseline cost of the automobile, excluding additional fees or optional features.</li>
          <li className="wst-list-item"><strong>Total Price</strong> The vehicle's total price includes the recommended retail price along with the costs of optional features and additional fees, providing the overall cost to the buyer.</li>
          <li className="wst-list-item"><strong>Shipping Charge</strong> The shipping charge represents the cost associated with transporting the vehicle from the manufacturer to the dealership.</li>
        </ul>
        <p className="wst-description">This price is also known as “sticker price”, offering transparency in costs, communicating the initial value, setting price expectations, and facilitating fair negotiations in the car buying process.</p>

        <h3 className="wst-subtitle">Options and Packages</h3>
        <p className="wst-description">These are extra features added during manufacturing, allowing buyers to know the additional offerings beyond the standard features. These may include heated steering wheel, premium sound system, aerodynamics package, etc.</p>
        <h3 className="wst-subtitle">EPA Fuel Economy and Environment Ratings</h3>
        <p className="wst-description">The fuel economy ratings section on the top right corner of the label details the efficiency, with information on miles per gallon (MPG) for city and highway driving. It also specifies the fuel type (gasoline, diesel, electric, hydrogen, plug-in hybrid), crucial for buyers seeking fuel efficiency and environmental considerations.</p>
        <h3 className="wst-subtitle">NHTSA Safety Rating</h3>
        <p className="wst-description">The sticker includes the NHTSA safety rating which is a crucial metric reflecting the automobile’s safety performance in tests. It’s rated from 1 to 5 stars, with 5 being the highest, and provides buyers with essential insights into the automobile’s overall safety.</p>
      </div>

      {/* Vehicle Selector Section */}
      <div className="vehicle-selector">
        <h1>Find Window Stickers for all types of vehicles</h1>
        <div className="button-container">
          {buttons.map((button, index) => (
            <div
              key={index}
              className="vehicle-button"
              onMouseEnter={() => setCurrentImage(button.image)} // Change the image on hover
              onMouseLeave={() => setCurrentImage(expoIMG1)} // Revert back to the default image
            >
              {button.label}
            </div>
          ))}
        </div>
        <div className="image-preview">
          <img
            src={currentImage} // Display the current image (default or hovered)
            alt="Vehicle"
          />
          <a href="https://detailedvehiclehistory.com/sticker/vin/WMWSY3C52DT594246-91E091E0-3737-88E8-5D9A-7AE1A885D505" target="_blank" rel="noopener noreferrer">
              <button className='ws-btn-one'>View Window Sticker</button>
          </a>
        </div>
      </div>


      <div className="ms-benefits-container">
      <h1 className="ms-benefits-title">Benefits of Window Sticker</h1>
      <p className="ms-benefits-description">
        Window sticker is a beneficial document for car shoppers, sellers, and even dealerships. 
        Here are some statistics to prove its substantial role in the car buying and selling process:
      </p>

      <div className="ms-benefits-circles">
        <div className="ms-circle">
        <img src={Circle1} alt="Logo" className="logo" />
          <p className='ws-circle-txt'>
            A study by J.D. Power found that <strong>43% of car buyers</strong> use window stickers 
            as a source of information when researching vehicles online.
          </p>
        </div>

        <div className="ms-circle">
        <img src={Circle2} alt="Logo" className="logo" />
          <p className='ws-circle-txt'>
            Also, one report by AutoTrader revealed that <strong>61% of car shoppers</strong> said they 
            are more likely to contact a dealer if the online listing includes a window sticker.
          </p>
        </div>

        <div className="ms-circle">
        <img src={Circle3} alt="Logo" className="logo" />
          <p className='ws-circle-txt'>
            A research by Cox Automotive showed that window stickers can improve the 
            <strong>conversion rate of online leads by 25%</strong>
          </p>
        </div>
      </div>
    </div>

    <div className="mstxt-container">
      <p className="mstxt-intro">
        Hence, it proves that it's an essential tool. Here's how window sticker is beneficial for all these parties:
      </p>

      <div className="mstxt-box">
        <div className="mstxt-title">Buyers</div>
        <div className="mstxt-content">
          <ul>
            <li>Compare different vehicles and find the best deal for their needs and budget.</li>
            <li>Verify the vehicle information and avoid scams or frauds.</li>
            <li>Learn about the vehicle features and specifications and make an informed decision.</li>
            <li>Efficiently compare fuel efficiency, safety valuations, and additional features.</li>
            <li>Confidently negotiate prices, ensuring they get the best value for their money.</li>
          </ul>
        </div>
      </div>

      <div className="mstxt-box">
        <div className="mstxt-title">Sellers</div>
        <div className="mstxt-content">
          <ul>
            <li>Efficiently communicate car's key features to buyers. Gain a competitive edge by showcasing the car's strengths and features.</li>
            <li>Showcase the vehicle features and specifications and justify the price.</li>
            <li>Increased credibility demonstrating transparency and professionalism in the selling process.</li>
          </ul>
        </div>
      </div>

      <div className="mstxt-box">
        <div className="mstxt-title">Dealership</div>
        <div className="mstxt-content">
          <ul>
            <li>Comply with the federal and state laws that require them to display the information and price of a new car.</li>
            <li>Market their brand and products to potential customers.</li>
            <li>Differentiate themselves from their competitors and increase their customer loyalty and retention.</li>
            <li>Provide accurate and updated information about their vehicles and avoid errors or disputes.</li>
          </ul>
        </div>
      </div>
    </div>


    <div className="ms-sheet-container">
      <h1 className="ms-sheet-title">Looking for a classic car build sheet?</h1>
      <p className="ms-sheet-description">
        Experience excellence, access timeless classic car details, delivered with authenticity and precision. 
        Get everything you need to make an informed decision with our classic build sheet tool.
      </p>

      <div className="ms-sheet-image-container">
        <img src={SheetIMG} alt="Classic Car Build Sheet" className="ms-sheet-image" />
      </div>

      <button className="ws-btn-one">View classic build sheet</button>
    </div>

    <div className="window-stickers ms-up">
      <h1>Window Stickers Lookup By VIN for All Manufacturers</h1>
      <div className="manufacturers-container">
        {manufacturers.map((group) => (
          <div key={group.letter} className="manufacturer-group">
            <h2>{group.letter}</h2>
            <ul>
              {group.brands.map((brand) => (
                <li key={brand}>
                  <Link to={`/window-sticker/${brand}`} className="brand-link">
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='ms-guiding-sticker'>
                  <h1 className='ms-guide-txt'>The Ultimate Guide to Window Stickers</h1>
                 <h3 className='ms-h3-txt'>Learn More with our Exclusive Guide:</h3>
     <p className='ms-p-guide-txt'>If you’re confused about what a car window sticker is or how it can help you as a buyer or seller, explore our comprehensive guide on window stickers to dig into what makes a  sticker a great tool in the car buying and selling process. Whether you are looking for some insights or seeking guidance, our detailed sticker guide is designed to provide you with everything you need. Get yours today and become an automotive expert!
     </p>
     <button className="ws-btn-one" style={{ transform: "translate(174%, -26%)"}}>Explore window sticker guide</button>
    </div>


    <div className="sticker-container proms">
      <h1 className="proms-title">Customized and Branded Car Window Sticker for Car Dealership</h1>
      <p className="proms-description">
        Window stickers are an excellent selling point for the customer and a
        brilliant appraisal tool when acquiring trade-ins. Not just that, these
        labels are necessary for law compliance. It also helps create brand
        visibility and aids in marketing.
      </p>
      <p className="proms-description">
        Our understanding of the need for window stickers by dealerships has
        inspired us to provide both customized and branded window stickers
        tailored specifically for any car dealership requirements.
      </p>

      <div className="sticker-options proms-options">
        <div className="sticker-card proms-card">
          <h3 className="proms-card-title">Branded</h3>
          <p className="proms-card-description">
            Get a window sticker branded with DetailedVehicleHistory and witness
            in your ROI and overall sales. We offer branded window stickers at
            affordable prices. Use our window sticker tool & tools.
          </p>
          <button className="proms-card-button">View branded sticker</button>
        </div>
        <div className="sticker-card proms-card">
          <h3 className="proms-card-title">Customized</h3>
          <p className="proms-card-description">
            Contact us to get an offer for personalized stickers tailored to your
            business needs. Add your logo, business details, working days/hours,
            address, and more. Use our custom car window stickers as a marketing
            tool.
          </p>
          <button className="proms-card-button">View custom sticker</button>
        </div>
      </div>

      <div className="actions proms-actions">
        <button className="proms-action-button">Contact Us</button>
        <a className="proms-action-button2">Book a Demo</a>
      </div>
    </div>



    <div className="ms-vin-container">
      <h1 className="ms-vin-title">
        Get The Window Sticker by The VIN Before Buying or Selling a Used Car
      </h1>
      <p className="ms-vin-subtitle">Follow these easy steps:</p>

      <div className="ms-vin-steps">
        <div className="ms-vin-step">
          <img
            src={IMG1}
            alt="Car Icon"
            className="ms-vin-icon"
          />
          <p>
            Use our VIN lookup tool to fill in the form fields by entering your VIN
            number, email address, and phone number. Click “Get Window Sticker.”
          </p>
        </div>

        <div className="ms-vin-step">
          <img
            src={IMG2 }
            alt="Checkout Icon"
            className="ms-vin-icon"
          />
          <p>
            Review and move to payment by selecting “Proceed to Checkout.” After a
            successful payment, you’ll be redirected to your dashboard.
          </p>
        </div>

        <div className="ms-vin-step">
          <img
            src={IMG3}
            alt="Download Icon"
            className="ms-vin-icon"
          />
          <p>
            Access the generated sticker on your dashboard, available for online
            viewing and downloadable as a PDF.
          </p>
        </div>
      </div>

      <button className="ms-vin-btn">Get Window Sticker</button>
    </div>


    </div>
  );
};

export default WindowSticker;
  