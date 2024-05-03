import React from 'react'

export default function HeaderModule() {
  return (
    <div>
      <p className='scroll-m-20 text-2xl font-extrabold tracking-tight transition-colors first:mt-0'>Users</p>
      <p className="leading-6 [&:not(:first-child)]:mt-1 text-gray-500">¡Here is a list of all registered Users!</p>
    </div>
  )
}