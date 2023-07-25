const eventHandler = (event) => {
    console.log(event);
    console.log(event.target);
}

const clickButton = document.querySelector("#click-button");
clickButton.addEventListener("click", eventHandler);

const mouseDiv = document.querySelector("#mouse-div");
mouseDiv.addEventListener("mousemove", eventHandler);

document.addEventListener("keydown", eventHandler);


// Event Propagation
const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");

const testPropagation = (event) => {
    console.log(`${event.currentTarget.id} - Where event is`);
    console.log(`${event.target.id} - what was clicked`);
}

// Bubbling: default, and what you want 99% of the time
// outer.addEventListener("click", testPropagation);
// middle.addEventListener("click", testPropagation);
// inner.addEventListener("click", testPropagation);

// Capturing Phase: rarer but an option
// make sure that all of them are true, otherwise order gets weird
outer.addEventListener("click", testPropagation, true);
middle.addEventListener("click", testPropagation, true);
inner.addEventListener("click", testPropagation, true);


// Event Delegation
const handleDelegation = (event) => {
    if (event.target.matches("button")) console.log(event.target);
    if (event.target.classList.contains('main')) console.log('MAIN');
}
const container = document.querySelector("#delegation");
container.addEventListener("click", handleDelegation)


// Remove event listener
const removeDelegation = () => {
    container.removeEventListener("click", handleDelegation);
    console.log('Removed!');
}

const removeDelegationButton = document.querySelector("#remove");
removeDelegationButton.addEventListener('click', removeDelegation);