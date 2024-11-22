import React, { FC } from 'react'

const Button2:FC<{text:string}> = ({text}) => {
  return (
    <div className='py-2 px-4 border-4 rounded-2xl hover:bg-red-500 font-bold hover:text-white mt-6'>{text}</div>
    
  )
}

export default Button2