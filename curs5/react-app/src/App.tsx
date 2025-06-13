//import { useState } from 'react'

import './App.css'
import Form from './components/Form';
import Masina from './components/Masina'
import Salut from './components/Salut'


function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
   <>
      <Salut nume={'Mihaela'} curs={123}/>
      <Salut nume='Ion' />
      <Salut nume='Maria' />
      <Masina car={carInfo}/>
      <Form/>
   </>
  )
}
export default App
