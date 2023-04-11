
function validation()
{
var fname = document.form.fname.value;
var lname = document.form.lname.value;
var email = document.form.email.value;
var address = document.form.address.value;

// for first name
if(fname.length>30)
{
alert("First name must be less than 30 characters");
document.form.fname.focus();
return false;
}

// for last name
if(lname.length>30)
{
alert("Last name must be less than 30 characters");
document.form.lname.focus();
return false;
}

// for address length

if((address.length < 10) || (address.length > 150))
{
alert(" Your Address must be 10 to 150 characters");
document.form.address.select();
return false;
}

// email

if(email.length>30)
{
alert("Email must be less than 30 characters");
document.form.email.focus();
return false;
}

}

//Recent Experiance
const messageEle = document.getElementById('recent-exp');
const counterEle = document.getElementById('counter');

messageEle.addEventListener('input', function (e) {
    const target = e.target;

    const maxLength = target.getAttribute('maxlength');

    const currentLength = target.value.length;

    counterEle.innerHTML = `${currentLength}/${maxLength}`;

     if (currentLength > 15){
  	 document.getElementById("counter").style.color="red"
     
     }else{

     document.getElementById("counter").style.color="black"
     }
   
});

//Prior Experiance


const message = document.getElementById('prior-exp');
const counter1 = document.getElementById('counter2');

message.addEventListener('input', function (f) {
    const target = f.target;

    // Get the `maxlength` attribute
    const maxLength1 = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength1 = target.value.length;

    counter1.innerHTML = `${currentLength1}/${maxLength1}`;

     if (currentLength1 > 15){
  	 document.getElementById("counter2").style.color="red"
     
     }else{

     document.getElementById("counter2").style.color="black"
     }
});


