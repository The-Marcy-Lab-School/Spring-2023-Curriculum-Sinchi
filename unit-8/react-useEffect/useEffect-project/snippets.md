# 9.0.2 - useEffect and fetching

Clone down the [blank vite repo](https://github.com/The-Marcy-Lab-School/9-0-0-resource_blank-vite-repo) so you can do the checks.

# Part 1: Side Effects

What is a side effect? 

An external change outside of a function. In React that's *usually* going to fit the description of fetching from an external API. The source of the data is not literally your React project.

The way we manage these sorts of things is with things like form submissions, but also `useState` and `useEffect`. Unlike forms that are triggered by user actions, `useEffect` is another hook that **watches** a component, and **every time that component renders, it will fire off a side effect for us**.

Here is the code to start:

```js
import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('');
  const [num, setNum] = useState(1);

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
   </main>
  )
}

export default App
```

We're putting in some nothing state here to demonstrate rendering differences.


# Part 2: Syntax and default trigger
Paste in this `useEffect`:

```js
// import it
import { useState, useEffect } from 'react'


useEffect(() => {
  console.log('Rendered');
});
```
We know that for the hook `useState` the argument is a value that sets the initial value. 

What do you think the argument for `useEffect` is? 

If you said a callback, you would be correct. 


The callback function doesn't need a return value, and in most cases *should not* as the return value handles unmounting logic like closing websocket connection or destroying manual listeners.

This is something that you do not need to worry about this right now. You should instead focus on what triggers this callback.

The most confusing part about `useEffect` is *when* it gets called. The reason why it is confusing is because it will always depend!

As the code is written right now, *any* time a component is rerendered, the effect will be triggered. This can be seen in the console, every time a component is rerendered, the word "Rendered" appears. This is literally never what you want and honestly, weird default. But that's life!

# Part 3: Running once
What we want is instead for the `useEffect` to only run once which is when the components are *first* rendered. In order for that to happen, you need to add the dependency array:

```js
useEffect(() => {
  console.log('Rendered');
}, []);
```
Is the empty array an argument for `useEffect` or the callback?

This array watches for any values that change, and only when those values change will the effect callback fire. 

So when we have an empty array like now we are basically asking it to watch *nothing*. Because of this, it will run the effect during the first render then never again. 

You can see this by typing into the inputs, the "Rendered" message will only appear once.

Reiterate: an **empty dependency** array means **nothing is watched** and the **effect is only run on the *first* render**

# Part 3: Running on change
WHat if we want changes only when values change? 

We would add the state values and notice that now Rendered only appears when we make a change on this input.
The way this works is JavaScript is  essentially using `prevState === currentState` to check values, which means any non primitive values will trigger *every* render because objects don't equal themselves. There are ways to get around this, but honestly the easiest is to just check the object properties themselves.

Reiterate: if you add a value to the dependency array, the effect callback will fire.

Time: 5min<br />
Total: 20min

# Part 4: Running an actual effect
To keep things simple, let's log out the one liner below to prove that we're firing at all. Check the console logs.

```js
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()).then(console.log)
  }, []);
```

We can see that this logs but why are we not using async/await?

Because of the way React handles its magic **the useEffect callback can't be async**. React is expecting *nothing* or a new unmounting function as the return value. A promise breaks that. So let's just define a helper function:

```js
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
    console.log(apiUsers)
  }
```

And this *would* be fine except for one problem: the dependency array. See, any time you reference an external variable in `useEffect`'s callback, the Linter is going to yell at you about a *missing* dependency. You can't just rock a closure anymore, you have to track all changes. This is to avoid *really* frustrating bugs. The simple answer is just define the helper *in* the `useEffect`.

```js
  useEffect(() => {
    const getUsers = async () => {
      const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
      console.log(apiUsers)
    }

    getUsers();
  }, []);
```

# Part 5: Setting state in an effect
It's React, so we don't just want to console log things, we want to store data in state. So let's do that! Modify the function to save the users as a piece of state.

```js
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
      setUsers(apiUsers)
    }

    getUsers();
  }, []);



  console.log('users:', users);
```

What do you notice in the logs. The key is the users starts '[]', THAT'S IMPORTANT. The order of events:
- React mounts the component
- All the state initial values are set
- React renders the component
- this first triggers our useEffect
- When our API responds our `setUsers` is fired which means state changes and a re-render is triggered

All that is to say: always take into account the default value of any state that's coming from an API response. Common patterns are to use safe dummy data (like an empty array or object) or `null` and then cancel rendering from it.

Does `setUsers` need to be included in the dependency array?

The answer is no! That's a special React function, so React knows that it's stable across renders and does not need to be tracked. Our custom functions are not so lucky, so they're different.

> WARNING: whenever you set state, watch out that you don't create an endless loop! Every time you add state to your dependency array, make sure that updating it won't in turn trigger another update

# Part 6: Rendering an array
So now that we finally have our state, lets not waste any more time on logging, let's render an array! Luckily that is *super* easy to do in react:

```js
<ul>
  {
    users.map(({id, name}) => {
      return <li key={id}>{name}</li>
    })
  }
</ul>
```

JSX can handle nodes or *arrays* of nodes. That means we can use maps  and have the return value be JSX tags. Remember though, the return value must be a *single* JSX tag, so either a parent or a </> fragment.

Note: Remember that { } in JSX can only store *expressions* not statements, that's why ternarys work but if statements don't.

## Keys
The only other notable thing is that "key" property. That is exposing a little of the under-the-hood React magic. As we know React's virtual DOM will compare nodes before taking time to re-render. But arrays are always different and never equal to each other, right? That's true, so by default React will completely blow away and remake the entire array on every re-render. But what if your array of values just reordered? No new info? Well, that would be much easier to just scoot around instead of rebuilding. So the way React tracks this is by assigning an unchanging key to the values in an array so it can keep track of each item. Use the `id` of an object or some other unique value.

As a fallback, you *can* use the item's index, but this can lead to weird bugs and no performance gains, so try to avoid it whenever possible.

# Part 7: api with dependency array
It's not uncommon that you'll make an api request on page load but use some dynamic variable in the URL. Later this week we'll learn about routing and it's a common use case to make fetches depending on what page you are. So let's practice that! 

```js

import { useState, useEffect } from 'react'

function UserCard({ userId }) {
  return <div></div>
}

function App() {
  const [text, setText] = useState('');
  const [num, setNum] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
      setUsers(apiUsers)
    }

    getUsers();
  }, []);

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

    <UserCard />

    <ul>
      {
        users.map(({id, name}) => {
          return <li key={id}>{name}</li>
        })
      }
    </ul>
   </main>
  )
}

export default App
```

Work to pass in the `userId` (just use the number input, viable options 1 - 10) to the child component and then a dependency array to make the fetch. Also, use the `null` pattern to see how it works. You can pick any simple properties to render, it doesn't matter.


```js
import { useState, useEffect } from 'react'

function UserCard({ userId }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      const apiUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(r => r.json())

      setUser(apiUser)
    }

    getUser();
  }, [userId]);

  if (!user) return null;

  const {name, website } = user;
  return <div>
    <h2>{name}</h2>
    <p>Site: {website}</p>
  </div>
}

function App() {
  const [text, setText] = useState('');
  const [num, setNum] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const apiUsers = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
      setUsers(apiUsers)
    }

    getUsers();
  }, []);



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

    <UserCard userId={num} />

    <ul>
      {
        users.map(({id, name}) => {
          return <li key={id}>{name}</li>
        })
      }
    </ul>
   </main>
  )
}

export default App

```

In this case we set the number input to be 1, but you can talk about obviously having more robust API handlers (like a 404) to handle a null user. The main idea here

