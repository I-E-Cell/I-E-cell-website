tsParticles.loadJSON("tsparticles", "json/particles.json");

const firebaseConfig = {
    apiKey: "AIzaSyCRas8qn7DJ8Z1TE5UG-cmjdPgP0gc_3vQ",
    authDomain: "contactform-a4571.firebaseapp.com",
    databaseURL: "https://contactform-a4571-default-rtdb.firebaseio.com",
    projectId: "contactform-a4571",
    storageBucket: "contactform-a4571.appspot.com",
    messagingSenderId: "189771707679",
    appId: "1:189771707679:web:da93c8ae4a73c4259cec2a"
  };

  document.getElementById("submit").addEventListener("click", myFunction);  
  function myFunction() {  
    window.location.href="https://www.aitecell.in/";  
  }
  
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactformDB = firebase.database().ref("contactform");

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var userName = getElementVal("userName");
  var whatsapp = getElementVal("whatsapp");
  var company = getElementVal("company");
  var domain = getElementVal("domain");
  var suggestion = getElementVal("suggestion");

  saveMessages(userName , whatsapp , company , domain , suggestion);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}



const saveMessages = (userName , whatsapp , company , domain , suggestion) => {
  var newContactform = contactformDB.push();

  newContactform.set({
   userName : userName,
   whatsapp : whatsapp,
   company : company,
   domain : domain ,
   suggestion : suggestion , 
  });
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

 
