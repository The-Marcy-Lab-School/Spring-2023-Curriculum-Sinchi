# 2.2.2 Lecture - Forms

# Part 1: What is a form?
A form is a collection of labels and inputs that we can "submit" all at once in order to collect the data all at once. This is nice and convenient for us, but also html forms give us a *lot* of accessibility and features for free. Today we'll learn how to deal with forms. But first, when should we use them?

- A standalone button = isolated actions that take no real data
    - hit the button to pop open a tab with more data
- A standalone input = when the data is continuous
    - A filter input that simply runs every time you add new letters, not submit
- A link = actually moving the user to a new location
    - Loading a new page
- A form = collecting more than one input and using them at the same time
    - registering as a new user with a name, password, and user details, and submitting all that data at once

Basically, if you need to *submit* some clump of data, use a form.

Time: 5min<br/>
Total: 5min

-----------

# Part 2: Form structure

Forms are made up of a few parts:
- `<form>`: the container for the form
- `h2 (or other)`: A heading to describe your form
- `<label>`: A label for each input
- `types of inputs`: The inputs with the data
- `<button>`: A button to submit the form

In `original-way.html` you can demonstrate these simple pieces. Don't worry about aria, that's covered in the A11y lecture and on the hw.

## Labels
Labels are *crucial* for accessibility and and each one links to an input. Linking a label to an input does a lot, but most obviously is things like clicking a label will focus the input or check the checkbox.

You can also nest inputs *inside* labels (as you see here). That makes styling easier in some cases (as is the case here). OR you can use the `for` attribute, which is marginally more accessible. `for` takes the `id` (not `name`) of the input you want to associate with.

**You must have a label for every input, and each one must be associated with an input.**

## Inputs
Inputs are where the actual data comes from. The basic inputs are text or number inputs, but there are more complex types we'll go over later. Some other types of inputs (other than the literal `input` tag) are select and textarea (and technically buttons). The most important thing to remember is that each input needs a name, and that name is how we access the data later.

**Inputs must have a name attribute.**

## submit button
Clicking the submit button (or pressing enter while focused inside a form) will fire the `submit` event on the form. By default `button` elements have a `type="submit"` so you don't *need* to put it. But you can if you want! There are other types we'll discuss later.

Time: 10min<br/>
Total: 15min

-----------

# Part 3: Original Form Submissions
Originally (and still with some frameworks) form submissions actually change the page. On submission, they will navigate to a new page.
- action = new page to go to
- method = GET or POST (GET is default) to get to the new page
  - The form data becomes “query params” in the URL of the new page if you use GET

To demonstrate this difference to the students, fill out the form in `original-way.html` and then go to the new page by submitting. The point is it goes to a new page and causes a reload. Make sure they see the URL changes, as this is what they should look out for on their own projects.

This is the “default” behavior of the forms, which is not what we want as we're building single page applications that never actually route away. So let's learn how to prevent this default behavior

Time: 5min<br/>
Total: 20min

-----------

# Part 4: Preventing Default Behavior and getting data
Now go to `index.html` and `index.js`. In the `html` point out that we no longer have an action or method on the form element. Then in the `js`, show that we can attach a listener for the `submit` event, and then on the first line of our submit handler, add `e.preventDefault`. Then submit the form and show that the page does not leave or refresh. (feel free to toggle that on and off to show the difference).

So since we disabled the browser's defaults, how can we access our form data?

## form inputs by name
The quickest way is to just grab the input elements straight from the form:

```js
const { currentMood, color } = form
console.log('color:', color.value, currentMood.value);
```

That's neat and will elegantly handle different types

## FormData API
This is neat too! It's got a *lot* going on, but all we need is this little trick:

```js
const formData = new FormData(form);
const formObj = Object.fromEntries(formData);
```

That essentially turns all our inputs into an object. Neat for fetching later.

## One annoying gotcha
When using checkboxes, you would think they'd use a TRUE/FALSE setup, but nope! They use "on" and "" (empty string) OR the input just doesn't even exist. So you'll need to do a little extra work to get them to be true/false.

```js
formObj.isHungry = formObj.isHungry === 'on';
```

## Resetting
After you submit, sometimes you want to clear the form, so you can do that with `form.reset()` in the js, *or* on the form html itself, add a button with a type of reset

```html
<button type="reset">Reset</button>
```

Time: 10min<br/>
Total: 30min

-----------

# Part 5: Input types
On the `index.html` go over the basic text inputs, but then also radio groups (with fieldsets and legends), and the select. Point out when to use them:
- text input: any open ended but short data
- textarea: any open ended but long data
- number input: any number, min and max can lock you in (not featured on form, just mention)
- radio: when you want to pick one of a few options
- select: when you want to pick one of a *lot* of options

There are many more of course, but this should expose them to the basics


Time: 15min<br/>
Total: 45min

-----------

# Part 6: Non Submission events
Show them how you can use an `input` event on an input (or fieldset) to track the changes at a more minute level.

Also point out if you specify a type of `button` on a button, it will not trigger a submit automatically. This is a pretty rare occurrence, but it's good to know! The biggest gotcha here is that we do not have access to the form data in the event handler, so we'll need to grab it ourselves.

Time: 10min<br/>
Total: 55min

-----------

If there is any time left, start to build a new form from scratch, but don't stress if you're all set. the HW has them creating a form from scratch.