import React from 'react';


import Utilidades from '../assets/images/utilidades.svg';
import Saude from '../assets/images/saude.svg';
import Transporte from '../assets/images/transporte.svg';
import Outros from '../assets/images/outros.svg';
import alimentacao from '../assets/images/alimentacao.svg';


import {Incone} from './UI'

export default ({type})=>{
    const imagem ={
        Restaurante: <Incone src= {alimentacao} alt='Restaurante'/>,
        Utilidades: <Incone src= {Utilidades} alt='Utilidades    '/>,
        Saude: <Incone src={Saude} alt= "saude"/>,
        Transporte: <Incone src={Transporte} alt= "Transporte"/>,
        default : <Incone src={Outros} alt = "Outros"/>
    }

    return imagem[type] ||  imagem.default;
}
// imagem[type] false logo imagem.default