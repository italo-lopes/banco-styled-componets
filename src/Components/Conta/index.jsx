import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import styled from 'styled-components'
// pegar incone um cop generico

import {Box} from  '../../Components/UI'

import{Incone,Btn,Detalhe,Saldo} from  '../../Components/UI'

// QUANDO O IINCONE IMPORTADO MUDA

const  InconeMargin = styled(Incone)`
marginTop: "2px"
`;


// STYLE COMPONET ACABA AQUI
const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Incone src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <InconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Btn>
    </Box>
  );
};

export default Conta;
