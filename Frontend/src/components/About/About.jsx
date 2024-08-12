import React from 'react'
import ByPolygon from '../../assets/polygon.png'
import Vector from '../../assets/vector-wave.png'
import {FaCaretDown, FaUser} from 'react-icons/fa'

const bgStyle ={
  backgroundImage: `url(${ByPolygon})`,
  backgroundRepeat: 'no repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height:'100%',
  position:'relative'
}

const About = ({HandlePopup}) => {
  return (
    <>
    <div style={bgStyle} className='py-14'>
      <div className='container min-h-[500px] relative z-10'>
        <h1 
        data-aos='fade'
        className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About Us</h1>
        {/*card section*/}
        <div 
        data-aos='fade'
        data-aos-delay='300'
        className='bg-white/80 p-10 my-10'>
        A group of regulars were clamoring over meticulously prepared meals.

        There were plenty of food: grated Parmesan, pitted black olives, freshly baked croissants, and corn being roasted in coal pots and boiled in oil tins.

        In the left corner there were a concession stall of baked goods an on the right were a pair of bright red apples being soaked in melted caramel

        A cook inside of the kitchen tilted his head as he opened massive cupboard. Full of condensed milk tins and canned fruits and vegetables. The costumers surrounding the steel doors were beginning to salivate over the meals about to be prepared.
        <div className='p1-10 flex justify-center'>
        <button 
        onClick={HandlePopup}
        className='flex justify-center items-center gap-2 bg-primary text-xl h-[40px]
        text-white px-5 py-2 hover:scale-105 rounded             duration-300'>
        <FaUser/>
        My Account
        </button>
        </div>
        </div>
      </div>
      {/*wave vector */}
      <div className='absolute -top-0 right-0 w-full'>
        <img src={Vector} className='mx-auto' />
      </div>
    </div>
    </>
  )
}

export default About