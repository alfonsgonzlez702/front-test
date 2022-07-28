import './App.css';
import { Botoncito } from './elements/Formulario';
import ModalAcceso from './components/ModalAcceso';
import { useState } from 'react';
import PieAcceso from './components/PieAcceso';
import { Switcher } from './components/Switcher';

//<img src={logo} className="App-logo" alt="logo" />

function App() {
  const [modalOn, setModalOn] = useState(false);
  const [foot, setFoot] = useState('logIn')
  
  return (
    <div className="App">
      <header className="App-header">
        <Botoncito
          onClick={()=>{setModalOn(true);setFoot('logIn')}}
        >
          Ingresa
        </Botoncito>
        <ModalAcceso 
          modalOn = {modalOn}
          setModalOn={setModalOn}
          content={<Switcher foot={foot} />}
          foot={<PieAcceso foot={foot} setFoot={setFoot}/>}
        />
      
      </header>
    </div>
  );
}

export default App;
