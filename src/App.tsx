// import React from 'react';
// import { Button } from "@/components/ui/button"

import { ZonePoster } from "@/components/children/ZonePoster"


import './App.css'

function App() {
  

  return (
    <div className="w-full flex">
      <div className="w-80 max-h-screen md:max-h-screen lg:max-h-screen xl:max-h-screen 2xl:max-h-screen md:w-full lg:w-full xl:w-full 2xl:w-full left-0 bg-blue ">
       
        <ZonePoster></ZonePoster>
      

      </div>
      
      <div className="w-20 bg-red">
       <h1 className="text-3xl font-bold underline">Panel</h1>
        
      </div>
     
    </div>
  )
}

export default App
