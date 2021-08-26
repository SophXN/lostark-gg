import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import classData from '../classData.json'

export type BaseProps = {className?: string}
export interface AdvancedClass {name: string, art: string, skills?:Array<string>}
export interface Archetype { name: string, advanced: Array<AdvancedClass> }
export type Archetypes = Array<Archetype>

let classes: Archetypes = classData

const App = (): JSX.Element => {

  return (
    <Router>
      <div className="App">
        <NavBar classes={classes} />
      </div>
    </Router>
  )
}

export default App
