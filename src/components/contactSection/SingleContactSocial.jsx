import React from 'react'

const SingleContactSocial = ({Icon, link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-color2 text-color2 rounded-full p-3 flex items-center justify-between'>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className='cursor-pointer'
      >
        <Icon/>
      </a>
    </div>
  )
}

export default SingleContactSocial