import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BaristaForm from './Components/BaristaForm'
import './App.css'

function App() {

  return (
    <div>
      <div className='title-container'>
        <h1 className='title'></h1>
        <p>"So you think you can barista? Let's put that to the test..."</p>
      </div>
      <BaristaForm>

      </BaristaForm>
    </div>

  )
}

export default App
