import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LandingPageRouts from "./pages/routes";
import VinForm from "./vin-num/VinForm";

function App() {

  return (
    <>
      <Router>
        <LandingPageRouts />
        <div>
        <h1>login with facebook</h1>
        </div>
      </Router>
    </>
  );
}

export default App;
