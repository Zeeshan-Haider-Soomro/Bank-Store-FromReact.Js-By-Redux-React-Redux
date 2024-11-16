import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex bg-black text-white gap-10 p-5'>
        <ul>
            <NavLink to='/'>
            <li>Check Balance</li>
            </NavLink>
        </ul>
        <ul>
        <NavLink to='/deposit'>
            <li>Deposit Amount</li>
        </NavLink>
        </ul>
        <ul>
        <NavLink to='/widraw'>
            <li>Widraw Amount</li>
        </NavLink>
        </ul>
    </div>
  )
}

export default Header