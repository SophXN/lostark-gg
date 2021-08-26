import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import SkillBuilder from './components/SkillBuilder';
import classData from '../classData.json';
import './App.css';
import ClassSelect from './components/ClassSelect';

export type BaseProps = { className?: string };
export interface Skills {
  name: string;
  icon: string;
}
export interface AdvancedClass {
  name: string;
  art: string;
  skills?: Array<Skills>;
}
export interface Archetype {
  name: string;
  advanced: Array<AdvancedClass>;
}
export type Archetypes = Array<Archetype>;

let classes: Archetypes = classData;

const App = (): JSX.Element => {
  const [currentClass, chooseClass] = useState<AdvancedClass>({
    name: 'none',
    art: 'none',
  });

  return (
    <Router>
      <div className="App">
        <NavBar classes={classes} chooseClass={chooseClass} />
      </div>
      <Switch>
        <Route exact path="/">
          <p>Some news</p>
        </Route>
        <Route path={`/classes/new/:className`}>
          <SkillBuilder currentClass={currentClass} />
        </Route>
        <Route exact path="/classes">
          <ClassSelect archetypes={classes} chooseClass={chooseClass} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
