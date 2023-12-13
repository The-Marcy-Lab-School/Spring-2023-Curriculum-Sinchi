import { useState, useEffect } from 'react'

function UserCard({userId}) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const getUser = async() => {
      const getApiUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(r => r.json());
    
      setUser(getApiUser);
    }

    getUser()
  }, [userId]);

  if (!user) return null;

  return <div>
    <h2>{user.name}</h2>
    <p>Site: {user.website}</p>
  </div>
}

function App() {
  const [text, setText] = useState('');
  const [num, setNum] = useState(1);
  const [users,setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
      const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
      setUsers(apiUsers);
    }

    getUsers()
  },[]);

  console.log('users:', users)
  return (
    <main>
    <input
      placeholder='TEXT'
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <input
      type='number'
      placeholder='NUM'
      value={num}
      onChange={(e) => setNum(e.target.value)}
    />
    <UserCard userId={num}/>
    <ul>
      {
        users.map(({id,name}) => {
          return <li key={id}>{name}</li>
        })
      }
    </ul>
   </main>
  )
}

export default App
