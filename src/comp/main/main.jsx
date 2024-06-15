/* eslint-disable no-unused-vars */
import React from 'react'
import './main.scss'
import CustomInput from '../input/input'
import Profile from '../profile_option/profile'


export default function Main() {
  return (
    <div className='main-section'>
        <h2>Sales incentive Calculator</h2>
        <div className="profile">
            <h3 className='title1'>Profile<span>*</span></h3>
            <Profile></Profile>
            {/* <div className='input_div1'><span>$</span><input className='profile_input'></input></div> */}
        </div>

        <div className="year-quarter">
        <div className="year">
            <h3>Year<span>*</span></h3>
            <input value={"2024"} className='year_input' type='text' />
        </div>
        <div className="quarter">
            <h3>Quater<span>*</span></h3>
            <input  value="Q4" className='quarter_inut' type='text' />
        </div>
        </div>


 <div className="sales_category">
 <h3>Sales<span>*</span></h3>
 <Profile></Profile>

 </div>

 <div className="footer_section">
    <div className="max_bracket">
        <h3>Max Bracket<span>*</span></h3>
        <CustomInput></CustomInput><br/>
        <CustomInput></CustomInput>
    </div>
    <div className="min_bracket">
        <h3>Min Bracket<span>*</span></h3>
        <CustomInput></CustomInput><br/>
        <CustomInput></CustomInput>
    </div>
    <div className="commission_rate">
        <h3>Commission Rate<span>*</span></h3>
        <CustomInput></CustomInput>    
         <br/>
        <CustomInput></CustomInput>
    </div>
    <div className='icons'>
   <a href='#'>< div className="icon1" >-</div></a>
    <a href='#'><div className='icon2'>+</div></a>
    </div>
 </div>

<button className='btn'>Save</button>
        
    </div>
  )
}
