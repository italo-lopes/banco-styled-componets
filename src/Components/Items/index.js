import React from 'react';

import {Items} from '../../Components/UI'
import Item from '../../Components/Item'

// importar obj de incone pra usar

import ImageFilter from '../ImagenssFilter'

// esse Item é de styled componente 
export default (props) => {
    return ( 
        <Items>
            <ImageFilter type={props.type} />
            <Item
                {...props}
            />
            <span>{props.date}</span>
        </Items>
     );
}
// passada de prps com destribuição
