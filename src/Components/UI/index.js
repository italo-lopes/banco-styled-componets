import styled from 'styled-components'

export const Incone = styled.img`
        height: 25px;
        width: 25px;
        filter: ${({theme})=> theme.filter};
`;
// quiser adicionar em um especifico herdando
export const InconeTema = styled(Incone)`
    filter: ${({theme})=> theme.filter};
`;

export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${({theme})=> theme.inside};
border-radius: 5px;
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
padding: 20px;
width: 48%;

@media (max-width: 800px) {
    width: 95%;
    margin: 5px;
}
`;

export const Detalhe = styled.span`
    color: #41d3be;
    font-size: 24px;
`;

export const Btn = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;


export const Saldo = styled.div`
    font-weight: 700;
    font-size: 32px;
`;

export const Items = styled.div`
    box-shadow : 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px; 
    margin: 9px 0;
    display: flex;
    align-items: center;
    justify-content:space-around;
    padding:10px;
    font-size:12px;
`;


export const BtnTema = styled.button`
        position: absolute;
        top: 4vh;
        right: 20px;
        background-color: inherit;
        border: none;
        cursor: pointer;
`;