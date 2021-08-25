import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import ClassSelect from './components/ClassSelect'
import './App.css'

interface archetypes {
  warrior: string[];
  martialArtist: string[];
  gunner: string[];
  mage: string[];
  assassin: string[];
}

type archetypesStatic = Readonly<archetypes>

let classes: archetypesStatic = {
  warrior: ['Berserker', 'Paladin', 'Gunlancer'],
  martialArtist: ['Striker', 'Wardancer', 'Scrapper', 'Soulfist'],
  gunner: ['Gunslinger', 'Artillerist', 'Deadeye', 'Sharpshooter'],
  mage: ['Bard', 'Summoner'],
  assassin: ['Shadowhunter', 'Deathblade']
}

const App = (): JSX.Element => {

  return (
    <Router>
      <div className="App">
        <NavBar classes={classes} />
      </div>
      <Switch>
        <Route path="/class-select">
          <h2>Nice build</h2>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
