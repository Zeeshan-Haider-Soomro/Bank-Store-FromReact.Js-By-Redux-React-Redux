import { useState } from "react"
import Header from "../header/Header"
import { useDispatch, useSelector } from "react-redux"

const Widraw = () => {
    const dispatch = useDispatch()
    const [value,setValue] = useState(0)
  return (
<>
<Header/>
<div className="flex flex-col justify-center items-center gap-5 h-[100vh] text-5xl">
        <input className="border-2" onChange={(e)=>setValue(e.target.value)} type="number" />
        <button onClick={()=>dispatch({type:'widraw',payload:Number(value)})} className=" bg-green-700 text-white p-3 rounded-lg hover:bg-black hover:text-white">Widraw Amount</button>
    </div>
</>
  )
}

export default Widraw