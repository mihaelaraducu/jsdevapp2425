//import { useState } from 'react'

import './App.css'
import Salut from './components/Salut'


function App() {

  return (
   <>
      <Salut nume='Mihaela' curs='React'/>
      <Salut nume='Ion' />
      <Salut nume='Maria' />
   </>
  )
}
export default App
