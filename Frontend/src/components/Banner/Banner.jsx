import React from 'react'
import Apple from '../../assets/png/apple.png'
import kiwi from '../../assets/png/kiwi.png'
import lemon from '../../assets/png/lemon.png'
import leaf from '../../assets/png/leaf.png'
import tomato from '../../assets/png/tomato.png'
import PrimaryButton from '../Shared/PrimaryButton'

const Banner = () => {
  return (
    <>
    <div  className='container py-14 relative'>
      <div className='relative z-20'>
        <h1 
        data-aos='fade-up'
        data-aos-delay='300' 
        className='py-8 tracking-wider text-2xl font-semibold text-dark text-center'>Taste the Heathly Difference</h1>

    {/* Content Section */}

        <div className='space-y-10'>
          <div 
          data-aos='fade-up'
          data-aos-delay='300' 
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div >
              <p>
                {" "}
                We know that <span className='text-primary '>time</span> is the greatest value in the modern world.Healthy food makes our bodies strong. 
                It’s like fuel for our bodies, just like petrol for cars.
                Fruits and vegetables are very good for us. 
                They have lots of vitamins to keep us healthy.
              </p>
            </div>
            <div></div>
          </div>

          <div 
          data-aos='fade-up'
          data-aos-delay='300' 
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div></div>
            <div >
              <p>
                {" "}
                We know that <span className='text-primary '>time</span> is the greatest value in the modern world.Healthy food makes our bodies strong. 
                It’s like fuel for our bodies, just like petrol for cars.
                Fruits and vegetables are very good for us. 
                They have lots of vitamins to keep us healthy.
              </p>
            </div>
          </div>
        </div>
        {/* Button Section */}

        <div
        data-aos='fade-up'
        data-aos-delay='500'  
        className='flex justify-center mt-10'>
          <PrimaryButton />
        </div>
      </div>
      {/* bg fruits pngs */}
      <div 
      data-aos='fade-right'
      className='absolute top-5 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img 
        data-aos='fade-right'
        src={leaf} className='max-w-[160px]'/>
      </div>
      <div 
      data-aos='fade-right'
      className='absolute -buttom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img src={tomato} className='max-w-[280px]'/>
      </div>
      <div 
      data-aos='fade-left'
      className='absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100'>
        <img src={lemon} className='max-w-[200px]'/>
      </div>
      <div 
      data-aos='fade-left'
      className='absolute bottom-0 right-0 hidden sm:block'>
        <img src={Apple} className='max-w-[200px]'/>
      </div>
      <div 
      data-aos='fade'
      className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
        <img src={kiwi} className='max-w-[200px]'/>
      </div>

      
    </div>
    </>
    )
}

export default Banner