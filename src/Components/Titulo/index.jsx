import styled from 'styled-components'

// eu vou dizer pro componente 
// que esse children que eu to receebendo tem essa estilização e essa
// nao é mais um componete e sim um estilizador de componete

const Titulo = styled.h1`
  color: ${({theme})=>theme.text};
  padding: 25px 0;
`;

export default Titulo;  
