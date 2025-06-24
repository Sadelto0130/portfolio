import React from 'react'
import ContactForm from './ContactForm'

const ContactLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
        <p className='text-white'>
          If you’re interested in discussing a potential collaboration or project 
          <br/> 
          please don’t hesitate to get in touch.
        </p>
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactLeft