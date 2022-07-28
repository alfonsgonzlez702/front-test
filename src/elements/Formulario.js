import styled from 'styled-components'
import { AiFillCheckCircle } from 'react-icons/ai'

const colores = {
    primary : "#3083ff",
    error : "#c75555",
    check : "#44fb44",
    smBlue : "#18b9b4",
    smRed : "#ff5859"
};

const Botoncito = styled.button`
    border: #282c34;
    border-radius: 1rem;
    padding: 1.5rem;
    color: white;
    background-color: rgb(41, 91, 172);
    font-size: 26px;

    &:hover {
        border: #1f56c5;
        color: rgb(67, 97, 231);
        background-color: rgb(255, 255, 255);
    }

`;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);

    align-items: center;
    display: flex;
    justify-content: center;
`;

const Modal = styled.div`
    background-color: white;
    vertical-align: center;
    /*padding: 40px 50px;*/
    color: black;
    position: relative;
    width: 500px;
    min-height: 100px;
`;


const CabeceraM = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 10px;
    padding-bottom: 10px;
    button {
        position: absolute;
        top: 20px;
        right: 30px;
        bottom: 0;
        width: 30px;
        height: 30px;
        text-decoration: none;
        color: black;
        cursor: pointer;
        border: none;
        background: none;
        font-size: 30px;
        padding: 0;
    }

    button:hover {
        color: rgb(94, 221, 244);
    }
`;

const ContenidoM = styled.div`
    display: block;
    padding: 20px 10px;
    margin: 40px 50px;
`;

const PieM = styled.div`
    width:92%;
    padding: 10px 20px;
    margin: 0;
    align-items: center;
    background-color: ${colores.smBlue};
    
    p {
        font-size:1rem;
        color: white;
    }
    a {
        color: white;
    }

    a:hover {
        color: ${colores.smRed};
    }

`;

const TituloM = styled.strong`
    font-size: 30px;
    display: block;
    margin-bottom: 2rem;
`;

const Form = styled.form`
    display: block;
`;

const Envia = styled.input`
    width: 100%;
    height: 2.5rem;

    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 6px;
    border-style: solid ;
    border-color: ${colores.smRed};
    background-color: ${colores.smRed};
    color: white;
    font-size: 20px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 14px 3px 16px 5px rgba(0,0,0,0.22); 
    box-shadow: 0px 10px 13px -7px #000000, 14px 3px 16px 5px rgba(0,0,0,0.22);

    &:hover {
        background-color: #ffffff;
        color: ${colores.smRed};
    }
`;

const GroupInput = styled.div`
    display: inline-flex;
    position: relative;
    width: 100%;
    height: 2rem;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;

    input {
        height: 100%;
        width: 100%;
        font-size: 1rem;
        padding: 6px 3rem 6px 6px;
        border: 1px solid rgb(230, 229, 229);
    }

    input:focus {
        border: 3px solid ${colores.smBlue};
        outline: none;
        box-shadow:3px 0px 30px rgba(163,163,163,0.4)
    }

    button {
        height: 100%;
        width: 3rem;
        font-size: 1.2rem;
        border-style: solid;
        border-color: rgb(230, 229, 229);
        background-color: transparent;
        outline: none;
        border: none;
        margin-left: -3rem;
        cursor: pointer;
    }

`;

const ValidF = styled(AiFillCheckCircle)`
    position: absolute;
    right: 10px;
    bottom: .2rem;
    z-index: 100;
    font-size: 1.5rem;
    opacity: 0;
    color: ${colores.check};
`;


export { 
    Modal, 
    Botoncito, 
    Overlay, 
    CabeceraM, 
    ContenidoM, 
    PieM, 
    TituloM, 
    Form, 
    Envia, 
    GroupInput, 
    ValidF, 
    ValidFP 
}