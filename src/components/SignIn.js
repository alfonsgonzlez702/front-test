import React from 'react'
import { useState } from 'react';
import { TituloM, Form, Envia } from '../elements/Formulario';
import Field from './Field';
import FieldPass from './FieldPass';

const SignIn = ({ pack, setPack, setFoot}) => {
    const titulo = "Crea una cuenta";
    const [email, setEmail] = useState({dato : '',valido : null});
    const [pass, setPass] = useState({dato : '',valido : null});
    const [repass, setRepass] = useState({dato : '',valido : null});

    const ValidaR = () => {
        if(pass.dato === repass.dato) {
            setRepass({...repass, valido:'true'});
        } else {
            setRepass({...repass, valido:'false'});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.valido && pass.valido && repass.valido) {
            setPack({
                correo: email.dato,
                contrasena: pass.dato,
            });
            setFoot('logIn');
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
                    msg = {'Usa el formato de email correcto ejemplo@hola.com'}
                />
                <FieldPass 
                    placehold='Tu contraseña'
                    name='pass'
                    value={pass}
                    setValue={setPass}
                    regEx={/^[A-Za-z0-9]{5,}$/}
                    msg = {'Usa al menos 5 caractéres, una letra mayúscula y un número'}
                    tipo={null}
                />
                <FieldPass 
                    placehold='Repite tu contraseña'
                    name='repass'
                    value={repass}
                    setValue={setRepass}
                    tipo={ValidaR}
                    msg = {'Las contraseñas no coinciden'}
                />

                <Envia
                    type='submit'
                    value= "Crea una cuenta"
                    onClick={handleSubmit}
                />
            </Form>
        </>
    )
}

export default SignIn