import React from 'react'
import Navcontainer from './Navcontainer'
import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { IoEllipseSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className=' absolute top-[50px] w-full'>
      <Navcontainer className="flex justify-between">
        <Link href='/'>
          <Image src={logo} alt={logo} />
        </Link>
        <ul className='flex items-center gap-[30px] '>
          <li className='flex items-center gap-[30px] '>
            <Link className='text-[var(--textcolor)]' href='/'>Features</Link>
            <IoEllipseSharp className='text-[var(--textcolor)] w-1 h-1' />
          </li>
          <li className='flex items-center gap-[30px]'>
            <Link className='text-[var(--textcolor)]' href='/'>Download app</Link>
            <IoEllipseSharp className='text-[var(--textcolor)] w-1 h-1' />
          </li>
          <li className='flex items-center gap-[30px]'>
            <Link className='text-[var(--textcolor)]' href='/'>UI screens</Link>
            <IoEllipseSharp className='text-[var(--textcolor)] w-1 h-1' />
          </li>
          <li className='flex items-center gap-[30px]'>
            <Link className='text-[var(--textcolor)]' href='/'>Testimonials</Link>
            <IoEllipseSharp className='text-[var(--textcolor)] w-1 h-1' />
          </li>
          <li className='flex items-center gap-[30px]'>
            <Link className='text-[var(--textcolor)]' href='/'>FAQ</Link>
            <IoEllipseSharp className='text-[var(--textcolor)] w-1 h-1'/>
            </li>
            <button className='py-1 px-5 border border-[var(--bcolor)] rounded-full text-[var(--bcolor)]'>Free trial</button>
            </ul>
        <div>
          <Link className='text-[var(--textcolor)]' href='/'>+1 742 65 84 122</Link>
        </div>
      </Navcontainer>
    </div>
  )
}

export default Navbar
