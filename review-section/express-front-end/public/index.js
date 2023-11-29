const todoForm = document.querySelector("#todoForm");
console.log("hello")

fetch('/api/todos')
  .then(res => res.json())
  .then(data => console.log(data));


const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
  const formData = new FormData(e.target)
  const obj = Object.fromEntries(formData)
  fetch('/api/todos',{
    method : "POST", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(obj)
  })
  .then(res => res.json())
  .then(data => console.log(data))
} 

todoForm.addEventListener('submit', handleSubmit)



