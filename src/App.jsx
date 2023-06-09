//import viteLogo from '/vite.svg'
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={`Bienvenidos a GUMO EFECTOS`} />
    </div>
  )
}

export default App
