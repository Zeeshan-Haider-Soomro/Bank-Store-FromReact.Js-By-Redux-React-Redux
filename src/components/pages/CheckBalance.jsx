import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../header/Header';
import Deposit from './Deposit';
import Widraw from './Widraw';

const CheckBalance = () => {
    const amount = useSelector((state)=>state?.bank.amount)
    console.log(amount);
    
  return (
   <div>
    <Header/>
    <div className="flex flex-col justify-center items-center gap-5 h-[100vh] text-5xl">
        your current balance is : {amount}/Rs
    </div>
   </div>
  )
}

export default CheckBalance