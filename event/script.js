const scriptURL = "https://script.google.com/macros/s/AKfycbyy2xI1NCmqPp9sFkSl4sa44WTbuuj47mK0NOtY-fgCQFwOJkBs5pQXisUH7oPlqN2m4A/exec"
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()


fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(function(){
    return goHome();
})


.catch(error => console.error('Error!', error.message))
})



function goHome()
{

  alert("Thank you for registering");
  document.location.href = "https://www.aitecell.in/";

}