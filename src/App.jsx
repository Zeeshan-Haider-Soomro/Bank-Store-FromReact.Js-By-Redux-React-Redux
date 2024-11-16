import React from 'react'
// import CounterApp from './components/CounterApp'
import { Route, Routes } from 'react-router-dom'
import Deposit from './components/pages/Deposit'
import Widraw from './components/pages/Widraw'
import CheckBalance from './components/pages/CheckBalance'
// import AnotherCounter from './components/AnotherCounter'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<CheckBalance/>} path='/'/>
        <Route element={<Deposit/>} path='/deposit'/>
        <Route element={<Widraw/>} path='/widraw'/>
      </Routes>
    </div>
  )
}

export default App