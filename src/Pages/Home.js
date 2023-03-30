import React from 'react';
import '../App.css';
import '../Navbar.css';
import '../Boxes.css';
import Navbar from '../Navbar';
import skillList from '../data/skills-titles.json'
import Skill from '../Components/Skills'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Dummy from './Dummy';

function Home() {
    return (
        <div className="skill-container">
            <Router>
                {skillList.map((skill) => (
                    // <Route>
                    <Skill name={skill['Section-Title']}
                        image={skill['Section-Image']}
                        link={skill['Section-Title']} />
                    // </Route>
                ))}
            </Router>
        </div>
    );
}

export default Home;
