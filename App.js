import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[color,setColor]=useState(0);
  const[error,setError]=useState(false);
  const[list,setList]=useState([]);

  function handleBtn(e){
    e.preventDefault();
   
    const colors=new Values(color).all(10);
    console.log(colors);

  }
  return <>
  <section className='container'>
    <h2>color generator project</h2>
    <form onSubmit={handleBtn}>
      <input placeholder='#f515025' type='text' value={color} onChange={(e)=>{setColor(e.target.value)}} />
      <button className='btn' type='submit'>submit</button>
    </form>
  </section>
  <section>
    <p>Colors go here</p>
  </section>
  </>
}

export default App
