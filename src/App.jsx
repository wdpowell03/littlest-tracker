import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import petData from "./petData"
import SearchDash from "./SearchDash"

function App() {


  return (

    <div>
      <h1>Littlest Tracker</h1>
      <SearchDash />
    </div>

  )
}

export default App
