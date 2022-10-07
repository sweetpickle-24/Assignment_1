/*
Assignment1 contacts.js
Author: Vladyslav Byelozerskykh	
ID: 301182353 
Date: 06/10/2022
 */
  
function checkForm(form)
{



if( document.myForm.fname.value == "" ) {
  alert( "Please enter your First Name!" );
  document.myForm.fname.focus() ;
  return false;
}

if( document.myForm.address.value == "" ) {
alert( "Please enter your Address!" );
document.myForm.address.focus() ;
return false;
}

if( document.myForm.email.value == "" ) {
alert( "Please enter your email!" );
document.myForm.email.focus() ;
return false;
}

if( document.myForm.message.value == "" ) {
    alert( "Please enter your Message!" );
    document.myForm.message.focus() ;
    return false;
    }




  if(form.age.value < 17) {
    alert("Error: Your age has to be at least 18!");
    form.age.focus();
    return false;
  }

  re = /[.]/;
  if(!re.test(form.email.value)) {
    alert("Error: Your email has to contain a dot!");
    form.email.focus();
    return false;
  }

  re = /[@]/;
  if(!re.test(form.email.value)) {
    alert("Error: Your email has to contain a @!");
    form.email.focus();
    return false;
  }
  alert("Thanks for sending a message!");
  return true;
}