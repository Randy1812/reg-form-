document.querySelector("#lname").addEventListener("change", function() {
  const lnm = new RegExp("^(\.[A-Z])*$");
  let lnmval = document.querySelector("#lname").value
  console.log(lnm.test(lnmval))
});

document.querySelector("#dob").addEventListener('change', function() {
    let em = document.querySelector("#dob").value.split("-");
    let year = Number(em[0]);
    let month = Number(em[0]);
    let day = Number(em[0]);
    let today = new Date();
    let age = today.getFullYear() - year;
    if(today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    document.querySelector("#age").value = age;
});

document.querySelector("#eml").addEventListener("change", function() {
  const re = new RegExp("[a-zA-Z0-9]@gmail.com")
  const email = document.getElementById("eml")
  const emailerr = document.querySelector("#emlerr");
  if(!re.test(email.value)) {
    emailerr.innerHTML = "The email must be a gmail address.";
    email.focus();
  } else {
    emailerr.classList.add("hidden");
    emailerr.innerHTML = "";
  }
});

document.querySelector("#mob").addEventListener("change", function() {
  const mob = document.querySelector("#mob");
  const moberr = document.querySelector("#moberr");
  if(mob.value.length !== 10) {
    moberr.innerHTML = "The mobile number must be 10 digits.";
    mob.focus();
  } else {
    moberr.classList.add("hidden");
    moberr.innerHTML = "";
  }
});


const submitbtn = document.getElementById("submit");

const Validate = (e) => {
  e.preventDefault();
  const fname = document.querySelector("#fname");
  const lname = document.querySelector("#lname");
  const dob = document.querySelector("#dob");
  const mob = document.querySelector("#mob");
  const email = document.querySelector("#eml");
  const typ = document.querySelector("#ins-type");
  const amt = document.querySelector("#amt");
  const yrs = document.querySelector("#yrs");
  const bnfc = document.querySelector("#bnfc");


  const fnamerr = document.querySelector("#fnamerr");
  const lnamerr = document.querySelector("#lnamerr");
  const doberr = document.querySelector("#doberr");
  const moberr = document.querySelector("#moberr");
  const emailerr = document.querySelector("#emlerr");
  const amterr = document.querySelector("#amterr");
  const yrerr = document.querySelector("#yrerr");
  const bnfcerr = document.querySelector("#bnfcerr");

  if(bnfc.value === "") {
    bnfcerr.innerHTML = "The Beneficiarie's Name must be provided.";
    bnfc.focus();
  } else {
    bnfcerr.classList.add("hidden");
    bnfcerr.innerHTML = "";
  } if(yrs.value === "") {
    yrerr.innerHTML = "The number of years must be provided.";
    yrs.focus();
  } else if(yrs.value < 5) {
    yrerr.innerHTML = "The minimum number of years is 5.";
    yrs.focus();
  } else {
    yrterr.classList.add("hidden");
    yrterr.innerHTML = "";
  }
  if(amt.value === "") {
    amterr.innerHTML = "The amount must be provided.";
    amt.focus();
  } else if(amt.value < 5000) {
    amterr.innerHTML = "The minimum amount is $5000.";
    amt.focus();
  } else {
    amterr.classList.add("hidden");
    amterr.innerHTML = "";
  }
  if(typ.value === "none") {
    typerr.innerHTML = "You must select the type of insurance.";
    typ.focus();
  } else {
    typerr.classList.add("hidden");
    typerr.innerHTML = "";
  }
  if(mob.value === "") {
    moberr.innerHTML = "The mobile numbermust be provided.";
    mob.focus();
  } else {
    moberr.classList.add("hidden");
    moberr.innerHTML = "";
  }if(email.value === "") {
    emailerr.innerHTML = "The email address cannot be empty.";
    email.focus();
  } else {
    emailerr.classList.add("hidden");
    emailerr.innerHTML = "";
  }
  if(dob.value === "") {
    doberr.innerHTML = "Date of Birth must be set.";
    dob.focus();
  } else {
    doberr.classList.add("hidden");
    doberr.innerHTML = "";
  }
  if(lname.value === "") {
    lnamerr.innerHTML = "Last Name cannot be empty.";
    lname.focus();
  } else {
    lnamerr.classList.add("hidden");
    lnamerr.innerHTML = "";
  }
  if(fname.value === "") {
    fnamerr.innerHTML = "First Name cannot be empty.";
    fname.focus();
  } else {
    fnamerr.classList.add("hidden");
    fnamerr.innerHTML = "";
  }

};

submitbtn.addEventListener("click", Validate);
