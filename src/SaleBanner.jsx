import React from 'react'

const SaleBanner = () => {
  return (
    <div  >
         <div>

           <img className='salebanner' src='https://cdn.igp.com/f_auto,q_auto,t_pnopt38prodlp/banners/igp_sale_20180216.jpg' />
           <img className='salebanner' id='secondsalebanner' src='https://cdn.igp.com/f_auto,q_auto,t_pnopt38prodlp/banners/covid-strip-3.jpg?v=5' />
        
         </div>
         <div className='stats'>

            <div className='statsdata'>
              <h1>400+</h1>
              <p id='statscontent'>Cities having same day delivery</p>
            </div>

            <div className='statsdata'>
              <h1>100+</h1>
              <p  id='statscontent'>Countries being served with happiness</p>
            </div>
       

            <div className='statsdata'>
              <h1>5Million+</h1>
              <p id='statscontent'>Gift boxes delivered worldwide</p>
            </div>
       
       
        </div>
    </div>
  )
}

export default SaleBanner