import React from 'react';
import Navbar from './Navbar';

const Menu = () => {
  return (
   <div>
     <div>
      <Navbar />
      </div>
      <div className='menudivparent'>
      <div className='menudiv'>
    <div className='menuCategoriesdiv'>
     <div className='bdaycategories'>BirthDay Gifts
     <div className='dropcontent'>
     <li className='menuCategories'>Flowers</li>
     <li className='menuCategories'>Cakes</li>
     <li className='menuCategories'>Plants</li>
     <li className='menuCategories'>Hampers</li>
     </div>
    </div>
    </div>
    <div className='menuCategoriesdiv'>
     <div className='bdaycategories'>Personalized  Gifts
     <div className='dropcontent'>
     <li className='menuCategories'>Home & Living</li>
     <li className='menuCategories'>Diaries & Pens</li>
     <li className='menuCategories'>Jwellery</li>
     <li className='menuCategories'>Photo Gifts</li>
     </div>
    </div>
    </div>
    <div className='menuCategoriesdiv'>
     <div className='bdaycategories'>Occasions Gifts
     <div className='dropcontent'>
     <li className='menuCategories'>Wedding</li>
     <li className='menuCategories'>Personal</li>
     <li className='menuCategories'>Special</li>
     <li className='menuCategories'>Festivals</li>
     </div>
    </div>
    </div>
    <div className='menuCategoriesdiv'>
     <div className='bdaycategories'>Anniversery Gifts
     <div className='dropcontent'>
     <li className='menuCategories'>Flowers</li>
     <li className='menuCategories'>Couples</li>
     <li className='menuCategories'>Wifes</li>
     <li className='menuCategories'>Husbands</li>
     </div>
    </div>
    </div>
    </div>     
    </div>
    </div>


  )
}

export default Menu;
