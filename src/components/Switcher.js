import React from 'react'
import LogIn from './LogIn'
import SignIn from './SignIn'

export const Switcher = ({foot}) => {
  return (
    <>
        {
            foot === 'logIn' ?
            <LogIn />
                :
            <SignIn />
        }
        
    </>
  )
}
