import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import {GlobalStyle} from "./Components/GlobalStyle";

// npm install --save styled-components
// importar globalstyled
// fonte no index.html 
// variavel -padronizar

function App() {
  return (
    <>
      <GlobalStyle/>
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
