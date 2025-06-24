import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-color2 mb-10'>About Me</h2>
      <p className='text-white'>
        Fullstack developer focused on Node.js, Express, React.js, Vite, MongoDB and PostgreSQL. Passionate about building functional, scalable web apps. Seeking my first professional opportunity.
      </p>
      <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-color2 transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-black'>My Projects</button>
    </div>
  )
}

export default AboutMeText