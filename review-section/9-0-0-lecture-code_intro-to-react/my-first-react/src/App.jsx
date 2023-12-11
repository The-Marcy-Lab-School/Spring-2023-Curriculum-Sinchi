import { useState } from 'react'

import Clicker from "./components/Clicker";
import Alerter from './components/Alerter';

export default function App() {
  const [count, setCount] = useState(3);

  const handleClick = () => {
    setCount(count + 3)
  }

  return (
    <main>
      <Clicker count={count} handleClick={handleClick} />
      <Alerter msg={count} />
    </main>
  )
}
