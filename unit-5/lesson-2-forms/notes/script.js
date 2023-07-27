const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
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
newWayForm.addEventListener('submit', handleSubmit);


// we can grab inputs by the value
const handleInput = (e) => {
    console.log('new value:', e.target.value);
};
const moodTextInput = document.querySelector('#current-mood');
const fieldset = document.querySelector('fieldset'); // attach to the fieldset, not the inputs
fieldset.addEventListener('input', handleInput);

// here's an example of an event fired by a button that does not trigger a submission
const capitalizeMood = () => {
    const moodEl = document.querySelector('#current-mood');
    moodEl.value = moodEl.value.toUpperCase();
};

const somethingButton = document.querySelector('#something');

moodTextInput.addEventListener('input', handleInput);
somethingButton.addEventListener('click', capitalizeMood);