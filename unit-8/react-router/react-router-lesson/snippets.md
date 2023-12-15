# 9.0.2 - React Router

This lecture is all about front end routing! And for *now* we're still using the old V5 syntax, as it's just a little easier to wrap your head around. Also, the whole thing is pretty evenly spaced, we're just building slowly up to the [general routing project resource here](https://github.com/The-Marcy-Lab-School/9-0-3-resource_react-router-starter). It's ok to build in one file for now.

# Part 1: What is Client Side Routing?
What is routing? 

Routing is the process of changing the UI and URL based on a click. When a user clicks on a link the page gets redirected and the URL should change. 
A benefit of Client Side Routing in react is being able to do this functionality without having to make a request to a server.

# Part 2: Setup and starting code
Install the `react-router-dom` package as a dependency. Then make sure to update your `main.jsx` to have the `BrowserRouter` provider component. By doing this, you are allowing the your app access to all the routing abilities we need.


```js
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```

Now hop back over to your main `app.jsx` file. This is what you should start with

```js
import { useState, useEffect } from 'react'
import { Link, Routes, Route, useParams, useNavigate } from 'react-router-dom'

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
    <h1>Users</h1>
  </div>
}

function UserPage() {
  return <div>
    <h1>A User</h1>
  </div>
}

function App() {
  return <>
    <nav></nav>
    <main>
    </main>
  </>
}

export default App;
```

We have some dummy users, some starter components and a main `App` component. You can ignore the imports at the top for now, that's just convenience.

# Part 3: Routes
The main part of React Router is of course the routes! Adding them is very simple. Essentially we have our main `Routes` component. Its children are individual pages that someone will hit if they enter the specified url. Paste in this basic example:

```js
function App() {
  return <>
    <main>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  </>
}
```

Then, to prove that our components are rendering on those paths, manually enter the url `/users` and `/` in the browser. These are just regular components! If you wanted, you could even pass in props!

```js
<Route path="/" element={<HomePage exampleParam="Look at me!" />} />
```

You won't typically pass in params here just by the nature of the way our apps will structured, but it can be handy.

The other thing to add is that catchall route. What if a user tries to go to a url that doesn't exist? We can add a catchall route that will render if none of the other routes match. Paste in this example:

```js
<Route path="*" element={<div><h1>Not Found!</h1></div>} />
```

Mention that this asterisk is the same kind of wildcard logic they've seen elsewhere.

# Part 3: The nav
Next we'll work on not having to manually enter the url by using a `nav` with `Link` components. We don't want to use an `a` anchor tag because that's a *real* link. That will actually reload our entire page trying to get to a new page. That's never what we want (unless you want to link to an external site), so instead React Router has a Link tag that operates almost exactly the same way. Paste in this `nav` example.

```js
<nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/users">Users</Link></li>
  </ul>
</nav>
<main>
  <Routes>
    <Route path="/users" element={<UsersPage />} />
    <Route path="/" element={<HomePage exampleParam="Look at me!" />} />
    <Route path="*" element={<div><h1>Not Found!</h1></div>} />
  </Routes>
</main>
```

Let's take a second to break down the `Link` component. You'll notice that the biggest difference is `to` instead of `href`.

The other thing to point out is that our `nav` does not go into our routes. 

What do we accomplish by having our nav where we have it? 

This means our `nav` will now appear as is on every single one of our routes. Routes are like mini-screens that show things depending on the URL, but we can put things around it that are constant. (This by the way is also why we have a react fragment instead of making `main` our parent. The header, primary navigation, and footer should not go in `main`).

# Part 4: Dynamic Routing
Dynamic routing is just as necessary, if not more on the frontend than the backend. Luckily, react router uses the exact same conventions as express. Let's use the `User` dummy component to first show how it works in the browser by manually updating the url. Paste in this example:

```js
<Route path="/users/:userId" element={<UserPage />} />
```

This will render the User vs Users page by adding and removing the id. But of course, just like `req.params`, we need to be able to access that id in our component. 

We have a hook for this! Use the `useParams` hook to get access to the params in the url and then just add it somewhere in the body.

```js
function UserPage() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  return <div>
    <h1>User: {userId}</h1>
  </div>
}
```

Let's use this to actually select a user when the component first renders! In real life this would be an API call, but here we're just using our little array. Since the user is important and can change, of course we're setting it to state too!

```js
function UserPage() {
  const [user, setUser] = useState({});
  const { userId } = useParams(); // useParams gives you access to the params in the URL

  useEffect(() => {
    const apiUser = users.find(({id}) => id === Number(userId));
    setUser(apiUser)
  }, [userId]);

  const { name, bio } = user;

  return <div>
    <h1>{name}</h1>
    <p>{bio}</p>
  </div>
}
```

Be sure to point out that we're adding `userId` to the dependency array. This is important. Because every time we go to a different user's page, we need this component page to rerender. That is what the dependency array is for: it watches specific pieces of state to know when to rerender.

# Part 5: Redirects
Finally, let's add a redirect. This is a little more complicated, but it's a good example of how we can use the `useNavigate` hook to programmatically redirect a user to a new route. 

Essentially we already know `Link` so that the *user* can navigate where they want, but what about when we want to programmatically redirect our users? Like for instance, the `NotFound` page handles some things, but what if they have a valid route `/users/:userId` but the `userId` doesn't exist? That's not a routing error that's a logical error.

We want to redirect them to the `/users` page. Paste in this example:

```js
function UserPage() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUser = users.find(({id}) => id === Number(userId));
    apiUser ? setUser(apiUser) : navigate('/users')
  }, [userId, navigate]);

  const { name, bio } = user;

  return <div>
    <h1>{name}</h1>
    <p>{bio}</p>
  </div>
}
```

Now we're *either* setting the user, or bouncing them back to the `/users` page. This is a great example of how we can use the `useNavigate` hook to programmatically redirect our users. (heads up, useNavigate is for V5 like we're using, the V6 syntax is `redirect`).

# Part 6: Setting up the Users page to link
Now that we know all the pieces of routing, let's set up the `UsersPage` to actually link to the individual users. Ordinarily, to even *get* the list of users we would need a useEffect and API call, but for now lets just read the dummy data directly. Work as a class to arrive at this code, don't forget the keys! 

Hint: Use mapping and the `Link`

```js
function UsersPage() {
  return <div>
    <h1>Users</h1>
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
```

# Part 7: Organization
Now we did everything in one file here, but ordinarily your app would be broken up! There are so many ways to do this, but a common and easy start is this structure:

```plaintext
/app
  /components
    Nav.jsx
    UserCard.jsx
  /pages
    HomePage.jsx
    NotFoundPage.jsx
    UserPage.jsx
    UsersPage.jsx
  App.jsx
  index.jsx
```

Lets work to refactor what we've written here into this format. Basically if it's a top level route, it's a `Page`, and then all the broken out and shared components go into `components`. This is a great way to start, but there are many other ways to organize your app.

Note: Components are a part of a page. Whereas, Pages refer to the entire layout of a page!

Example: The homepage is an entire page but headers and navs and footers are all components of that page!

-------------------------------------------------------------------
With these four lectures you're at about 80% of the useful react code.

