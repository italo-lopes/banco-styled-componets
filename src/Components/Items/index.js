import React from 'react';

import {Items} from '../../Components/UI'
import Item from '../../Components/Item'

// esse Item é de styled componente 
export default (props) => {
    return ( 
        <Items>
            <Item
                {...props}
            />
        </Items>
     );
}
// passada de prps com destribuição
