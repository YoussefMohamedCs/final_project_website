import React from 'react'

export default function UserComponent({UserText}) {
  return (
    <div className='userComponent d-flex justify-content-end'>
      <div className='userMessage'>
{UserText}
      </div>
    </div>
  )
}
