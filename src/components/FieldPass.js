import React from 'react'
import { useState } from 'react';
import { GroupInput, Input, MsgError } from '../elements/Formulario';

const FieldPass = ({placehold, name, msg, regEx, tipo, value, setValue}) => {
    const [view, setView] = useState(false);
    const [show, setShow] = useState('password');

    const uncoverPass = e => {
        e.preventDefault();
        setView(!view);
        !view ? setShow('text'): setShow('password');

    }

    const isPass = (pass) => {
        let mayus = /^[A-Z]$/, isUpper = false, isNum = false;

        for (var i = 0; i < pass.length; i++) {
            if(mayus.test(pass[i])) isUpper = true;
            if(!isNaN(parseInt(pass[i]))) isNum = true;
        }

        return isNum && isUpper;
    };

    const validaP = () => {
        if(regEx) {
            if(regEx.test(value.dato)) {
                if (isPass(value.dato))
                    setValue({...value, valido:'true'});
            } else {
                setValue({...value, valido:'false'})
            }
    
        }
    };



    return (
        <>
            <GroupInput>
                <Input
                    type={show}
                    name={name}
                    placeholder={placehold}
                    value={value.dato}
                    onChange={(e) => {
                        setValue({...value, dato:e.target.value})
                    }}
                    
                    onKeyUp={tipo === null ? validaP : tipo}
                    onBlur={tipo === null ? validaP : tipo}
                    estado={value.valido}
                />
                <button onClick={uncoverPass}>
                {
                    !view ? (
                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z"/>
                            </g>
                        </svg>
                    ) : (
                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                            </g>
                        </svg>

                    )
                }
                </button>
                
            </GroupInput>
            <MsgError estado={value.valido}>
                {msg}
            </MsgError>
        </>
    )
}

export default FieldPass