import React, { useState } from 'react'

const navbar = (props) => {
  
  return (
    <>
    <div className="flex justify-between  bg-[#202020] ">
      <h1 className="text-2xl px-20 py-5 text-white" >MovieSpace</h1>
      <div className="px-20">
      <input type="text"  placeholder="Search example = marvel" value={props.value} onChange={(event)=> props.setSearch(event.target.value)}  className="text-lg p-1 mx-10 my-5 bg-white   "/>
      </div>
    </div>
    
    </>
  )
}

export default navbar
