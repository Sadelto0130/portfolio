import React from 'react'
import emailImg from '../../assets/contactMe.png'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img 
        src={emailImg} 
        alt="Contact Me" 
        className='max-w-[300px]'
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  )
}

export default ContactRight