/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './input.scss'

export default function CustomInput() {
  return (
    <span className='custom_input_box'>
        <span className='prefix_icon'>$</span>
        <input className='custom_input' type='text' />
       
    </span>
  )
}
