import React from 'react';
import anniversaryinfo from './anniversaryinfo.js';


const change = (props) => {
    return (
        <div className='anniversarybox'>
             <img className='anniversaryboximage'  src={props.img} />
              <p>{props.name}</p>
             </div>
    );
};

const Anniversary = () => {
    return (
        <div>
            <div className='anniversarydiv'>
            <h1 className='anniversaryheading'>ANNIVERSARY GIFTS</h1>
            {anniversaryinfo.map(change)}
        </div>
        </div>
    );
};

export default Anniversary;