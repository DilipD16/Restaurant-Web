import React from 'react'
import { FaPhone } from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
    <div className='text-white mt-20'>
      <div 
      data-aos='fade-down'
      className='contaainer bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>
        {/*Contact Section */}
       <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
        {/* Address Section*/}
          <div className='text-center space-y'>
            <div className='flex justify-center'>
              <IoLocationSharp  className='text-5xl'/>
            </div>
            <p>
              #37/15 4th Cross,Nagappa Block,
              <br />Srirampuram,Bangaluru Karnataka -560021
            </p>
          </div>
          {/*Email section */}
          <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <MdEmail className='text-5xl'/>
            </div>
            <div>
              <p>info@goodfood.com</p>
              <p>diliprio14@gmail.com</p>
            </div>
          </div>
          {/*Number section*/}
          <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <FaPhone className='text-5xl'/>
            </div>
            <div>
              <p>+91 7349330380 - Sales And Servies</p>
              <p>+91 6360591808 - Hiring Queries</p>
              <p>+91 9591393317 - Whatsapp</p>
            </div>
          </div>
       </div>
       {/*copyright section*/}
       <div className='flex justify-between p-4 items-center'>
        <p>© 2024 Dilip D. All rights reserved.
        </p>
        <div className='flex items-center gap-6'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms & Conditions</a>
        </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Footer