import React from "react";

import Badge from './components/Badge';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import App from './components/App';

const container = document.getElementById("app");
ReactDOM.render(<Badge/>,container);
