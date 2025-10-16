import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bienvenue from "./Components/Bienvenue.jsx";
import Compteur from "./Components/Compteur.jsx";
import Ex3 from "./Components/Ex3.jsx";
import Ex4 from "./Components/Ex4.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bienvenue name="Mohamed"/>
        <Compteur/>
        <Ex3/>
        <Ex4/>
    </>
  )
}

export default App
