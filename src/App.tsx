import React, { useState } from 'react'
import NavBar from './components/NavBar'
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
  let classes: string[] = []

  return (
    <div className="App">
      <NavBar classes={classes} />
    </div>
  )
}

export default App
