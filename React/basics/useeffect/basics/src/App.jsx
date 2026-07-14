import React, { useEffect, useState } from "react";

export const App = () => {
  const [text, setText] = useState(" ");
  function clickHandler(event){
    setText(event.target.value);
    console.log(text);
  }
  // Variation 1
  // useEffect(() => {
  //   console.log('hello');
  // })


  // Variation 2
  // useEffect( () => {
  //   console.log('First Reindeer');
  // },[])


  // Variation 3
  // useEffect(() => {
  //   console.log('Text value is changed')
  // },[text])


  // Variation 4
  useEffect(() => {
    console.log('Listener added')
    return () => {
      console.log('listener removed');
    }
  })
  return (
    <div>
        <h1>
          Welcome to Codegyaani
        </h1>
        <input type="text" name="username" onChange={clickHandler} />
    </div>
  )
}