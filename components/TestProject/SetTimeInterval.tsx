'use client'
import React, { useState } from 'react'

const SetTimeInterval = () => {
    const[count,setCount]=useState(0);
    // console.log("🚀 ~ file: SetTimeInterval.tsx:6 ~ count:", count);
    const clickHandler = () => {
        function myFunction(){
            setCount(count +1)

        }
        setInterval(myFunction,500);
    };

  return (
    <div>
<h2>{count} </h2>
<button type="button" onClick={clickHandler} >click me</button>
    </div>
  )
}

export default SetTimeInterval
