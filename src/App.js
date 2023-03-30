import React from 'react';
import './App.css';
import './Navbar.css';
import './Boxes.css';
import Navbar from './Navbar';
import skillList from './data/skills-titles.json'
import Skill from './Components/Skills'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
