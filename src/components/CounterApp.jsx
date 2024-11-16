import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AnotherCounter from './AnotherCounter'

const CounterApp = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state)
    console.log(data);
    
  return (
    <div className='bg-slate-500'>
        <div className='flex justify-center items-center h-[100vh]'>
            <button onClick={()=>dispatch({type:'inc'})} className='border-2 border-[black] bg-slate-300 m-3 w-[100px]'>+</button>
            <span>{data.count}</span>
            <button onClick={()=>dispatch({type:'dec'})} className='border-2 border-[black] bg-slate-300 m-3 w-[100px]'>-</button>
            <AnotherCounter/>
        </div>
    </div>
  )
}

export default CounterApp