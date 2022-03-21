import React from 'react';
import personalgiftsinfo from "./personalizesgiftsinfo";

const change = (props) => {
    return (
        <div className='personalgiftsbox'>
             <img className='personalgiftsboximage'  src={props.img} />
              <p>{props.name}</p>
             </div>
    );
};

const Personalized = () => {
  return (
    <div className='personalgiftsdiv'>
    <h1 className='personalgiftsheading'>PERSONALIZED GIFTS</h1>
    {personalgiftsinfo.map(change)}
</div>
  )
}

export default Personalized;