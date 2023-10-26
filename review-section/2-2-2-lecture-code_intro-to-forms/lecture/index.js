const handleSubmit = (e) => {

}

const newWayForm = document.querySelector('#new-way');
// newWayForm.addEventListener('submit', handleSubmit);


const handleInput = (e) => {
  // console.log('new value:', e.target.value);
};

/* most inputs are simple! */
// const moodTextInput = document.querySelector('#current-mood');
// moodTextInput.addEventListener('input', handleInput);

/* If using a fieldset, attach it there, not the inputs */
// const fieldset = document.querySelector('fieldset');
// fieldset.addEventListener('input', handleInput);

/* here's an example of an event fired by a button that does not trigger a submission */
// const capitalizeMood = (e) => {
//   console.log('e.target:', e.target);
//   const form = document.querySelector('#new-way');
//   // can also use query selector, but if we used checkboxes or radio elements is easier
//   form.elements.currentMood.value = form.elements.currentMood.value.toUpperCase();
// };

// const somethingButton = document.querySelector('#something');

// somethingButton.addEventListener('click', capitalizeMood);
