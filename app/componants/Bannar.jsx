import React from 'react'
import bannar from '../../public/bannar.png'
import Image from 'next/image'
const Bannar = () => {
  return (
    <div className=''>
      a
      <Image className='w-full h-[873px] bg-cover bg-bottom' src={bannar} alt={bannar}/>
    </div>
  )
}

export default Bannar
