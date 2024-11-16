import React from 'react'
import { useSelector } from 'react-redux';

const AnotherCounter = () => {
    const data = useSelector((state)=>state)
    console.log(data);
  return (
    <div className='flex justify-center items-center h-[100vh]'>{data.count}</div>
  )
}

export default AnotherCounter