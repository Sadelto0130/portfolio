import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const  ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl text-center'>Since 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='1' text='Year' />
        <p className='font-bold text-6xl text-lightGrey'>-</p>
        <ExperienceInfo number='2' text='Projects' />
      </div>
      <p className='text-center text-white'>
        Fullstack developer with 1 year of experience, 3 web projects, clean code, and fast learning mindset.
      </p>
    </div>
  )
}
 
export default ExperienceTopLeft