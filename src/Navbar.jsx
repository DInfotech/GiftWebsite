import React from 'react';
import "./App.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <a href='menu'   className='menu'><i class='fa fa-bars'>
          
          <div>
            <ol>
              <li className='menudropdown'>login</li>
              <li className='menudropdown'>signup</li>
              <li className='menudropdown'>myaccount</li>
              <li className='menudropdown'>myorders</li>
            </ol>
            </div>
            </i></a>
         
        
         <div className='search'>
        <input className='searchbar' type="text" placeholder="Search.." />
      
        </div>
       
        <div  className='righticons'> 
         <a href='#' className='icons' ><i class='fa fa-home'></i></a>
         <a href='' className='icons'><i class='fa fa-user-circle-o'></i></a>
         <a href='' className='icons'><i class='fa fa-heart-o'></i></a>
         <a href='' className='icons'><i class='fa fa-shopping-ca'></i></a>
         </div>  
</div>
   
  )
}

export default Navbar;