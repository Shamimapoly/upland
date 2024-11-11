import React, { Children } from 'react'

const Navcontainer = ({children,className}) => {
  return (
    <div className={`max-w-[1780px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Navcontainer
