import React from 'react'
import { GroupInput, Input, ValidF, MsgError, InvalidF } from '../elements/Formulario'

const Field = ({tipo, placehold, name, msg, regEx, value, setValue}) => {
  const valida = () => {
    if(regEx) {
      if(regEx.test(value.dato)) {
        setValue({...value, valido:'true'})
      } else {
        setValue({...value, valido:'false'})
      }

    }

  };

  return (
    <>
      <GroupInput>
          <Input
              type={tipo}
              placeholder={placehold}
              name={name}
              value={value.dato}
              onChange={(e) => {
                setValue({...value, dato:e.target.value})
              }}
              onKeyUp={valida}
              onBlur={valida}
              estado={value.valido}
          />
          <ValidF estado={value.valido} />
          <InvalidF estado={value.valido} />
      </GroupInput>
      <MsgError estado={value.valido}>
        {msg}
      </MsgError>
    </>
  )
}

export default Field