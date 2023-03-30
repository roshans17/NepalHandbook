import React from 'react';
import '../App.css';
import '../Navbar.css';
import '../Boxes.css';
import Navbar from '../Navbar';
import skillList from '../data/skills-titles.json'
import Skill from '../Components/Skills'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Dummy() {
    return (
        <div>Hi</div>
    );
}

export default Dummy;
