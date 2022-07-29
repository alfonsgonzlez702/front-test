import React from 'react'
import { CabeceraM, ContenidoM, PieM, Modal, Overlay } from '../elements/Formulario'

const ModalAcceso = ({ modalOn, setModalOn, content, foot }) => {
  return (
    <>
    {
      modalOn ?
      (
        <Overlay>
          <Modal>
            <CabeceraM>
              <button
                onClick={()=>{setModalOn(false)}}
              >
                x
              </button>
            </CabeceraM>
            <ContenidoM>
              {content}
            </ContenidoM>
            <PieM>
              {foot}
            </PieM>
          </Modal>
        </Overlay>
      ) :
      (<></>)
    }
    </>
      
  )
}

export default ModalAcceso