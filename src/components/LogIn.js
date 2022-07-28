import React from 'react'
import { useState } from 'react';
import { TituloM, Form, Envia } from '../elements/Formulario';
import Field from './Field';
import FieldPass from './FieldPass';

const LogIn = () => {
    const titulo = "Iniciar sesión";
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
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
                />
                <FieldPass 
                    placehold='Tu contraseña'
                />

                <Envia
                    type='submit'
                    value= "Enviar"
                />
            </Form>
            
        </>
    )
}

export default LogIn