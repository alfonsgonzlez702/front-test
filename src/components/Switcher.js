import React from 'react'
import LogIn from './LogIn'
import SignIn from './SignIn'

export const Switcher = ({pack, setPack, foot, setFoot}) => {
  return (
    <>
        {
            foot === 'logIn' ?
            <LogIn pack={pack} setPack={setPack} />
                :
            <SignIn pack={pack} setPack={setPack} setFoot={setFoot} />
        }
        
    </>
  )
}
