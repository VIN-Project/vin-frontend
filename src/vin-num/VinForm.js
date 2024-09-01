import React, { useState } from 'react';
import axios from 'axios';
import './VinForm.css';

const VinForm = () => {
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



  const [vin, setVin] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vinDetails, setVinDetails] = useState(null);
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Check if the email is registered in MongoDB
      const emailCheckResponse = await axios.post('http://localhost:3020/api/signup/check', {
        email: email,
      });
  
      if (emailCheckResponse.data.status) {
        setMessage('Email is registered. Fetching VIN details...');
  
        // Fetch VIN details from mock API
        const response = await axios.get('https://66ce128d8ca9aa6c8cccc569.mockapi.io/apiv1/vins/vinn');
        const data = response.data;
  
        // Find the VIN details based on the entered VIN
        const foundVin = data.find(item => item.VinNum === vin);
  
        if (foundVin) {
          setVinDetails(foundVin);
          setMessage('VIN details fetched successfully.');
        } else {
          setMessage('VIN not found in the database.');
          setVinDetails(null);
        }
      } else {
        setMessage('Email not registered in the database.');
        setVinDetails(null); // Clear previous VIN details
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('Error processing the request.');
    }
  };
  

  return (
    <>
      <div className='vin-decoder-form'>
        <form onSubmit={handleFormSubmit}>
          {searchMethod === 'VIN' && (
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter VIN"
                maxLength="17"
                className="input-field"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Enter Phone (Optional)"
                className="input-field"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}

          <button type="submit" className="form-submit-btn">
            Get Your Vehicle History Report
          </button>
        </form>

        <span className="validation-message">{message}</span>

        {/* Display VIN Details */}
        {vinDetails && (
          <div className="vin-details-container">
            <form className="vin-details-form">
              <div className="form-group">
                <label htmlFor="VinNum">VIN Number:</label>
                <input type="text" id="VinNum" value={vinDetails.VinNum} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="Model">Model:</label>
                <input type="text" id="Model" value={vinDetails.Model} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="Maker">Maker:</label>
                <input type="text" id="Maker" value={vinDetails.Maker} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="Year">Year:</label>
                <input type="text" id="Year" value={vinDetails.Year} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="ID">ID:</label>
                <input type="text" id="ID" value={vinDetails.id} readOnly />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default VinForm;
