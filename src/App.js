import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaEscuro, temaClaro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import { useState } from "react";

// npm install --save styled-components
// importar globalstyled
// fonte no index.html
// variavel -padronizar

function App() {
  const [tema, setTema] = useState(false);

  // const mudarTema = () => {
  //   return tema ? temaClaro : temaEscuro;
  // };

  return (
    
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTema onClick={() => setTema(tema ? false : true)}>
          <SwitcherTema tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
   
  );
}

export default App;
