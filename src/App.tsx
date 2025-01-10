// import React from 'react';
// import { Button } from "@/components/ui/button"

import { ZonePoster } from "@/components/children/ZonePoster"
import { Panel } from "@/components/children/Panel"


import './App.css'

function App() {
  

  return (
    <div className="flex">
      <div className="">
        <ZonePoster></ZonePoster>
      

      </div>
      
      <div className="">
        <Panel></Panel>
      </div>
     
    </div>
  )
}

export default App
