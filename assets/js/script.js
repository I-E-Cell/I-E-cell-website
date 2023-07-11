const firebaseConfig = {
    apiKey: "AIzaSyCRas8qn7DJ8Z1TE5UG-cmjdPgP0gc_3vQ",
    authDomain: "contactform-a4571.firebaseapp.com",
    databaseURL: "https://contactform-a4571-default-rtdb.firebaseio.com",
    projectId: "contactform-a4571",
    storageBucket: "contactform-a4571.appspot.com",
    messagingSenderId: "189771707679",
    appId: "1:189771707679:web:da93c8ae4a73c4259cec2a"
  };


function validate(form) {

   


    if(!valid) {
        alert('Please correct the errors in the form!');
        return false;
    }
    else {
        return confirm('Do you really want to submit the form?');
    }
} 
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactformDB = firebase.database().ref("contactform");

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var Leader = getElementVal("Leader");
  var Teamname = getElementVal("Teamname");
  var Leadermail = getElementVal("Leadermail");
  var Member1 = getElementVal("Member1");
  var Member1mail = getElementVal("Member1mail");
  var Member2 = getElementVal("Member2");
  var Member2mail = getElementVal("Member2mail");
  var Teambrand = getElementVal("Teambrand");
  var GOOGLEDRIVE = getElementVal("GOOGLEDRIVE");
  

  saveMessages(Leader , Teamname , Leadermail , Member1 , Member1mail ,Member2 , Member2mail , Teambrand , GOOGLEDRIVE);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}



const saveMessages = (Leader , Teamname , Leadermail , Member1 , Member1mail ,Member2 , Member2mail , Teambrand , GOOGLEDRIVE ) => {
  var newContactform = contactformDB.push();

  newContactform.set({
 Leader : Leader ,
  Teamname : Teamname ,
  Leadermail : Leadermail,
  Member1 : Member1,
  Member1mail : Member1mail,
  Member2 : Member2,
  Member2mail :  Member2mail,
  Teambrand : Teambrand,
  GOOGLEDRIVE : GOOGLEDRIVE,
  });
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
  };