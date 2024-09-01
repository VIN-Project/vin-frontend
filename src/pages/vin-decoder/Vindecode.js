import React, { useState } from 'react';
import './Style.css';


const Vindecode = () => {
  const [searchMethod, setSearchMethod] = useState('VIN');
  

  const searchByVinClicked = () => {
    setSearchMethod('VIN');
  };

  const searchByPlateClicked = () => {
    setSearchMethod('Plate');
  };

  const searchByYmmClicked = () => {
    setSearchMethod('YMM');
  };

  return (
    <>
    <div className="vin-decoder-container">
      {/* Left Column */}
      <div className="vin-decoder-content">
        <h1>Free VIN Decoder: Get Vehicle Specifications</h1>
        <p>
          Decode 13 digit or 17 digit VIN instantly and for free. Access year, make, model, engine, transmission, dimensions, and more.
        </p>
      </div>

      {/* Right Column */}
      <div className="vin-decoder-form">
        <div className="search-method-buttons">
          <button
            className={`search_by-toggle ${searchMethod === 'VIN' ? 'active' : ''}`}
            onClick={searchByVinClicked}
          >
            By VIN
          </button>
          <button
            className={`search_by-toggle ${searchMethod === 'Plate' ? 'active' : ''}`}
            onClick={searchByPlateClicked}
          >
            By US License Plate
          </button>
          <button
            className={`search_by-toggle ${searchMethod === 'YMM' ? 'active' : ''}`}
            onClick={searchByYmmClicked}
          >
            Year, Make, & Model
          </button>
        </div>
         
        {/* Form */}
        <form>
          {searchMethod === 'VIN' && (
            <div className="input-container">
              <input type="text" placeholder="Enter VIN" maxLength="17" className="input-field" />
              <input type="email" placeholder="Enter Email Address" className="input-field" />
              <input type="tel" placeholder="Enter Phone (Optional)" className="input-field" />
            </div>
          )}
          {searchMethod === 'Plate' && (
            <div className="input-container">
              <input type="text" placeholder="Enter License Plate" maxLength="10" className="input-field" />
              <select className="input-field">
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                {/* Add more states as needed */}
              </select>
              <input type="email" placeholder="Enter Email Address" className="input-field" />
            </div>
          )}
          {searchMethod === 'YMM' && (
            <div className="input-container">
              <select className="input-field">
                <option value="">Select Year</option>
                {/* Add years */}
              </select>
              <select className="input-field">
                <option value="">Select Make</option>
                {/* Add car makes */}
              </select>
              <select className="input-field">
                <option value="">Select Model</option>
                {/* Add car models */}
              </select>
              <input type="email" placeholder="Enter Email Address" className="input-field" />
            </div>
          )}
          <button type="button" className="form-submit-btn">
            Get Your Vehicle History Report
          </button>
        </form>

        {/* Extra Links */}
        <div className="vin-extra-links">
          <span>No VIN? <a href="#">Use license plate</a></span>
          <span><a href="#">Where can I find the VIN?</a></span>
        </div>

        {/* App Store Links */}
        <div className="app-store-links">
          <a href="https://play.google.com/store/apps/details?id=com.vehiclehistory.dvh&utm_source=google&utm_medium=organic&utm_campaign=app_download_android&utm_id=app_download&_gl=1*15v3mmt*_gcl_au*ODU5OTkzNDExLjE3MjI4NzUyMjE.*_ga*ODQxMDA2NTU3LjE3MjI4NzUyMjE.*_ga_7Q0W2FSCKP*MTcyMzc0OTY5OS4yNy4xLjE3MjM3NTI0OTMuMzQuMC4w*_ga_NBT91WK5CH*MTcyMzc0OTY5OS4yNy4xLjE3MjM3NTI0OTMuMC4wLjA.&pli=1"><img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/01/gplay-logo-1.svg" alt="Google Play" /></a>
          <a href="https://apps.apple.com/us/app/vin-decoder-vehicle-history/id1576559330?utm_source=google&utm_medium=organic&utm_campaign=app_download_iOS&utm_id=app_download&_gl=1*10tv59t*_gcl_au*ODU5OTkzNDExLjE3MjI4NzUyMjE.*_ga*ODQxMDA2NTU3LjE3MjI4NzUyMjE.*_ga_7Q0W2FSCKP*MTcyMzc0OTY5OS4yNy4xLjE3MjM3NTI0OTMuMzQuMC4w*_ga_NBT91WK5CH*MTcyMzc0OTY5OS4yNy4xLjE3MjM3NTI0OTMuMC4wLjA."><img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/01/appstore-logo-1.svg" alt="App Store" /></a>
          <a href="#"><img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/01/windows-logo-1.svg" alt="Windows Store" /></a>
        </div>
      </div>
 </div>

 <div className="vin-decoder-info-container">
      <div className="vin-decoder-heading">
        <h2>The Free VIN Decoder for All Types of Vehicles</h2>
      </div>
      <div className="vin-decoder-description">
        <p>
          A VIN decoder can save the day if you’re in the market to buy or sell a vehicle and can’t seem to get enough
          information. With our VIN decoder, anyone can gain full access to the specifications and features of any used or
          new vehicle.
        </p>
        <p>
          What makes it better than others? Our VIN decoder offers access to all sorts of vehicles that others can’t:
        </p>
        <ul>
          <li>Modern vehicles</li>
          <li>Vintage vehicles</li>
          <li>Bikes</li>
          <li>Trucks</li>
          <li>Trailers & RVs</li>
          <li>Motorhomes</li>
          <li>Heavy trucks</li>
        </ul>
        <p>
          Our VIN decoder not only decodes standard 17-character VINs, but also classic VINs with 5 – 13 characters. We
          decode data to the exact trim, providing a plethora of unique information about that specific vehicle.
        </p>
        <p>
          Not only that, you also get access to detailed specifications, including but not limited to year, make, model,
          engine, transmission, braking suspensions, wheels, fuel type, and more.
        </p>
        <p>
          Our mobile app, available for iOS and Android devices, saves users time by scanning the VIN with our OCR
          technology. This tool can identify characters from all documents and instantly decode them for free!
        </p>
      </div>

      <div className="vin-decoder-heading">
        <h2>What is a Vehicle Identification Number (VIN)?</h2>
      </div>
      <div className="vin-decoder-description">
      <p>A Vehicle Identification Number (VIN) is a unique code assigned to every motor vehicle. They were introduced in 1950 to help companies identify their manufactured vehicles, and the National Highway Traffic Safety Administration (NHTSA) standardized them in 1981. </p>
      <p>Functionally, VINs serve several purposes. They encode information about the vehicle’s manufacturer, country of origin, model, engine type, serial number, and more. </p>
      <p>This alphanumeric code is essential for tracking recalls, registrations, thefts, and sales. Additionally, VINs aid in verifying a vehicle’s authenticity and history, providing consumers and authorities with vital details about a vehicle’s past and present.</p>
      <p> Note that the VIN usually doesn’t have the letters Q (q), I (i), and O (o) to avoid confusing it with the 0 and 1 figures.					</p>
     </div>
    </div>

    <div className="vin-info-container">
      <div className="vin-info-heading">
        <h2>What Information Does The VIN Contain?</h2>
      </div>
      <div className="vin-info-description">
        <p>
          The VIN typically contains every single detail about the vehicle, and with our VIN decoder, you can get these details for free:
        </p>
      </div>
      <div className="vin-info-grid">
        <ul>
          <li>Year</li>
          <li>Model</li>
          <li>Trim</li>
          <li>Make</li>
          <li>Valve train design</li>
          <li>Country</li>
          <li>Exterior dimensions</li>
          <li>Interior dimensions</li>
          <li>Delivery charges</li>
          <li>Number of doors</li>
          <li>Suspension</li>
          <li>Steering</li>
          <li>Ground clearance</li>
          <li>Traction battery</li>
        </ul>
        <ul>
          <li>Weight</li>
          <li>Standard seating</li>
          <li>Engine Size and specs</li>
          <li>MSRP</li>
          <li>Transmission style</li>
          <li>Drive Type</li>
          <li>Body type</li>
          <li>Fuel type</li>
          <li>Tank capacity</li>
          <li>Seating</li>
          <li>Braking</li>
          <li>Trailering</li>
          <li>EPA Class</li>
          <li>Range extender</li>
        </ul>
        <ul>
          <li>Displacement</li>
          <li>Engine model</li>
          <li>Engine Description</li>
          <li>Mileage</li>
          <li>Engine configuration</li>
          <li>Front airbag information</li>
          <li>Tire pressure and size</li>
          <li>Seat belt type</li>
          <li>Emissions</li>
          <li>Wheels</li>
          <li>Off-road attributes</li>
          <li>Cargo dimensions</li>
          <li>Electrical powertrain</li>
          <li>Electrical specifications</li>
        </ul>
      </div>
    </div>

    <div className="find-vin-container">
      <div className="find-vin-heading">
        <h2>How Do I Find the VIN for My Vehicle?</h2>
      </div>
      <div className="find-vin-image">
        <img
          src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/07/whereis-VIN-700x296.png"
          alt="Where is the VIN"
        />
      </div>
      <div className="find-vin-description">
        <p>
          You can easily find the VIN for any vehicle on the driver’s side dashboard. Look through the windshield on the driver’s side. The VIN is often visible from outside the vehicle on a metal plate at the bottom of the windshield.
        </p>
        <p>You can also find the VIN on the:</p>
        <ul>
          <li>Driver’s side door jamb</li>
          <li>Engine block</li>
          <li>Under the hood</li>
          <li>Vehicle’s trunk</li>
          <li>Vehicle registration documents</li>
          <li>Insurance documents</li>
        </ul>
        <p>
          Having trouble finding the VIN? <a href="https://detailedvehiclehistory.com/vin-number" >Check out our in-depth guide</a> on finding the VINs on all types of vehicles.
        </p>
      </div>
    </div>

    <div className="vin-comparison-container">
      <div className="vin-comparison-heading">
        <h2>Free VIN Decoder vs. Vehicle History Report by VIN</h2>
      </div>
      <div className="vin-comparison-text">
        <p>
          Looking to take it a step further? You can use our paid VIN check service for a detailed vehicle history report. A vehicle history report gives access to records of vehicles, including accident records, damages, title brand records, theft records, and more.
        </p>
      </div>
      <div className="vin-comparison-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="darkbgt">Free VIN Decoder</th>
              <th className="darkbgt">Vehicle History Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free VIN decoding for all vehicle types</td>
              <td className="freevd"><i className="fa fa-check-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Year, make, model, trim</td>
              <td className="freevd"><i className="fa fa-check-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Full vehicle specifications</td>
              <td className="freevd"><i className="fa fa-check-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Market Value based on condition</td>
              <td className="freevd"><i className="fa fa-check-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Sales listings</td>
              <td className="freevd"><i className="fa fa-check-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Auction records</td>
              <td className="freevd"><i className="fa fa-check-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Mileage during auction/sales</td>
              <td className="freevd"><i className="fa fa-check-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>History Records</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Theft records</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Owner records</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Salvage records</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Title brand records</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Odometer rollback</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Lien and loan records</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Vehicle usage</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Service history</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
            <tr>
              <td>Open recalls</td>
              <td className="freevd"><i className="fa fa-times-circle"></i></td>
              <td className="vhr"><i className="fa fa-check-circle"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    
      <div className="vin-comparison-button">
        <a href="https://detailedvehiclehistory.com/report/vin/1C4BJWEG9FL564784?_ga=2.47626148.2090306572.1668543590-64676482.1667576176"  className="vin-comparison-link">
          View a Sample Vehicle History Report
        </a>
      </div>
    </div>

    <div className="vin-decoder-info-container">
      <div className="vin-decoder-heading">
        <h1>Free VIN Decoder by Makess</h1>
      </div>
      <div className="vin-decoder-description">
        <h2>
        Popular Makes
        </h2>
        </div>
        <div className="vh-makes-container">
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/cadillac/vin-decoder" target="_blank" rel="noopener noreferrer">Cadillac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/amc/vin-decoder" target="_blank" rel="noopener noreferrer">AMC</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/audi/vin-decoder" target="_blank" rel="noopener noreferrer">Audi</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/vin-decoder/chevrolet" target="_blank" rel="noopener noreferrer">Chevrolet</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/bmw/vin-decoder" target="_blank" rel="noopener noreferrer">BMW</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/chrysler/vin-decoder" target="_blank" rel="noopener noreferrer">Chrysler</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/dodge/vin-decoder" target="_blank" rel="noopener noreferrer">Dodge</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/vin-decoder/ford" target="_blank" rel="noopener noreferrer">Ford</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/gmc/vin-decoder" target="_blank" rel="noopener noreferrer">GMC</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/honda/vin-decoder" target="_blank" rel="noopener noreferrer">Honda</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/hyundai/vin-decoder" target="_blank" rel="noopener noreferrer">Hyundai</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/jeep/vin-decoder" target="_blank" rel="noopener noreferrer">Jeep</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kia/vin-decoder" target="_blank" rel="noopener noreferrer">Kia</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lexus/vin-decoder" target="_blank" rel="noopener noreferrer">Lexus</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mercedes-benz/vin-decoder" target="_blank" rel="noopener noreferrer">Mercedes-Benz</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/porsche/vin-decoder" target="_blank" rel="noopener noreferrer">Porsche</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/ram/vin-decoder" target="_blank" rel="noopener noreferrer">Ram</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/subaru/vin-decoder" target="_blank" rel="noopener noreferrer">Subaru</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/toyota/vin-decoder" target="_blank" rel="noopener noreferrer">Toyota</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/volkswagen/vin-decoder" target="_blank" rel="noopener noreferrer">Volkswagen</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/nissan/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        </div>

        <h2>
        Other Makes
        </h2>
        </div>
        <div className="vh-makes-container">
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/vin-decoder/acura" target="_blank" rel="noopener noreferrer">Cadillac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/alfa-romeo/vin-decoder" target="_blank" rel="noopener noreferrer">AMC</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/vin-decoder/am-general" target="_blank" rel="noopener noreferrer">Audi</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/vin-decoder/chevrolet" target="_blank" rel="noopener noreferrer">Chevrolet</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/amc/vin-decoder" target="_blank" rel="noopener noreferrer">BMW</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/aston-martin/vin-decoder" target="_blank" rel="noopener noreferrer">Chrysler</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/austin-healey/vin-decoder" target="_blank" rel="noopener noreferrer">Dodge</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/avanti-motors/vin-decoder" target="_blank" rel="noopener noreferrer">Ford</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/bentley/vin-decoder" target="_blank" rel="noopener noreferrer">GMC</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/bricklin/vin-decoder" target="_blank" rel="noopener noreferrer">Honda</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/bugatti/vin-decoder" target="_blank" rel="noopener noreferrer">Hyundai</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/buick/vin-decoder" target="_blank" rel="noopener noreferrer">Jeep</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/daewoo/vin-decoder" target="_blank" rel="noopener noreferrer">Kia</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/daihatsu/vin-decoderr" target="_blank" rel="noopener noreferrer">Lexus</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/datsun/vin-decoder" target="_blank" rel="noopener noreferrer">Mercedes-Benz</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/porsche/vin-decoder" target="_blank" rel="noopener noreferrer">Porsche</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/eagle/vin-decoder" target="_blank" rel="noopener noreferrer">Ram</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/ferrari/vin-decoder" target="_blank" rel="noopener noreferrer">Subaru</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/fiat/vin-decoder" target="_blank" rel="noopener noreferrer">Toyota</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/fisker/vin-decoder" target="_blank" rel="noopener noreferrer">Volkswagen</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/freightliner/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/genesis/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/harley-davidson/vin-decode" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/hino/vin-check" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/hummer/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/infiniti/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/international/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kawasaki/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kenworth/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/koenigsegg/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lamborghini/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/land-rover/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lincoln/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lotus/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/maserati/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/maybach/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mazda/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mclaren/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mercury/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mg/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mitsubishi/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mini/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/morgan/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/oldsmobile/vin-decode" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/panoz/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/peterbilt/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/plymouth/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/polestar/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/pontiac/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/rolls-royce/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saab/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saleen/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saturn/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/scion/vin-decoderr" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/shelby/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/smart/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/suzuki/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/tesla/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/triumph/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/suzuki/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/suzuki/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/suzuki/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        </div>
    
        <div className="section-container">
      <div className="section-heading">
        <h2>How to Decode Your Vehicle's VIN - <br />VIN Decoding Guide</h2>
      </div>
      
      <div className="image-row">
        <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/07/vin-decoder-img_01-1.jpg" alt="VIN Image 1" className="vin-image" />
        <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/07/vin-decoder-img_03-1.jpg" alt="VIN Image 2" className="vin-image" />
        <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/07/vin-decoder-img_05.jpg" alt="VIN Image 3" className="vin-image" />
      </div>

      <div className="section-content">
        <p>Have you been wondering what the numbers and letters in a VIN mean? Well, let’s break it down for you. Each character in the VIN represents specific information about the vehicle. Before we go into the details, the table below lists what each character represents:</p>
      </div>

      <div className="vin-table">
        <div className="vin-row">
          <div className="vin-column">
            <h3>VIN Digit</h3>
            <ul>
              <li>1st digit</li>
              <li>2nd digit</li>
              <li>3rd digit</li>
              <li>4th - 8th digit</li>
            </ul>
          </div>
          <div className="vin-column">
            <h3>Meaning</h3>
            <ul>
              <li>Country</li>
              <li>Manufacturer</li>
              <li>Vehicle type</li>
              <li>Vehicle Features</li>
            </ul>
          </div>
          <div className="vin-column">
            <h3>VIN Digit</h3>
            <ul>
              <li>9th digit</li>
              <li>10th digit</li>
              <li>11th digit</li>
              <li>12th - 17th digits</li>
            </ul>
          </div>
          <div className="vin-column">
            <h3>Meaning</h3>
            <ul>
              <li>Check digit</li>
              <li>Model year</li>
              <li>Assembly Plant</li>
              <li>Serial Number</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-summary">
        <p>The VIN is divided into three sections: WMI, VDS, and VIS. Understanding these sections helps access important information about any car.</p>
      </div>
    </div>

    <div className="wmi-section-container">
      <div className="wmi-heading">
        <h2>The World Manufacturer Identifier (WMI)</h2>
      </div>
      
      <div className="wmi-content">
        <p>The first three characters of the VIN represent the WMI. They uniquely identify the Country of origin, vehicle manufacturer, and vehicle type.</p>
        <p>For example, cars with VINs beginning with 1, 4, and 5 are manufactured in the United States. If you find the WMI to be “1G2”, 1G represents General Motors in the United States, and 1G2 stands for Pontiac passenger cars.</p>
        <p>The table below shows some WMI Codes:</p>
      </div>
      
      <div className="wmi-table-container">
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Region</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A-H</td>
              <td>Africa</td>
              <td>AA-AH = South Africa</td>
            </tr>
            <tr>
              <td>J-R</td>
              <td>Asia</td>
              <td>J = Japan/ KL-KR = South Korea L = China MA-ME = India MF-MK = Indonesia ML-MR = Thailand MS = Myanmar PA-PE = Philippines PL-PR = Malaysia RF-RG = Taiwan</td>
            </tr>
            <tr>
              <td>S-Z</td>
              <td>Europe</td>
              <td>SA-SM = United Kingdom SN-ST, W = Germany SU-SZ = Poland TA-TH = Switzerland TJ-TP = Czech Republic TR-TV = Hungary TW = Portugal VA-VE = Austria VF-VR = France VS-VW = Spain VX-V2 = Yugoslavia XL-XM = The Netherlands XS-XW = USSR X3-X0 = Russia YA-YE = Belgium YF-YK = Finland YS-YW = Sweden ZA-ZR = Italy</td>
            </tr>
            <tr>
              <td>1-5</td>
              <td>North America</td>
              <td>1, 4, 5 = United States 2 = Canada 3 = Mexico</td>
            </tr>
            <tr>
              <td>6-7</td>
              <td>Oceania</td>
              <td>6A-6W = Australia 7A-7E = New Zealand</td>
            </tr>
            <tr>
              <td>8-0</td>
              <td>South America</td>
              <td>8A-8E = Argentina 8F-8J = Chile 8X-82 = Venezuela 9A-9E, 93-99 = Brazil 9F-9J = Colombia</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="wmi-heading">
        <h2>Vehicle Identifier Section (VIS)</h2>
      </div>
      
      <div className="wmi-content">
        <p>The Vehicle identifier section covers the rest of the VIN characters from the 10th to 17th characters. The 10th digit represents the model year and can be used to tell when a vehicle rolled off the assembly plant.</p>
        <p>The 11th digit identifies the manufacturing plant where the vehicle was assembled, and the 12th to 17th digits are the vehicle’s serial number.</p>
      </div>
      <div className="model-year-codes-container">
      <h2 className="heading">Model Year Character Codes</h2>
      <p className="subheading">Here is a simple VIN year chart to decode any car’s VIN on your hands:</p>
      
      <div className="year-code-grid">
        <div><b>A</b> 1980</div>
        <div><b>B</b> 1981</div>
        <div><b>C</b> 1982</div>
        <div><b>D</b> 1983</div>
        <div><b>E</b> 1984</div>
        <div><b>F</b> 1985</div>
        <div><b>G</b> 1986</div>
        <div><b>H</b> 1987</div>
        <div><b>J</b> 1988</div>
        <div><b>K</b> 1989</div>
        <div><b>L</b> 1990</div>
        <div><b>M</b> 1991</div>
        <div><b>N</b> 1992</div>
        <div><b>P</b> 1993</div>
        <div><b>R</b> 1994</div>
        <div><b>S</b> 1995</div>
        <div><b>T</b> 1996</div>
        <div><b>V</b> 1997</div>
        <div><b>W</b> 1998</div>
        <div><b>X</b> 1999</div>
        <div><b>Y</b> 2000</div>
        <div><b>1</b> 2001</div>
        <div><b>2</b> 2002</div>
        <div><b>3</b> 2003</div>
        <div><b>4</b> 2004</div>
        <div><b>5</b> 2005</div>
        <div><b>6</b> 2006</div>
        <div><b>7</b> 2007</div>
        <div><b>8</b> 2008</div>
        <div><b>9</b> 2009</div>
        <div><b>A</b> 2010</div>
        <div><b>B</b> 2011</div>
        <div><b>C</b> 2012</div>
        <div><b>D</b> 2013</div>
        <div><b>E</b> 2014</div>
        <div><b>F</b> 2015</div>
        <div><b>G</b> 2016</div>
        <div><b>H</b> 2017</div>
        <div><b>J</b> 2018</div>
        <div><b>K</b> 2019</div>
        <div><b>L</b> 2020</div>
        <div><b>M</b> 2021</div>
        <div><b>N</b> 2022</div>
        <div><b>P</b> 2023</div>
        <div><b>R</b> 2024</div>
        <div><b>S</b> 2025</div>
        <div><b>T</b> 2026</div>
        <div><b>V</b> 2027</div>
        <div><b>W</b> 2028</div>
        <div><b>X</b> 2029</div>
        <div><b>Y</b> 2030</div>
        <div><b>1</b> 2031</div>
        <div><b>2</b> 2032</div>
        <div><b>3</b> 2033</div>
        <div><b>4</b> 2034</div>
        <div><b>5</b> 2035</div>
        <div><b>6</b> 2036</div>
        <div><b>7</b> 2037</div>
        <div><b>8</b> 2038</div>
        <div><b>9</b> 2039</div>
      </div>
    </div>

   
      <div className="vin-tools-heading">
        <h2>Try Our Other VIN Tools</h2>
        <div className='tools-link'>
          <div><a href="https://detailedvehiclehistory.com/window-sticker" target="_blank">Window Sticker Lookup by VIN</a></div>
          <div><a href="https://detailedvehiclehistory.com/classic-vin-decoder" target="_blank">Classic VIN Decoder</a></div>
          <div><a href="https://detailedvehiclehistory.com/license-plate-lookup" target="_blank">U.S. License Plate Lookup</a></div>
        </div>
      </div>

     <div className="review-section-container">
      <div className="review-info">
        <p className="reviews-summary">150+ Reviews / Rating 4.8</p>
        <h2 className="reviews-heading">Our Happy Customers</h2>
        <h2 className="reviews-heading"> Across The Globe</h2>
        <div className="trustpilot-logo">
          <a href="https://www.trustpilot.com/review/detailedvehiclehistory.com?languages=all" target="_blank" rel="noopener noreferrer">
            <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2023/08/trustpilot.svg" alt="Trustpilot" />
          </a>
        </div>
      </div>

      <div className="customer-review">
        <div className="customer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2023/08/73x73_Sikandar-Khan.png.webp" alt="Sikandar Khan" className="customer-photo" />
          <div className="customer-details">
            <span className="customer-name"><a href="https://www.trustpilot.com/users/64bd47bc0d13ea001240dc36" target="_blank" rel="noopener"><b>Sikandar Khan</b> | Oman</a></span>
            <div className="customer-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
        <div className="customer-feedback">
          <span className="experience-date"><b>Date of experience:</b> July 22, 2023</span>
          <p className="feedback-text">Mr. Ben is extremely professional, disciplined and caring. His quick response to my report delivery...</p>
          <div className="review-button-wrapper">
            <a href="https://www.trustpilot.com/review/detailedvehiclehistory.com" target="_blank" className="review-button" rel="noopener noreferrer">
              <svg aria-hidden="true" className="star-icon"><use xlinkHref="#fas-star"></use></svg>
              Review us on Trustpilot
            </a>
          </div>
        </div>
      </div>
    </div> 
 </>
  );
};

export default Vindecode;
