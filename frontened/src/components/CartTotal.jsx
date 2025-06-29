
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className='w-full max-w-md mx-auto'>
      <div className='text-2xl mb-4'>
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-700 border p-4 rounded'>
        <div className='flex justify-between'>
          <span>Subtotals</span>
          <span>{currency}{subtotal.toFixed(2)}</span>
        </div>
        <hr />
        <div className='flex justify-between'>
          <span>Shipping Fee</span>
          <span>{currency}{subtotal === 0 ? '0.00' : delivery_fee.toFixed(2)}</span>
        </div>
        <hr />
        <div className='flex justify-between font-bold'>
          <span>Total</span>
          <span>{currency}{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

