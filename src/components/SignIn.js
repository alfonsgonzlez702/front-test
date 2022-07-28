import React from 'react'
import { useState } from 'react';
import { TituloM, Form, Envia } from '../elements/Formulario';
import Field from './Field';
import FieldPass from './FieldPass';

const SignIn = () => {
    const titulo = "Crea una cuenta";
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRepass] = useState('');
    
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
                    name='pass'
                    value={pass}
                    setValue={setPass}
                />
                <FieldPass 
                    placehold='Repite tu contraseña'
                    name='repass'
                    value={repass}
                    setValue={setRepass}
                />

                <Envia
                    type='submit'
                    value= "Crea una cuenta"
                />
            </Form>
        </>
    )
}

export default SignIn