import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
       <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
          <p>Forever was born out of a passion for innovation and a desire to revolanize the way people shop online. Our journey began witha simple idea : to provide a platform where customers can easily discover,explore and purchase a wide range of products from the comfort from their homes.  </p>
          <p>Since our inception ,we have worked tirelessaly to curate a diverse Selection of high-quality products that cater to every taste preference. from Fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers. </p>
          <b className=' text-gray-800'>OUR MISSION</b>
          <p>Our Mission at forever is to empower customers wiyh choice,convenience, and confidence. We are dedicated toproviding a seemless shopping experience that exceeds expecations, from browsing and ordering to delivery and beyond.  </p>
        </div>

      </div>
        <div className='text-2xl py-4 '>
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
         <b>Quality Assurance:</b>
         <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards. </p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
         <b>Convenience:</b>
         <p className='text-gray-600'>With our users friendly interfaces and hassle free ordering process,shopping has nevar been easier. </p>
        </div>  

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
         <b>Exceptional Customers service:</b>
         <p className='text-gray-600'>Our Team of dedicated professionals is here to assist you the way, ensuring your satisfication is our top Priority. </p>
        </div>
        </div>

        <NewsLetterBox/>  
    </div>
  )
}

export default About
