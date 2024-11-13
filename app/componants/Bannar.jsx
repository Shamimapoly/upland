import React from 'react'
import bannar from '../../public/bannar.png'
import Image from 'next/image'
const Bannar = () => {
  return (
    <div className=''>
     <h1>example</h1>
      <Image className='w-full h-[873px] bg-cover bg-bottom' src={bannar} alt={bannar}/>
    </div>
  )
}

export default Bannar



// -left-[139px] good fff