import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css';
import App from './App'
import {BrowserRouter} from 'react-router-dom';
// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
    <App />
  </BrowserRouter>
)