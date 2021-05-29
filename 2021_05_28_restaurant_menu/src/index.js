import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


