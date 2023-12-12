import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = (e) => {
    if(e.target.dataset.action === "increment"){
      setCount((prevCount) => prevCount + 1);
    } else if(e.target.dataset.action === "decrement"){
      setCount((prevCount) => prevCount - 1);
    }
  }

  // const handleUncontrolledSubmit = (e) => {
  //   e.preventDefault(); 

  //   const formObj = Object.fromEntries(new FormData(e.target));
  //   console.log(formObj);

  //   e.target.reset();
  // }
  const handleControlledSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName('');
  }

  const handleChange = (e) => {
   setName(prev => prev = e.target.value)
   console.log(name);
  }

  return (
   <main>
    <p>CurrCount: {count}</p>
    <button data-action="increment" onClick={handleClick}> Increment</button>
    <button data-action="decrement" onClick={handleClick}> Decrement </button>
    <br />
    <form onSubmit={handleControlledSubmit}>
      <label htmlFor="name"></label>
      <input id='name' value={name} onChange={handleChange}/>
      <button>Submit</button>
    </form>
   </main>
  )
}

export default App
