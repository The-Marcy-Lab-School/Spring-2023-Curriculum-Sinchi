const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  // For super simple forms, you can also just grab it by input name on the form:
  const { currentMood, color } = form
  console.log('color:', color.value, currentMood.value);

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  // checkboxes have to be dealt with separately
  // they don't exist on the entries when not checked, they're a string 'on' if so
  formObj.isHungry = formObj.isHungry === 'on';
  // console.log(form['isHungry'].checked) // if you grab the checkbox name individually, it's "checked"
  console.log(formObj);

  form.reset();
}

const newWayForm = document.querySelector('#new-way');
// newWayForm.addEventListener('submit', handleSubmit);


// show that we can grab inputs whenever they change, not just submissions
const handleInput = (e) => {
  console.log('new value:', e.target.value);
};

// most inputs are simple!
const moodTextInput = document.querySelector('#current-mood');
moodTextInput.addEventListener('input', handleInput);

 // If using a fieldset, attach it there, not the inputs
const fieldset = document.querySelector('fieldset');
fieldset.addEventListener('input', handleInput);

// here's an example of an event fired by a button that does not trigger a submission
const capitalizeMood = (e) => {
  console.log('e.target:', e.target);
  const form = document.querySelector('#new-way');
  // can also use query selector, but if we used checkboxes or radio elements is easier
  form.elements.currentMood.value = form.elements.currentMood.value.toUpperCase();
};

const somethingButton = document.querySelector('#something');

somethingButton.addEventListener('click', capitalizeMood);
