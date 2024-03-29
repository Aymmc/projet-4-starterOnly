function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelector('.close');
const modalbody = document.querySelector('.modal-body');
const submit = document.querySelector('#submit')
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener('click', closemodal);
submit.addEventListener('click', launchModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal 
function closemodal() {
  modalbg.style.display = "none";
}// formulaire 
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}




// function isValide(value){
// if (value === true ){
//   document.getElementById("errorMsg").style.display = "block"
// } else {
//   document.getElementById("errorMsg").style.display = "none";
// }
// }
// }

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Récupérer les valeurs des champs de formulaire
  const firstValue = document.getElementById("first").value.trim();
  const lastValue = document.getElementById("last").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const birthdateValue = document.getElementById('birthdate').value.trim();
  const quantityValue = parseInt(document.getElementById("quantity").value.trim(), 10);

  // Verifier pour le prenom
  if (firstValue.length < 2) {
    event.preventDefault();
    document.getElementById("errorMsg").style.display = "block";
  } else {
    document.getElementById("errorMsg").style.display = "none";
  }

  // Verifier pour le nom
  if (lastValue.length < 2) {
    event.preventDefault();
    document.getElementById("errorMsg2").style.display = "block";
  } else {
    document.getElementById("errorMsg2").style.display = "none";
  }

  // Verifier pour l'e-mail
  if (!isValidEmail(emailValue)) {
    event.preventDefault();
    document.getElementById("errorMsg5").style.display = "block";
  } else {
    document.getElementById("errorMsg5").style.display = "none";
  }
  // Verifier pour la quantite
  if (isNaN(quantityValue)) {
    event.preventDefault();
    document.getElementById("errorMsg4").style.display = "block";
  } else {
    document.getElementById("errorMsg4").style.display = "none";
  }
  // Verifier pour l'anniversaire 
  if (!birthdateValue) {
    event.preventDefault();
    document.getElementById("errorMsg3").style.display = "block";
  } else {
    document.getElementById("errorMsg3").style.display = "none";
  }
  // Verifier pour les cases à cocher

  let valeurs = [];
  for (let i = 1; i <= 6; i++) {
    valeurs.push(document.getElementById(`location${i}`).checked);
  }
  let isAnyLocationChecked = valeurs.includes(true);
  if (isAnyLocationChecked) {
    event.preventDefault();
    document.getElementById("errorMsg6").style.display = "none";
  } else {
    document.getElementById("errorMsg6").style.display = "block";
  }




  // Verifier pour les conditions d'utilisations 
  let isCheckboxChecked = document.getElementById("checkbox1").checked;
  if (isCheckboxChecked) {
    document.getElementById("errorMsg7").style.display = "none";
  } else {
    document.getElementById("errorMsg7").style.display = "block";
  }
  // Verifier pour le message de validation
  if (firstValue && lastValue && emailValue && !isNaN(quantityValue)
   && birthdateValue && isCheckboxChecked && isAnyLocationChecked) {
    document.getElementById("Validation").style.display = "block";
    console.log("Affichage de errorMsg8");
  } else {
    console.log("Affichage de errorMsg8block");
    document.getElementById("Validation").style.display = "none";
  }

});
