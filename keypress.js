// get the element in question
const input = document.getElementsByTagName("input")[0];

// focus on the input element
input.focus();

// add event listeners to the input element
input.addEventListener('keypress', (event) => {
  console.log("You have pressed key: ", event.key);
});

input.addEventListener('keydown', (event) => {
  console.log(`key: ${event.key} has been pressed down`);
});

input.addEventListener('keyup', (event) => {
  console.log(`key: ${event.key} has been released`);
});

// dispatch keyboard events
input.dispatchEvent(new KeyboardEvent('keypress',  {'key':'h'}));
input.dispatchEvent(new KeyboardEvent('keydown',  {'key':'e'}));
input.dispatchEvent(new KeyboardEvent('keyup', {'key':'y'}));