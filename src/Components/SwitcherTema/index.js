import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import {Incone} from '../UI'

const claro = <Incone src ={ThemeOn} alt="Tema Claro" />
const escuro =<Incone src= {ThemeOff} alt="Tema Escuro"/>

const SwitcherTema = ({tema})=>{
    console.log(tema)
    return(
        tema? claro : escuro
    )
}

export default SwitcherTema