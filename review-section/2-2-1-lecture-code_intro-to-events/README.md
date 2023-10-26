# 2.2.1 Lecture Code - Intro To Events

This lecture is all about raw events, don't worry about forms and their events, that's tomorrow's lecture!

# Part 0: Paradigm Shift To Asynchronous Programming

This is their first step into “asynchronous” code and so it’ll be a paradigm shift. Programs so far have been linear: line 4 evaluates before line 5, but event’s break that. You have *no* idea when code will be run because it’s up to the user to trigger it

“Event Driven Architecture” means your system is built around handling events.
- Current paradigm: We have a while loop that reruns and waits for a user to give their answer. Once they do, the program continues moving.
- Event Driven Programs: We present numerous options to our user all at once. They can trigger whatever, whenever.

Time: 5min<br/>
Total: 5min

-----

# Part 1: Event Objects and Event Listeners
Now, to begin le'ts explain the syntax of an event listener
- called on element
- takes an event type
- takes a callback

Explain the event object here by using a simple click handler. Really just that `event.target` is the element that the event fired upon, but you can also show the full event object too to see that the types change when you add a `mouseover` and `keydown` listener. Just add the keydown listener to the body, it's fine.

Show you can add more than one listener to an element (though likely never will). This is more to protect yourself from someone else using the element as well.

time: 10min<br/>
Total: 15min

-----

# Part 2: "on" handlers
There's another way to handle events, with the "on" handlers (handlers vs listeners)

- show it in html
- Explain that generally in “Vanilla” js we tend not to use embedded handlers as they can only handle 1 event, are weird with modules, and can get messy without a framework doing some things like cleaning up behind the scenes
- Know what they are because you *will* use them with React later!

time: 3min<br/>
total: 18min

------

# Part 3: Event Propagation
"Event Propagation" is just a fancy way of saying “clicking on a child element affects the parents” The question is what is the *order* it affects them in?
- bubbling - default - means the child reacts **first** then the parent
- capturing - rare - means the child reacts last.

Don’t really dwell on **capturing**, it’s just good that they’re aware events propagate. That when you click on a nested element, a) you can always see your actual target and b) other elements can be made aware of this.

Use the `inner, middle, outer` section of the code to demonstrate this. I left the log template in because that's all a pain to type live in lecture.

The key concept that we're looking to understand is that child events can affect parent elements. This is crucial to make delegation work.

Time: 10min<br/>
Total: 28min

-----
# Part 4: Event Delegation
Event delegation is the idea that you can have a single event listener on a parent element that can handle events for all of its children. This is useful for child elements that are added/removed dynamically. Like when a user adds a new item to a list

Basically you put a listener on a parent element, like a div, and then have it listen for events and filter based on what you want to do. It's so much cleaner to use delegation in vanilla that adding individual listeners to each element.

Prove this by showing that we can handle the button clicks with one listener on the parent div. The filtering allows us to check that it was a button that was clicked, and not just the regular div.

Show them the `.matches` method, which takes a css selector, and the `classList.contains` method, which takes a class name. Both are useful for filtering!

Time: 12min<br/>
Total: 40min

-----
# Part 5: Removing Event Listeners
One of the reasons why passing a named callback function to your listeners is better is because you can then remove them if you need to. We remove event listeners to limit user interactions and also be 100% sure that we aren't committing memory leaks when we remove elements. (However, modern browsers are pretty good at cleaning up after us). You can practice this removal by adding a listener to the `removeDelegationButton` that removes the delegation listener from the div.

Show them that you're adding a listener to one item to remove a listener from another!



Time: 5min<br/>
Total: 45min

-----
# Part 6: Practice
This lecture is intentionally a little light on time because ideally you'll be able to review what you just did and play around a bit with the class. You can also use this time to answer any questions they have by adding more listeners together.
