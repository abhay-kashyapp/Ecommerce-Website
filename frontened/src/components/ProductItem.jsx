import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';


const ProductItem = ({id,image,name,price}) => {

  const {currency} = useContext(ShopContext);

  return (
    <Link  className='text-gray-700 cursor-pointer' to={`/product/${id.trim()}`}>
      <div className='overflow-hidden'>
      <img className='hover:scale-110 transion ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;
