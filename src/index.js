import React from "react";

import ReactDOM from "react-dom";
import Badge from "./components/Badge"
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'


const container = document.getElementById("app");
ReactDOM.render(<Badge
    firstName="Santi"
    lastName="Montiel"
    avatarUrl="https://www.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?d=identicon"
    jobTitle="QA Automation & Desarrollador Frontend"
    email="ssosa@bancogalicia.com.ar"/>,
    container);
