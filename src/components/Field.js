import React from 'react'
import { GroupInput, ValidF } from '../elements/Formulario'

const Field = ({tipo, placehold, name, regEx, value, setValue}) => {

  const valida = () => {
    if(regEx) {
      if(regEx.test(value)) {
        console.log('GOOD!')
      } else {
        console.log('GOODN´T')
      }

    }

  };

  return (
    <GroupInput>
        <input
            type={tipo}
            placeholder={placehold}
            name={name}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            onKeyUp={valida}
            onBlur={valida}
        />
        <ValidF />
    </GroupInput>
  )
}

export default Field