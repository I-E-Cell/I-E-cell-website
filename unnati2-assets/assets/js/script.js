const scriptURL = "https://script.google.com/macros/s/AKfycbzZFLGDYODWAQfyh9bMyKWUQUHUtD6eMsh90O3Na7fEiWgvgV0MjxO5jlbc2BujR9Mz/exec"
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()


fetch(scriptURL, { method: 'POST', body: new FormData(event)})
.then(function(){
    return goHome();
})


.catch(error => console.error('Error!', error.message))
})



function goHome()
{

  alert("Thank you for registering in Unnati 2.0");
  document.location.href = "unnati2.html";

}