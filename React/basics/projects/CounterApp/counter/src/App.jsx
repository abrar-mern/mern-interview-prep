import React, {useState} from "react";

export const App = () => {
  const [count, SetCount] = useState(0);
  function incrementHandler(){
    SetCount((prevState) => prevState + 1)
  }
   function decrementHandler(){
    SetCount((prevState) => prevState - 1)
  }
  function resetHandler(){
    SetCount(0)
  }
  if(count < 0){
     SetCount(0)
  }
 
  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#344152] items-center justify-center flex-col gap-10">
     
        <h2 className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</h2>
    
      <div className="flex items-center gap-x-6 bg-white/10 px-6 py-4 rounded-xl text-3xl font-semibold mt-8">
        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-800 rounded-lg transition-all text-white"
        onClick={decrementHandler}>
          -
        </button>
        <div id="counter" className="w-12 text-center text-white font-mono">
          {count}
        </div>
        <button 
        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-800 rounded-lg transition-all text-white"
        onClick={incrementHandler}>
          +
        </button>
        
      </div>
      <div className="text-center">
         <p style={{ color: "white", fontWeight: "bold" }}>
          {count == 0 && "Warning: Be alert further more number cannot be decrease please choose positive number!"}
        </p>
      </div>
     
      <div>
  <button 
  onClick={resetHandler}
  className="bg-[#0398d4] text-white px-6 py-2 rounded-md font-medium hover:bg-[#0284b5] active:scale-95 transition-all">
    Reset
  </button>
</div>
    </div>
  )
}