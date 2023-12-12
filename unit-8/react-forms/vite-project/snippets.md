## Review State
We learned that components are the building blocks of React apps and that state is the data that a component holds. We learned that every time we change either state or props, React will re-render the component. So lets spend a little more time talking about state and how we can change it.

## Rebuild button clicker from yesterday
```jsx
function App() {
  return (
    <main>
      <button>Num Clicked: 0</button>
    </main>
  )
}
```

Which parts need to be dynamic and which do not? 

## Break it down 
useState Hook: 
- The default value of the state is what you literally pass into useState
- This useState function returns a tuple of 2 things
  - The first thing is the current value of the state
  - The second thing is a function that you can call to update the state
  - Conventions says the naming is state and setState, but it's ironclad, always do this.

> Why an array? That way we can name the variables whatever we want. In JS this is how you can return "multiple" values from a function and still let them easily be renamed. If useState returned an object, you'd have to use the same key names every time.
```js
const { state: count, setterFunction: setCount } = useState(0)
// much better
const [count, setCount] = useState(0)
```

## Let's Practice!

How can we use the function to update the state? 

We need to add an eventHandler to the element. Because we are using react we no longer need to use our old dom methods. Lets add an eventHandler to our button!

Code: 

```js
//eventHandler function to update state
const handleClick = () => {
  setCount(count + 1);
}

return (
  <main>
    // notice the inline onClick event!
    <button onClick={handleClick}> Num Clicked: {count} </button>
```

What would happen if we modify our handler function to look like this? 

```js
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

Would our new state be incremented by 3 or 1? 

Why did this happen? 
> The way React decided to update state is to try batch all the updates together. So it will only update the state once here, and notice that when we called this function count is always the same value, so it will always be +1. So it will only update the state once and it will be +1. So the answer is +1. This is never something you do intentionally like this, but the batching functionality can cause truly weird bugs in the wild. That's why, if you reference previous state, you always use the callback. That ensures the behavior you want:
```js
const handleClick = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
}
```

Why did we create a handler function rather than using an inline function? 

> We can (and you'll see) inline JSX functions all the time. But it's a good practice to name them when you can. It makes it easier to read, but is also a performance boost. Every time you rerender the component, those new anonymous functions are created, this can become costly later. If you name them, they are only created once. This is a micro-optimization, but it's a good habit to get into because it's more readable anyway.

## Now you practice

Using your blank repos take the next 10 minutes to create:

- A button that increments a counter
- A button that decrements a counter
- A p tag with the current counter

Possible Solution: 
```js
function App() {
  const [count, setCount] = useState(0)

  const handleClick = (e) => {
    setCount(prevCount => prevCount + Number(e.target.dataset.val));
  }

  return (
    <main>
      <button data-val="1" onClick={handleClick}>Increment</button>
      <button data-val="-1" onClick={handleClick}>Decrement</button>
      <p>Current Count: {count}</p>
    </main>
  )
}
```

Note: 
> Instead of using two functions, we could use data attributes to pass in data to event handlers. This will help us avoid writing two functions that do the same thing. 

## New Content: 
Spoiler Alert, everything is pretty much the same thing except with some added bonuses!

Added form to jsx: 

```js
function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount(prevCount => prevCount + Number(e.target.dataset.val));
  }

  const handleUncontrolledSubmit = e => {
    //Still preventing default behavior
    e.preventDefault()
    // Can still create an object from FormData
    const formObj = Object.fromEntries(new FormData(e.target))
    console.log(formObj)
    // Can still reset
    e.target.reset();
  }

  return (
    <main>
      <button data-val="1" onClick={handleClick}>Increment</button>
      <button data-val="-1"onClick={handleClick}>Decrement</button>
      <p>Current Count: {count}</p>

      <br/><br/><hr /><br/>
      // instead of an eventListener, we use an onSubmit event handler
      <form onSubmit={handleUncontrolledSubmit}>
        // instead of for, we are using htmlFor; still works the same way
        <label htmlFor='desc-input'>Description: </label>
        // name attributes still being used!
        <input id='desc-input' name="description" />
        <button>Submit</button>
      </form>
    </main>
  )
}
```

> The example above is called an uncontrolled form.(Default)

Here are the only 2 reasons you would use state with a form:

- somewhere else in the app besides the form itself needs instant access to the data on the form
- You need to do some validation on the form inputs as they are edited
- Otherwise, you should just use the uncontrolled form. It's just so much nicer to manage. But controlled forms are cool too! 

## Example of Controlled Form

You can have multiple `useState` hooks in a component. The rule is that **they can't be defined in or after conditionals**, and **can't be defined in loops or other hooks**. Basically, they come first in the function component to ensure that nothing gets weird. So let's add a new state for the "first name" input.

```js

// state
const [firstName, setFirstName] = useState('')

// handler
const handleControlledSubmit = e => {
  e.preventDefault()

  console.log(firstName)

  setFirstName('')
}

// jsx
<br/><br/><hr /><br/>

<form onSubmit={handleControlledSubmit}>
  <label htmlFor='first-name-input'>Name: </label>
  <input id='first-name-input' />
  <button>Submit</button>
</form>

```

We have our state created so now lets change this form so that we are controlling the inputs. In order to do this we need to set the value property of the input and because we are doing this, we no longer need the name attribute. 

```js
<input id='first-name-input' value={firstName} />
```

If we are using the value, should there be a way to write the value as well? 

Here is how you would do that: 

```js

const handleChange = e => {
  return e.target.value
}

// jsx
<input id='first-name-input' value={firstName} onChange={handleChange} />

```

Everything is working perfectly, we just need to do one last thing! 
We should be able to reset the value on submission! 

```js
const handleControlledSubmit = e => {
  e.preventDefault()

  console.log(firstName)

  setFirstName('')
}
```

WHY? Why is this way better if we are using more lines of code to accomplish it? 

The biggest reason to do this is because we can now control the input! Let's lock the first name input to only accept letters and some punctuation found in names. 

```js
const handleChange = (e) => {
  const newVal = e.target.value.match(/^[a-zA-Z'-]*$/) ? e.target.value : firstName;
  setFirstName(newVal);
}
```

No matter what you type, if it isn't accepted, the name isn't updated! The other reason to control a form is that since we have state now, we can share this instantly anywhere else in our app via props.
