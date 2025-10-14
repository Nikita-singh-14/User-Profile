import React from 'react'

const Button = ({children}) => {
  return (
    <button
    className='bg-blue-300 hover:bg-blue-500 pt-1 pb-1 pr-5 pl-5 rounded md:rounded-lg w-full cursor-pointer'
    type='submit'>
      {children}
    </button>
  )
}

export default Button;