import React, { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App
