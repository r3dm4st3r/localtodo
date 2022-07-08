import "./assets/css/tail.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApplicationProvider} from "./context/ApplicationProvider";
import { BrowserRouter } from "react-router-dom";
import Application from "./Application";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ApplicationProvider>
              <Application />
          </ApplicationProvider>
      </BrowserRouter>
  </React.StrictMode>
);