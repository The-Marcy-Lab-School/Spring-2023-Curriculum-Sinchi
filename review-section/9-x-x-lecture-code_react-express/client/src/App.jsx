import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    fetch('/api/todos')
      .then(r => r.json())
      .then((todos) => {
        console.log(todos)
      })
  }, []);

  return (
    <div className="App">
      <h1>App hello again!!!!!</h1>
    </div>
  )
}
