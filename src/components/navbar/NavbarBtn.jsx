import React from 'react'
import {Link} from "react-scroll";
import { FiArrowDownRight } from "react-icons/fi";

export const NavbarBtn = () => {
  return (
    <div className='cursor-pointer px-4 py-2 rounded-full text-s font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-color1 to-color2 hover:border-secondColor hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
      <Link
        to='contact'
      >
        HIRE ME
      </Link>
      <div className='sm:hidden md:block'>
        <FiArrowDownRight />
      </div>
    </div>
  )
}
