import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  // let obj={
  //   username:"Nisarg",
  //   age: 19
  // }

  // let arr=[1,2,3,4]

  return (
    <>
      <h1 className="bg-green-300 text-yellow-500 p-3 rounded-full mb-4">tailwind test</h1>
      {/* <Card channel="chaiorcode" object={arr}/> */}
      <Card userName="Nisarg" btnText="Explore Nisarg"/>
      <Card userName="Manthan"/>

    </>
  )
}

export default App
