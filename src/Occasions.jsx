import React from 'react';
import occasionsinfo from './occasionsinfo';



const change = (props) => {
    return (
        <div className='occasionsbox'>
             <img className='occasionsboximage'  src={props.img} />
              <p>{props.name}</p>
             </div>
    );
};

const Occasions = () => {
    return (
    
            
            <div className='occasionsdiv'>
            <h1 className='occasionsheading'>OCCASIONS GIFTS</h1>
            {occasionsinfo.map(change)}
        </div>
     
        
    );
};

export default Occasions;