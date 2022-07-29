import React from 'react'
import { useState } from 'react';
import { TituloM, Form, Envia } from '../elements/Formulario';
import Field from './Field';
import FieldPass from './FieldPass';

const LogIn = ({ pack, setPack }) => {
    const titulo = "Iniciar sesión";
    const [email, setEmail] = useState({dato : '',valido : null});
    const [pass, setPass] = useState({dato : '',valido : null});

    const ValidaR = () => {
        if(pass.dato.length >= 5) {
            setPass({...pass, valido:'true'});
        } else {
            setPass({...pass, valido:'false'});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.valido && pass.valido) {
            setPack({
                correo: email.dato,
                contrasena: pass.dato,
            });
        }
    };
    
    return (
        <>
            <TituloM>{titulo}</TituloM>

            <Form>
                <Field 
                    placehold='Tu correo'
                    name='correo'
                    value={email}
                    setValue={setEmail}
                    regEx={/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i}
                    msg= {'Usa el formato de email correcto ejemplo@hola.com'}
                />
                <FieldPass 
                    placehold='Tu contraseña'
                    name='pass'
                    value={pass}
                    setValue={setPass}
                    tipo={ValidaR}
                    msg = {'Verifica tus datos e intentalo nuevamente'}
                />

                <Envia
                    type='submit'
                    value= "Enviar"
                    onClick={handleSubmit}
                />
            </Form>
            
        </>
    )
}

export default LogIn