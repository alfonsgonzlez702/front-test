import './App.css';
import { Botoncito } from './elements/Formulario';
import ModalAcceso from './components/ModalAcceso';
import { useEffect, useState } from 'react';
import PieAcceso from './components/PieAcceso';
import { Switcher } from './components/Switcher';

//<img src={logo} className="App-logo" alt="logo" />

function App() {
  const [modalOn, setModalOn] = useState(false);
  const [foot, setFoot] = useState('logIn')

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    console.log(usuario);
  }, [usuario]);
  
  return (
    <div className="App">
      <header className="App-header">
        <Botoncito
          onClick={()=>{setModalOn(true);setFoot('logIn')}}
        >
          Ingresar
        </Botoncito>
        <ModalAcceso 
          modalOn = {modalOn}
          setModalOn={setModalOn}
          content={<Switcher 
            foot={foot} 
            setFoot={setFoot}
            pack={usuario}
            setPack={setUsuario}
          />}
          foot={<PieAcceso foot={foot} setFoot={setFoot}/>}
        />
      
      </header>
    </div>
  );
}

export default App;
