import { useState, useEffect } from 'react'
import { Link, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import NavBar from './Components/Nav';

// Here is the React Router V5 syntax main points
// You are more than welcome to try V6, it's just a little tougher for benefits we don't really care about
const users = [
  { id: 1, name: 'Zo', bio: 'One cool dude' },
  { id: 2, name: "Maya", bio: 'Our co-founder' },
  { id: 3, name: "Itzel", bio: 'Truly awesome' },
];

function HomePage({ exampleParam }) {
  return <div>
    <h1>Home!</h1>
    <p>Example Param: {exampleParam}</p>
  </div>
}

function UsersPage() {
  return <div>
    <h1>This is the Users page </h1>
    <ul>
      {
        users.map(({id, name, bio}) => <li key={id}>
          <Link to={`/users/${id}`}>{name}</Link>
          <p>{bio}</p>
        </li>)
      }
    </ul>
  </div>
}

function UserPage() {
  const [user,setUser] = useState({});

  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    //find user
    const apiUser = users.find(({id}) => id === Number(userId));

    apiUser ? setUser(apiUser) : navigate('/users')

  },[userId,navigate])
  
  return <div>
    <h1>User: {userId}</h1>
    <h2>{user.name}</h2>
    <p>{user.bio}</p>
  </div>
}

function App() {
  return <>
    <NavBar/>
    <main>
       <Routes>
       <Route path="*" element={<div><h1>Not Found!</h1></div>} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/" element={<HomePage exampleParam={"this is an example"}/>} />
       </Routes>
    </main>
  </>
}

export default App;