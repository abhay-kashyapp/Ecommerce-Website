import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

      <div>
        <img src={assets.logo} className='mb-5 w-32 ' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
         Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the.Lorem Ipsum has been the industry's standard dummy text ever since the 1500's , when an unknown printer tool a gallery of type and scrambled and make a type spiceman Book.
         </p>
      </div>


      <div>
      <p className='text-x1 font-medium mb-5'>COMPANY</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
      </ul>
      </div>

      <div>
        <p className='text-x1 font-medium mb-5'>Get In Touch</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-212-456-15883</li>
          <li>contact@ForeverYou.com</li>
        </ul>
      </div>

      </div>
 
     <div>
      <hr />           
      <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com All Rights Reserved.</p>
     </div>

    </div>
  )
}

export default Footer
