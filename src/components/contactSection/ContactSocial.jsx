import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link="https://github.com/Sadelto0130" Icon={LuGithub}/>
      <SingleContactSocial link="https://www.linkedin.com/in/victor-salazar-del-toro-764b33102/" Icon={FaLinkedinIn}/>
    </div>
  )
}

export default ContactSocial