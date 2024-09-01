import React from 'react';
import './SampStyle.css';

const SampleReports = () => {
  return (
    <div>
      <div className="vehicle-report">
        
      <div className="vehicle-history-container">
      <div className="heading-wrapper">
        <h1 className="heading-primary">Sample Vehicle History Report and Window Stickers</h1>
        <p className="heading-secondary">Browse our history reports and window stickers for various makes and models.</p>
        <h2 className="heading-tertiary">What Do You Want to See?</h2>
      </div>
      <div className="button-container">
        <a href="#reports" className="custom-button">
          Vehicle History Report
        </a>
        <a href="#stickers" className="custom-button">
          Window Sticker
        </a>
      </div>
    </div>

    <div className="vehicle-history-reports">
      {/* Car History Report Section */}
      <div className="report-column">
        <h3 className="section-title">Car History Report</h3>
        <p className="section-description">
          Comprehensive history and details of your sedans, convertibles, SUVs, sports cars, crossovers, and more.
        </p>
        <div className="report-container">
          {/* Chevrolet Report */}
          <div className="report-item">
            <figure className="report-image">
              <a href="https://detailedvehiclehistory.com/report/vin/1G1JA5SH4E4153457" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/1-chrevro-report_02.jpg"
                  alt="2014 Chevrolet Sonic"
                />
              </a>
            </figure>
            <div className="report-details">
              <h3 className="report-title">
                <a href="https://detailedvehiclehistory.com/report/vin/1G1JA5SH4E4153457" target="_blank" rel="noopener noreferrer">
                  2014 Chevrolet Sonic
                </a>
              </h3>
              <ul className="report-info">
                <li><b>VIN:</b> 1G1JA5SH4E4153457</li>
                <li><b>Style / Body:</b> Sedan 4-DR</li>
                <li><b>Engine:</b> 1.8L L4 DOHC 24V</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
          {/* Ford Report */}
          <div className="report-item">
            <figure className="report-image">
              <a href="https://detailedvehiclehistory.com/report/vin/3FA6P0RU9HR306143" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/2-ford-report_02.jpg"
                  alt="2017 Ford Fusion"
                />
              </a>
            </figure>
            <div className="report-details">
              <h3 className="report-title">
                <a href="https://detailedvehiclehistory.com/report/vin/3FA6P0RU9HR306143" target="_blank" rel="noopener noreferrer">
                  2017 Ford Fusion
                </a>
              </h3>
              <ul className="report-info">
                <li><b>VIN:</b> 3FA6P0RU9HR306143</li>
                <li><b>Style / Body:</b> 4 Door Sedan</li>
                <li><b>Engine:</b> L4, 2.0L, DOHC 16V</li>
                <li><b>Country:</b> Mexico</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Classic Car History Report Section */}
      <div className="report-column">
        <h2 className="section-title">Classic Car History Report</h2>
        <p className="section-description">
          Our tool accurately decodes the VINs of classic vehicles and provides detailed information about their pasts.
        </p>
        <div className="report-container">
          {/* Pontiac Report */}
          <div className="report-item">
            <figure className="report-image">
              <a href="https://detailedvehiclehistory.com/report/vin/252677X172255" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/3-pontiac-report_02.jpg"
                  alt="1967 Pontiac Catalina Series 25200"
                />
              </a>
            </figure>
            <div className="report-details">
              <h3 className="report-title">
                <a href="https://detailedvehiclehistory.com/report/vin/252677X172255" target="_blank" rel="noopener noreferrer">
                  1967 Pontiac Catalina Series 25200
                </a>
              </h3>
              <ul className="report-info">
                <li><b>VIN:</b> 252677X172255</li>
                <li><b>Style / Body:</b> Fisher</li>
                <li><b>Engine:</b> Own, V8</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
          {/* Oldsmobile Report */}
          <div className="report-item">
            <figure className="report-image">
              <a href="https://detailedvehiclehistory.com/report/vin/3G69H2R106352" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/4-oldsmobile-report_02.jpg"
                  alt="1972 Oldsmobile Cutlass V8"
                />
              </a>
            </figure>
            <div className="report-details">
              <h3 className="report-title">
                <a href="https://detailedvehiclehistory.com/report/vin/3G69H2R106352" target="_blank" rel="noopener noreferrer">
                  1972 Oldsmobile Cutlass V8
                </a>
              </h3>
              <ul className="report-info">
                <li><b>VIN:</b> 3G69H2R106352</li>
                <li><b>Style / Body:</b> 4 Doors</li>
                <li><b>Engine:</b> Rocket V8</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div>

 {/* ATV History Report Section */}
 <div className="report-column">
        <h3 className="section-title">ATV History Report</h3>
        <p className="section-description">
          Buying a used ATV? Our VIN check tool can point you in the right direction. Find out historical records and specifications.
        </p>
        <div className="report-container">
          {/* Polaris Sportsman Report */}
          <div className="report-item">
            <figure className="report-image">
              <a href="https://detailedvehiclehistory.com/report/vin/4XASEA57XFA220276" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/9-polaris-report_01.jpg"
                  alt="Polaris Sportsman"
                />
              </a>
            </figure>
            <div className="report-details">
              <h3 className="report-title">
                <a href="https://detailedvehiclehistory.com/report/vin/4XASEA57XFA220276" target="_blank" rel="noopener noreferrer">
                  Polaris Sportsman
                </a>
              </h3>
              <ul className="report-info">
                <li><b>VIN:</b> 4XASEA57XFA220276</li>
                <li><b>Style / Body:</b> Off-road Vehicle - All Terrain Vehicle (ATV) (Motorcycle-style)</li>
                <li><b>Engine:</b> 0.6 L</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
          {/* Honda Trx350te Report */}
          <div className="report-item">
            <figure className="report-image">
              <a href="https://detailedvehiclehistory.com/report/vin/478TE24402A212829" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/10-report-_01.jpg"
                  alt="Honda Trx350te"
                />
              </a>
            </figure>
            <div className="report-details">
              <h3 className="report-title">
                <a href="https://detailedvehiclehistory.com/report/vin/478TE24402A212829" target="_blank" rel="noopener noreferrer">
                  Honda Trx350te
                </a>
              </h3>
              <ul className="report-info">
                <li><b>VIN:</b> 478TE24402A212829</li>
                <li><b>Style / Body:</b> Sedan 4D</li>
                <li><b>Engine:</b> 1.8L I4 EFI</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RV and Motorhomes History Report Section */}
      <div className="report-column">
        <h3 className="section-title">RV and Motorhomes History Report</h3>
        <p className="section-description">
          Explore detailed records on RVs and motorhomes, including previous ownership and travel records.
        </p>
        <div className="report-container">
          {/* Ford Econoline Report */}
          <div className="report-item">
            <figure className="report-image">
              <a href="https://detailedvehiclehistory.com/report/vin/1FCKE33L8HHB04878" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/11-ford-report_01.jpg"
                  alt="1987 Ford Econoline"
                />
              </a>
            </figure>
            <div className="report-details">
              <h3 className="report-title">
                <a href="https://detailedvehiclehistory.com/report/vin/1FCKE33L8HHB04878" target="_blank" rel="noopener noreferrer">
                  1987 Ford Econoline
                </a>
              </h3>
              <ul className="report-info">
                <li><b>VIN:</b> 1FCKE33L8HHB04878</li>
                <li><b>Style / Body:</b> Incomplete - Motor Home Chassis</li>
                <li><b>Engine:</b> V-8 7.5L</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
          {/* Tiffin Motorhomes Report */}
          <div className="report-item">
            <figure className="report-image">
              <a href="https://detailedvehiclehistory.com/report/vin/5VBABX5A2MA121581" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/12-report-tiffin_01.jpg"
                  alt="2021 Tiffin Motorhomes"
                />
              </a>
            </figure>
            <div className="report-details">
              <h3 className="report-title">
                <a href="https://detailedvehiclehistory.com/report/vin/5VBABX5A2MA121581" target="_blank" rel="noopener noreferrer">
                  2021 Tiffin Motorhomes
                </a>
              </h3>
              <ul className="report-info">
                <li><b>VIN:</b> 5VBABX5A2MA121581</li>
                <li><b>Style / Body:</b> Incomplete - Motor Home Chassis</li>
                <li><b>Engine:</b> 6.7 L</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="trailers-history-report">
      <h3 className="section-title">Trailers History Report</h3>
      <p className="section-description">
        Get comprehensive history reports on trailers, including past ownership, theft records, accident records, and more. Here are some samples:
      </p>
      <div className="report-container">
        {/* 2006 Newmar Corp. Report */}
        <div className="report-item">
          <figure className="report-image">
            <a href="https://detailedvehiclehistory.com/report/vin/1NFRL372560200157" target="_blank" rel="noopener noreferrer">
              <img
                src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/13-report_newmar.jpg"
                alt="2006 Newmar Corp."
              />
            </a>
          </figure>
          <div className="report-details">
            <h3 className="report-title">
              <a href="https://detailedvehiclehistory.com/report/vin/1NFRL372560200157" target="_blank" rel="noopener noreferrer">
                2006 Newmar Corp.
              </a>
            </h3>
            <ul className="report-info">
              <li><b>VIN:</b> 1NFRL372560200157</li>
              <li><b>Style / Body:</b> Trailer</li>
              <li><b>Engine:</b> n/a</li>
              <li><b>Country:</b> United States</li>
            </ul>
          </div>
        </div>
        {/* 2008 Keystone Report */}
        <div className="report-item">
          <figure className="report-image">
            <a href="https://detailedvehiclehistory.com/report/vin/4YDF26R278V505914" target="_blank" rel="noopener noreferrer">
              <img
                src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/14-report-keystone_01.jpg"
                alt="2008 Keystone"
              />
            </a>
          </figure>
          <div className="report-details">
            <h3 className="report-title">
              <a href="https://detailedvehiclehistory.com/report/vin/4YDF26R278V505914" target="_blank" rel="noopener noreferrer">
                2008 Keystone
              </a>
            </h3>
            <ul className="report-info">
              <li><b>VIN:</b> 4YDF26R278V505914</li>
              <li><b>Style / Body:</b> Trailer</li>
              <li><b>Engine:</b> n/a</li>
              <li><b>Country:</b> United States</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="vh-container">
      <div className="vh-heading-container">
        <h2 className="vh-heading-title">Get Vehicle History Report by Make</h2>
      </div>
      <div className="vh-text-container">
        <p className="vh-description">Get instant and precise vehicle history reports for all vehicle types, makes, and models.</p>
      </div>
      <div className="vh-makes-container">
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/acura/vin-decoder" target="_blank" rel="noopener noreferrer">Acura</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/alfa-romeo/vin-decoder" target="_blank" rel="noopener noreferrer">Alfa Romeo</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/amc/vin-decoder" target="_blank" rel="noopener noreferrer">AMC</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/audi/vin-decoder" target="_blank" rel="noopener noreferrer">Audi</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/austin-healey/vin-decoder" target="_blank" rel="noopener noreferrer">Austin Healey</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/bmw/vin-decoder" target="_blank" rel="noopener noreferrer">BMW</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/buick/vin-decoder" target="_blank" rel="noopener noreferrer">Buick</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/cadillac/vin-decoder" target="_blank" rel="noopener noreferrer">Cadillac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/am-general/vin-decoder" target="_blank" rel="noopener noreferrer">AM-General</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/aston-martin/vin-decoder" target="_blank" rel="noopener noreferrer">Aston-Martin</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/austin-healey/vin-decoder" target="_blank" rel="noopener noreferrer">Austin-Healey</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/avanti-motors/vin-decoder" target="_blank" rel="noopener noreferrer">Avanti-Motors</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/bentley/vin-decoder" target="_blank" rel="noopener noreferrer">Bentley</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/bugatti/vin-decoder" target="_blank" rel="noopener noreferrer">Bugatti</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/buick/vin-decoder" target="_blank" rel="noopener noreferrer">Buick</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/chevrolet/vin-decoder" target="_blank" rel="noopener noreferrer">Chevrolet</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/chrysler/vin-decoder" target="_blank" rel="noopener noreferrer">Chrysler</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/daewoo/vin-decoder" target="_blank" rel="noopener noreferrer">daewoo</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/daihatsu/vin-decoder" target="_blank" rel="noopener noreferrer">Daihatsu</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/dodge/vin-decoder" target="_blank" rel="noopener noreferrer">Dodge</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/eagle/vin-decoder" target="_blank" rel="noopener noreferrer">Eagle</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/ferrari/vin-decoder" target="_blank" rel="noopener noreferrer">ferrari</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/fiat/vin-decoder" target="_blank" rel="noopener noreferrer">fiat</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/fisker/vin-decoder" target="_blank" rel="noopener noreferrer">fisker</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/freightliner/vin-decoder" target="_blank" rel="noopener noreferrer">Freightliner</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/genesis/vin-decoder" target="_blank" rel="noopener noreferrer">Genesis</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/geo/vin-decoder" target="_blank" rel="noopener noreferrer">Geo</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/gmc/vin-decode" target="_blank" rel="noopener noreferrer">Gmc</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/harley-davidson/vin-decoder" target="_blank" rel="noopener noreferrer">Harley-Davidson</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/hino/vin-check" target="_blank" rel="noopener noreferrer">Hino</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/honda/vin-decoder" target="_blank" rel="noopener noreferrer">Honda</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/hyundai/vin-decoder" target="_blank" rel="noopener noreferrer">Hyundai</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/hummer/vin-decoder" target="_blank" rel="noopener noreferrer">Hummer</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/infiniti/vin-decoder" target="_blank" rel="noopener noreferrer">Infiniti</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/international/vin-decoder" target="_blank" rel="noopener noreferrer">International</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/isuzu/vin-decoder" target="_blank" rel="noopener noreferrer">Isuzu</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/jaguar/vin-decoder" target="_blank" rel="noopener noreferrer">Jaguar</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/jeep/vin-decoder" target="_blank" rel="noopener noreferrer">Jeep</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kawasaki/vin-decoder" target="_blank" rel="noopener noreferrer">Kawasaki</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kenworth/vin-decoder" target="_blank" rel="noopener noreferrer">Kenworth</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kia/vin-decoder" target="_blank" rel="noopener noreferrer">Kia</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lamborghini/vin-decoder" target="_blank" rel="noopener noreferrer">Lamborghini</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/koenigsegg/vin-decoder" target="_blank" rel="noopener noreferrer">Koenigsegg</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/land-rover/vin-decode" target="_blank" rel="noopener noreferrer">Land-Rover</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lexus/vin-decoder" target="_blank" rel="noopener noreferrer">Lexus</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lincoln/vin-decoder" target="_blank" rel="noopener noreferrer">Lincoln</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lotus/vin-decoder" target="_blank" rel="noopener noreferrer">Lotus</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/maserati/vin-decoder" target="_blank" rel="noopener noreferrer">Maserati</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/maybach/vin-decoder" target="_blank" rel="noopener noreferrer">Maybach</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mazda/vin-decoder" target="_blank" rel="noopener noreferrer">Mazda</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mclaren/vin-decoder" target="_blank" rel="noopener noreferrer">Mclaren</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mercury/vin-decoder" target="_blank" rel="noopener noreferrer">Mercury</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mercedes-benz/vin-decoder" target="_blank" rel="noopener noreferrer">Mercedes-Benz</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mg/vin-decoder" target="_blank" rel="noopener noreferrer">MG</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mini/vin-decoder" target="_blank" rel="noopener noreferrer">Mini</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mitsubishi/vin-decoder" target="_blank" rel="noopener noreferrer">Mitsubishi</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/morgan/vin-decoder" target="_blank" rel="noopener noreferrer">Morgan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/nissan/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/oldsmobile/vin-decoder" target="_blank" rel="noopener noreferrer">Oldsmobile</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/panoz/vin-decoder" target="_blank" rel="noopener noreferrer">Panoz</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/peterbilt/vin-decoder" target="_blank" rel="noopener noreferrer">Peterbilt</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/pontiac/vin-decoder" target="_blank" rel="noopener noreferrer">Pontiac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/porsche/vin-decoder" target="_blank" rel="noopener noreferrer">Porsche</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saab/vin-decoder" target="_blank" rel="noopener noreferrer">Saab</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/rolls-royce/vin-decoder" target="_blank" rel="noopener noreferrer">Rolls-Royce</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saab/vin-decoder" target="_blank" rel="noopener noreferrer">Cadillac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saleen/vin-decoder" target="_blank" rel="noopener noreferrer">Saleen</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saturn/vin-decoder" target="_blank" rel="noopener noreferrer">Saturn</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/scion/vin-decoder" target="_blank" rel="noopener noreferrer">Scion</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/shelby/vin-decoder" target="_blank" rel="noopener noreferrer">Shelby</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/smart/vin-decoder" target="_blank" rel="noopener noreferrer">Smart</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/subaru/vin-decoder" target="_blank" rel="noopener noreferrer">subaru</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/suzuki/vin-decoder" target="_blank" rel="noopener noreferrer">suzuki</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/tesla/vin-decoder" target="_blank" rel="noopener noreferrer">tesla</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/toyota/vin-decoder" target="_blank" rel="noopener noreferrer">toyota</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/triumph/vin-decoder" target="_blank" rel="noopener noreferrer">triumph</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/volkswagen/vin-decoder" target="_blank" rel="noopener noreferrer">volkswagen</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/volkswagen/vin-decoder" target="_blank" rel="noopener noreferrer">Cadillac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/yamaha/vin-decoder" target="_blank" rel="noopener noreferrer">yamaha</a></div>
      </div>
    </div>
    
    <div className="vh-container">
      <h2 className="heading">Lookup Vehicle History</h2>
      <ul className="link-list">
        <li className="link-item">
          <a href="https://detailedvehiclehistory.com/vin-decoder" target="_blank" rel="noopener noreferrer">
            History Report by VIN
          </a>
        </li>
        <li className="link-item">
          <a href="https://detailedvehiclehistory.com/license-plate-lookup" target="_blank" rel="noopener noreferrer">
            History Report by License Plate
          </a>
        </li>
      </ul>
    </div>

    <div className="divider">
      <hr className="divider-separator" />
    </div>

    <div className="stickers-section">
  <div className="sample-stickers-section">
    <h2 id="stickers">Car Window Stickers</h2>
    <div className="sticker-container">
      <div className="sticker-item">
        <a href="https://detailedvehiclehistory.com/sticker/vin/2GNAXJEV9J6149131-97539753-6A6A-8E10-4C66-CA3D1492E123" target="_blank" rel="noopener noreferrer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/1-chevrolet-sticker_01.jpg" alt="2018 Chevrolet Equinox" />
        </a>
        <h3>
          <a href="https://detailedvehiclehistory.com/sticker/vin/2GNAXJEV9J6149131-97539753-6A6A-8E10-4C66-CA3D1492E123" target="_blank" rel="noopener noreferrer">
            2018 Chevrolet Equinox
          </a>
        </h3>
        <ul>
          <li><b>VIN:</b> 2GNAXJEV9J6149131</li>
          <li><b>Interior:</b> Jet Black w/Premium Cloth Seat Trim</li>
          <li><b>Exterior:</b> Nightfall Gray Metallic</li>
        </ul>
      </div>

      <div className="sticker-item">
        <a href="https://detailedvehiclehistory.com/sticker/vin/2T3ZFREV7DW018723-986E986E-1A1A-C2BD-EE45-8CA437B89CD1" target="_blank" rel="noopener noreferrer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/2-toyota-sticker_01.jpg" alt="2013 Toyota RAV4" />
        </a>
        <h3>
          <a href="https://detailedvehiclehistory.com/sticker/vin/2T3ZFREV7DW018723-986E986E-1A1A-C2BD-EE45-8CA437B89CD1" target="_blank" rel="noopener noreferrer">
            2013 Toyota RAV4
          </a>
        </h3>
        <ul>
          <li><b>VIN:</b> 2T3ZFREV7DW018723</li>
          <li><b>Interior:</b> Ash w/Fabric Seat Trim</li>
          <li><b>Exterior:</b> Classic Silver Metallic</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="classic-car-section">
    <h2>Classic Car Window Stickers</h2>
    <div className="sticker-container">
      <div className="sticker-item">
        <a href="https://detailedvehiclehistory.com/sticker/vin/6R08C204294-D45BD45B-7D7D-32DD-64BE-FA5548C7E29C" target="_blank" rel="noopener noreferrer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/3-ford-classic-sticker_01.jpg" alt="1966 Ford Mustang Series" />
        </a>
        <h3>
          <a href="https://detailedvehiclehistory.com/sticker/vin/6R08C204294-D45BD45B-7D7D-32DD-64BE-FA5548C7E29C" target="_blank" rel="noopener noreferrer">
            1966 Ford Mustang Series
          </a>
        </h3>
        <ul>
          <li><b>VIN:</b> 6R08C204294</li>
          <li><b>Body type:</b> Sedan</li>
          <li><b>Country:</b> United States</li>
        </ul>
      </div>

      <div className="sticker-item">
        <a href="https://detailedvehiclehistory.com/sticker/vin/6432193670-1BC71BC7-9999-9940-C193-3EB3643EEADD" target="_blank" rel="noopener noreferrer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/4-dodge-sticker_01.jpg" alt="1963 Dodge Polara 8-500" />
        </a>
        <h3>
          <a href="https://detailedvehiclehistory.com/sticker/vin/6432193670-1BC71BC7-9999-9940-C193-3EB3643EEADD" target="_blank" rel="noopener noreferrer">
            1963 Dodge Polara 8-500
          </a>
        </h3>
        <ul>
          <li><b>VIN:</b> 6432193670</li>
          <li><b>Body type:</b> Sedan</li>
          <li><b>Country:</b> United States</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="stickers-section">
  <div className="sample-stickers-section">
    <h2>Motorcycle Window Stickers</h2>
    <div className="sticker-container">
      <div className="sticker-item">
        <a href="https://detailedvehiclehistory.com/sticker/vin/1HD1BAK16PB071548-49EF49EF-5959-1D6D-8275-4E3BB00213AF" target="_blank" rel="noopener noreferrer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/5-harley-sticker_01.jpg" alt="2023 Harley Davidson" />
        </a>
        <h3>2023 Harley Davidson</h3>
        <ul>
          <li><b>VIN:</b> 1HD1BAK16PB071548</li>
          <li><b>Body type:</b> Motorcycle</li>
          <li><b>Country:</b> United States</li>
        </ul>
      </div>

      <div className="sticker-item">
        <a href="https://detailedvehiclehistory.com/sticker/vin/JKAEXKG10LDA71320-1FE11FE1-B5B5-CAF0-F9A9-E7520F10C8FC" target="_blank" rel="noopener noreferrer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/6-kawasaki-sticker_01.jpg" alt="2020 Kawasaki Ninja 400" />
        </a>
        <h3>2020 Kawasaki Ninja 400</h3>
        <ul>
          <li><b>VIN:</b> JKAEXKG10LDA71320</li>
          <li><b>Body type:</b> Motorcycle</li>
          <li><b>Country:</b> Thailand</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="classic-car-section">
    <h2>Heavy Duty Trucks Window Stickers</h2>
    <div className="sticker-container">
      <div className="sticker-item">
        <a href="https://detailedvehiclehistory.com/sticker/vin/1FVACXCT45HU48054-92E792E7-1414-2C89-6476-7B0660F3F681" target="_blank" rel="noopener noreferrer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/7-freightliner-sticker_01.jpg" alt="2005 Freightliner M2" />
        </a>
        <h3>2005 Freightliner M2</h3>
        <ul>
          <li><b>VIN:</b> 1FVACXCT45HU48054</li>
          <li><b>Body type:</b> Truck</li>
          <li><b>Country:</b> United States</li>
        </ul>
      </div>

      <div className="sticker-item">
        <a href="https://detailedvehiclehistory.com/sticker/vin/1XKZPP0X5HJ132917-EA3EEA3E-1C1C-B8BC-579D-04084383EE1B" target="_blank" rel="noopener noreferrer">
          <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/8-kenworth_01.jpg" alt="2017 Kenworth T880" />
        </a>
        <h3>2017 Kenworth T880</h3>
        <ul>
          <li><b>VIN:</b> 1XKZPP0X5HJ132917</li>
          <li><b>Body type:</b> Truck Tractor</li>
          <li><b>Country:</b> United States</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="stickers-section">
        <div className="sample-stickers-section">
          <h2 id="stickers">ATV History Reports</h2>
          <div className="sticker-container">
            <div className="sticker-item">
              <a href="https://detailedvehiclehistory.com/report/vin/4XASEA57XFA220276" target="_blank" rel="noopener noreferrer">
                <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/9-polaris-report_01-700x447.jpg" alt="Polaris report" />
              </a>
              <h3>
                <a href="https://detailedvehiclehistory.com/report/vin/4XASEA57XFA220276" target="_blank" rel="noopener noreferrer">
                  Polaris Sportsman
                </a>
              </h3>
              <ul>
                <li><b>VIN:</b> 4XASEA57XFA220276</li>
                <li><b>Style / Body:</b> Off-road Vehicle – All Terrain Vehicle (ATV)</li>
                <li><b>Engine:</b> 0.6 L</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>

            <div className="sticker-item">
              <a href="https://detailedvehiclehistory.com/report/vin/478TE24402A212829" target="_blank" rel="noopener noreferrer">
                <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/10-report-_01-700x447.jpg" alt="Honda report" />
              </a>
              <h3>
                <a href="https://detailedvehiclehistory.com/report/vin/478TE24402A212829" target="_blank" rel="noopener noreferrer">
                  Honda Trx350te
                </a>
              </h3>
              <ul>
                <li><b>VIN:</b> 478TE24402A212829</li>
                <li><b>Style / Body:</b> Off-road Vehicle – All Terrain Vehicle (ATV)</li>
                <li><b>Engine:</b> 0.3 L</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sample-stickers-section">
          <h2>RV and Motorhomes History Reports</h2>
          <div className="sticker-container">
            <div className="sticker-item">
              <a href="https://detailedvehiclehistory.com/report/vin/1FCKE33L8HHB04878" target="_blank" rel="noopener noreferrer">
                <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/11-ford-report_01-700x447.jpg" alt="Ford Econoline" />
              </a>
              <h3>
                <a href="https://detailedvehiclehistory.com/report/vin/1FCKE33L8HHB04878" target="_blank" rel="noopener noreferrer">
                  1987 Ford Econoline
                </a>
              </h3>
              <ul>
                <li><b>VIN:</b> 1FCKE33L8HHB04878</li>
                <li><b>Style / Body:</b> Incomplete – Motor Home Chassis</li>
                <li><b>Engine:</b> V-8 7.5L</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>

            <div className="sticker-item">
              <a href="https://detailedvehiclehistory.com/report/vin/5VBABX5A2MA121581" target="_blank" rel="noopener noreferrer">
                <img src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/12-report-tiffin_01-700x447.jpg" alt="Tiffin Motorhomes" />
              </a>
              <h3>
                <a href="https://detailedvehiclehistory.com/report/vin/5VBABX5A2MA121581" target="_blank" rel="noopener noreferrer">
                  2021 Tiffin Motorhomes
                </a>
              </h3>
              <ul>
                <li><b>VIN:</b> 5VBABX5A2MA121581</li>
                <li><b>Style / Body:</b> Incomplete – Motor Home Chassis</li>
                <li><b>Engine:</b> 6.7 L</li>
                <li><b>Country:</b> United States</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="stickers-section">
        <div className="sample-stickers-section">
          <h2 id="stickers">ATV History Reports</h2>
          <div className="sticker-container">
            <div className="sticker-item">
          <a href="https://detailedvehiclehistory.com/report/vin/1NFRL372560200157" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/13-report_newmar-700x447.jpg" 
              alt="2006 Newmar Corp." 
            />
          </a>
          <h3>
            <a href="https://detailedvehiclehistory.com/report/vin/1NFRL372560200157" target="_blank" rel="noopener noreferrer">
              2006 Newmar Corp.
            </a>
          </h3>
          <ul>
            <li><b>VIN:</b> 1NFRL372560200157</li>
            <li><b>Style / Body:</b> Trailer</li>
            <li><b>Engine:</b> n/a</li>
            <li><b>Country:</b> United States</li>
          </ul>
        </div>
         
        <div className="sticker-item">
          <a href="https://detailedvehiclehistory.com/report/vin/4YDF26R278V505914" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://detailedvehiclehistory.com/wp-content/uploads/sites/3/2024/08/14-report-keystone_01-700x447.jpg" 
              alt="2008 Keystone" 
            />
          </a>
          <h3>
            <a href="https://detailedvehiclehistory.com/report/vin/4YDF26R278V505914" target="_blank" rel="noopener noreferrer">
              2008 Keystone
            </a>
          </h3>
          <ul>
            <li><b>VIN:</b> 4YDF26R278V505914</li>
            <li><b>Style / Body:</b> Trailer</li>
            <li><b>Engine:</b> n/a</li>
            <li><b>Country:</b> United States</li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    
      {/* Additional sections for Classic Cars, Motorcycles, etc. can be added similarly */}

      <div className="vh-container">
      <div className="vh-heading-container">
        <h2 className="vh-heading-title">Get Window Sticker by Make
        </h2>
      </div>
      <div className="vh-text-container">
      <p className="vh-description">
      Get instant and precise window sticker for all vehicle types, makes, and models.
      </p>
      </div>
      <div className="vh-makes-container">
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/acura" target="_blank" rel="noopener noreferrer">Acuraa</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/alfa-romeo" target="_blank" rel="noopener noreferrer">Alfa Romeo</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/amc" target="_blank" rel="noopener noreferrer">AMC</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/am-general" target="_blank" rel="noopener noreferrer">Audi</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/aston-martin" target="_blank" rel="noopener noreferrer">Austin Healey</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/audi" target="_blank" rel="noopener noreferrer">BMW</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/austin-healey" target="_blank" rel="noopener noreferrer">Buick</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/avanti-motors" target="_blank" rel="noopener noreferrer">Cadillac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/bentley" target="_blank" rel="noopener noreferrer">AM-General</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/bmw" target="_blank" rel="noopener noreferrer">Aston-Martin</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/bricklin" target="_blank" rel="noopener noreferrer">Austin-Healey</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/bugattir" target="_blank" rel="noopener noreferrer">Avanti-Motors</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/buick" target="_blank" rel="noopener noreferrer">Bentley</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/cadilla" target="_blank" rel="noopener noreferrer">Bugatti</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/buick/vin-decoder" target="_blank" rel="noopener noreferrer">Buick</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/chevrolet" target="_blank" rel="noopener noreferrer">Chevrolet</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/chrysler" target="_blank" rel="noopener noreferrer">Chrysler</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/daewo" target="_blank" rel="noopener noreferrer">daewoo</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/daihatsu" target="_blank" rel="noopener noreferrer">Daihatsu</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/datsun" target="_blank" rel="noopener noreferrer">Dodge</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/dodge" target="_blank" rel="noopener noreferrer">Eagle</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/eagle" target="_blank" rel="noopener noreferrer">ferrari</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/ferrari" target="_blank" rel="noopener noreferrer">fiat</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/fia" target="_blank" rel="noopener noreferrer">fisker</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/fisker" target="_blank" rel="noopener noreferrer">Freightliner</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/ford" target="_blank" rel="noopener noreferrer">Genesis</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/freightliner" target="_blank" rel="noopener noreferrer">Geo</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/gmc/vin-decode" target="_blank" rel="noopener noreferrer">Gmc</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/genesis" target="_blank" rel="noopener noreferrer">Harley-Davidson</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/window-sticker/geo" target="_blank" rel="noopener noreferrer">Hino</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/honda/vin-decoder" target="_blank" rel="noopener noreferrer">Honda</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/hyundai/vin-decoder" target="_blank" rel="noopener noreferrer">Hyundai</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/hummer/vin-decoder" target="_blank" rel="noopener noreferrer">Hummer</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/infiniti/vin-decoder" target="_blank" rel="noopener noreferrer">Infiniti</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/international/vin-decoder" target="_blank" rel="noopener noreferrer">International</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/isuzu/vin-decoder" target="_blank" rel="noopener noreferrer">Isuzu</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/jaguar/vin-decoder" target="_blank" rel="noopener noreferrer">Jaguar</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/jeep/vin-decoder" target="_blank" rel="noopener noreferrer">Jeep</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kawasaki/vin-decoder" target="_blank" rel="noopener noreferrer">Kawasaki</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kenworth/vin-decoder" target="_blank" rel="noopener noreferrer">Kenworth</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/kia/vin-decoder" target="_blank" rel="noopener noreferrer">Kia</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lamborghini/vin-decoder" target="_blank" rel="noopener noreferrer">Lamborghini</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/koenigsegg/vin-decoder" target="_blank" rel="noopener noreferrer">Koenigsegg</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/land-rover/vin-decode" target="_blank" rel="noopener noreferrer">Land-Rover</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lexus/vin-decoder" target="_blank" rel="noopener noreferrer">Lexus</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lincoln/vin-decoder" target="_blank" rel="noopener noreferrer">Lincoln</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/lotus/vin-decoder" target="_blank" rel="noopener noreferrer">Lotus</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/maserati/vin-decoder" target="_blank" rel="noopener noreferrer">Maserati</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/maybach/vin-decoder" target="_blank" rel="noopener noreferrer">Maybach</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mazda/vin-decoder" target="_blank" rel="noopener noreferrer">Mazda</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mclaren/vin-decoder" target="_blank" rel="noopener noreferrer">Mclaren</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mercury/vin-decoder" target="_blank" rel="noopener noreferrer">Mercury</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mercedes-benz/vin-decoder" target="_blank" rel="noopener noreferrer">Mercedes-Benz</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mg/vin-decoder" target="_blank" rel="noopener noreferrer">MG</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mini/vin-decoder" target="_blank" rel="noopener noreferrer">Mini</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/mitsubishi/vin-decoder" target="_blank" rel="noopener noreferrer">Mitsubishi</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/morgan/vin-decoder" target="_blank" rel="noopener noreferrer">Morgan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/nissan/vin-decoder" target="_blank" rel="noopener noreferrer">Nissan</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/oldsmobile/vin-decoder" target="_blank" rel="noopener noreferrer">Oldsmobile</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/panoz/vin-decoder" target="_blank" rel="noopener noreferrer">Panoz</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/peterbilt/vin-decoder" target="_blank" rel="noopener noreferrer">Peterbilt</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/pontiac/vin-decoder" target="_blank" rel="noopener noreferrer">Pontiac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/porsche/vin-decoder" target="_blank" rel="noopener noreferrer">Porsche</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saab/vin-decoder" target="_blank" rel="noopener noreferrer">Saab</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/rolls-royce/vin-decoder" target="_blank" rel="noopener noreferrer">Rolls-Royce</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saab/vin-decoder" target="_blank" rel="noopener noreferrer">Cadillac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saleen/vin-decoder" target="_blank" rel="noopener noreferrer">Saleen</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/saturn/vin-decoder" target="_blank" rel="noopener noreferrer">Saturn</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/scion/vin-decoder" target="_blank" rel="noopener noreferrer">Scion</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/shelby/vin-decoder" target="_blank" rel="noopener noreferrer">Shelby</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/smart/vin-decoder" target="_blank" rel="noopener noreferrer">Smart</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/subaru/vin-decoder" target="_blank" rel="noopener noreferrer">subaru</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/suzuki/vin-decoder" target="_blank" rel="noopener noreferrer">suzuki</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/tesla/vin-decoder" target="_blank" rel="noopener noreferrer">tesla</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/toyota/vin-decoder" target="_blank" rel="noopener noreferrer">toyota</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/triumph/vin-decoder" target="_blank" rel="noopener noreferrer">triumph</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/volkswagen/vin-decoder" target="_blank" rel="noopener noreferrer">volkswagen</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/volkswagen/vin-decoder" target="_blank" rel="noopener noreferrer">Cadillac</a></div>
        <div className="vh-make"><a href="https://detailedvehiclehistory.com/yamaha/vin-decoder" target="_blank" rel="noopener noreferrer">yamaha</a></div>
      </div>
    </div>

    <div className="vh-container">
      <h2 className="heading">Lookup Window Stickers</h2>
      <ul className="link-list">
        <li className="link-item">
          <a href="https://detailedvehiclehistory.com/window-sticker" target="_blank" rel="noopener noreferrer">
          Window Stickers
          </a>
        </li>
        <li className="link-item">
          <a href="https://detailedvehiclehistory.com/classic-window-stickers" target="_blank" rel="noopener noreferrer">
          Classic Car Build Sheet

        </a>
        </li>
      </ul>
    </div>

  
    <div className="vh-h-container">
      <div className="heading-wrapper">
        <h1 className="heading-primary">Get Your Vehicle Reports and Window Stickers Now!</h1>
        <p className="heading-secondary">Are you in the used car market for used vehicles? Be informed while shopping with detailed and accurate vehicle history reports from Detailed Vehicle History. View hidden records, including accident records, theft records, sales listings, auction history, title brand records, and more for both classic and modern vehicles.</p>

      </div>
      <div className="button2-container">
        <a href="#reports" className="custom2-button">
          Vehicle History Report
        </a>
        <a href="#stickers" className="custom2-button">
          Window Sticker
        </a>
      </div>
    </div>


    </div>


     );
};

export default SampleReports;

