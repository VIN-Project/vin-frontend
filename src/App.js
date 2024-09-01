import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LandingPageRouts from "./pages/routes";
import VinForm from "./vin-num/VinForm";

function App() {
 const responseFacebook = (response) =>{
 console.log(response);
 }

  return (
    <>
      <Router>
        <LandingPageRouts />
        <div>
        <h1>login with facebook</h1>
        <FacebookLogin
         appId="1035183138044076"
         autoLoad={true}
         callback={responseFacebook} />
        </div>
      </Router>
    </>
  );
}

export default App;
