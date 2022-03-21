import React from 'react';
import bdayinfo from './bdayboxinfo';


const change = (props) => {
    return (
        <div className='bdaybox'>
             <img className='bdayboximage'  src={props.img} />
              <p className='bdayboxtags'>{props.name}</p>
             </div>
    );
};

const BdayGiftsboxs = () => {
    return (
        <div className='bdayboxdiv'>
            <h1 className='bdayboxheading'>BIRTHDAY GIFTS</h1>
            {bdayinfo.map(change)}
        </div>
    );
};

export default BdayGiftsboxs;