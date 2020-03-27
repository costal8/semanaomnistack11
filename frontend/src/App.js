import React, { useState } from 'react';
import Header from './Header';
import Logon from './pages/Logon';
import './global.css';

function App() {
  const [counter, setCounter ]= useState(0);
  // Array[valor, funcao de atualização]
  
  function increment() {
    setCounter(counter + 1);
    
  }
  return (
    <div>
       <Header title="Semana OminiStack">
         
         Semana OminiStack2
         Semana

       </Header> 
       
        <p> Contador:{counter}</p>
         <button onClick={increment}>Incrementar</button>

        <Logon />
    </div>

        
  );
}

export default App;
