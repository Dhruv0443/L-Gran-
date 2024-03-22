import React from "react";

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style.css';
import '../style1.css';

import { Group } from "./Group";
import { Group3 } from "./Group3";
import { Group4 } from "./Group4";
import { Navbar } from "./Navbar";
import { Group8 } from "./Group8";
import { Footer } from "./Footer";
const Main = ()=>{
    return(<>
    <Navbar/>
     <Group />
    <Group3 />
    <Group4 />
    <Group8 />
    <Footer/>
    </>)
}

export default Main;