import React from 'react';
import categoriesinfo from './categories.js';


const change = (props) => {
    return (
        <div className='categoriess'>
             <img  src={props.img} />
              <p >{props.category}</p>
              
             </div>
    );
};

const BdayGiftsboxs = () => {
    return (<div>
        <div className='toppadding'></div>
        <div className='categories'>
        
            {categoriesinfo.map(change)}
            
        </div>
        </div>
    );
};

export default BdayGiftsboxs;