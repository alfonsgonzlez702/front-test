import React from 'react'

const PieAcceso = ({foot, setFoot}) => {
    const switcher = () => {
        console.log("Cambio");
        foot === 'logIn' ? setFoot('signUp') : setFoot('logIn');

    };

  return (
    <>
        {
            foot === 'logIn' ?
            (<p>¿No tienes cuenta? <a onClick={switcher} href="/#">Crea una nueva</a></p>)
                :
            (<p>¿Ya tienes cuenta? <a onClick={switcher} href="/#">Inicia sesión</a></p>)
        }
        
    </>
  )
}

export default PieAcceso

