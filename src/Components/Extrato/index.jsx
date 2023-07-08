import React from 'react';
import {Box,Btn} from '../UI'
import {extratoLista} from "../../info";
import Items from '../Items'
// esse Item é de componente funcional
const Extrato = () => {
    return ( 
        <Box>
            {extratoLista.updates.map( (info) =>{
            return(
                <Items
                 key ={info.id}
                 type= {info.type}
                 value= {info.value}
                 date = {info.date}
                 from = {info.from}
                />
            )}
            )}
            <Btn>Ver mais</Btn>
        </Box>
     );
}
 
export default Extrato;