import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import Myimage from './Components/Myimage';


const App = () => {
  const [value, setValue] = useState("https://cdn3.iconfinder.com/data/icons/emoji-1-4/64/_angry_sad_unhappy-256.png")

  let switchTougle;

  const swapImg = () => {
    if (!switchTougle) {
      setValue("https://cdn3.iconfinder.com/data/icons/emoji-1-4/64/_angry_sad_unhappy-256.png")
    } else {
      setValue(switchTougle)
    }
  }
  
  return(
    <div className='App'>
      <div className="content">
        <header>
          <h1>Let Him Pat You!</h1>
        </header>
        <div className="conteiner">
        <div className='main'>
          <Myimage />
          <div className="yourface">
              <img src={value} alt="stock img" className='penis'/>
            
          </div>
        </div>
        
        <div className="input-n-button">
          <input type="text" placeholder='Write URL' onChange={event => switchTougle = event.target.value} className="inpt"/>
          <button onClick={swapImg} className="btn">Upload</button>
        </div>
        </div>
      </div>
    </div> 
  )
}

export default App;