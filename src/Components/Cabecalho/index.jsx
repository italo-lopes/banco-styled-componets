import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from 'styled-components'
import {corPrimaria} from '../UI/variaveis'

const StylerHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BotaoGeral = styled.a`

  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props)=> props.$primary? "white" : corPrimaria};
  color: ${(props)=> props.$primary? corPrimaria : "white"}

`;
// utilização de props

//acima Style Componente
// abaixo Componete 
// vou usar esse estilo de componente pra subsstituir uma tag e sua className
const Cabecalho = () => {



  return (
    <StylerHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BotaoGeral $primary href="https://google.com">
          Ajuda
        </BotaoGeral>
        <BotaoGeral href="https://google.com">
          Sair
        </BotaoGeral>
      </div>
    </StylerHeader>
  );
};

export default Cabecalho;


// const Secundario = styled.a`

//   text-align: center;
//   border-radius: 3px;
//   padding: 5px 20px;
//   margin: 0 10px;
//   font-weight: 600;
//   border: 2px solid white;

//   background: white;
//   color: #41d3be;

// `;

// const Primario = styled.a`
//   text-align: center;
//   border-radius: 3px;
//   padding: 5px 20px;
//   margin: 0 10px;
//   font-weight: 600;
//   border: 2px solid white;
  
//   color: white;
//   background: transparent;
// `;

//transformar em uma coisa so com pequenas mudaça