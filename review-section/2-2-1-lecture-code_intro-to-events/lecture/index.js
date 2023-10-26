// Event Handling ------------------------------
const eventHandler = (event) => {
  console.log(event);
  console.log(event.target);
}

const clickButton = document.querySelector("#click-button");
clickButton.addEventListener("click", eventHandler);
clickButton.addEventListener("click", (e) => {
  console.log("I'm also firing!")
});

const mouseDiv = document.querySelector("#mouse-div");
mouseDiv.addEventListener("mousemove", eventHandler);

document.addEventListener("keydown", eventHandler);



// Event Propagation -------------------------------
const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");

const testPropagation = (event) => {
  console.log(`Where event is: #${event.currentTarget.id}, from a click on #${event.target.id}`);
}

// Bubbling: default, and what you want 99% of the time
outer.addEventListener("click", testPropagation);
middle.addEventListener("click", testPropagation);
inner.addEventListener("click", testPropagation);




// Event Delegation ---------------------------------
const handleDelegation = (event) => {
  if (event.target.matches("button")) console.log(event.target);
  if (event.target.classList.contains('main')) console.log('MAIN');
}

const container = document.querySelector("#delegation");
container.addEventListener("click", handleDelegation)


// Remove event listener --------------------------------
const removeDelegation = () => {
  container.removeEventListener("click", handleDelegation);
  console.log('Removed!');
}

const removeDelegationButton = document.querySelector("#remove");
removeDelegationButton.addEventListener('click', removeDelegation);