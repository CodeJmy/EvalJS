// Fonction générer un password aléatoire composer au minimum de 2 majuscules, 2 chiffres et 3 caractères spéciaux

function generatePassword() {
  let password = '';
  let uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let specialCharacters = '!@#$%^&*()-_=+[{]}\\|;:\'",.<>/?';

  // Génération des caractères spéciaux
  for (let i = 0; i < 3; i++) {
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
  }

  // Génération des chiffres
  for (let i = 0; i < 2; i++) {
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  // Génération des majuscules
  for (let i = 0; i < 2; i++) {
    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  }

  // Génération des minuscules
  for (let i = 0; i < 2; i++) {
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  }

  // Génération des caractères aléatoires restants
  let remainingLength = 10 - password.length;
  for (let i = 0; i < remainingLength; i++) {
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
  }
  // Mélange du password
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
}

// Utilisation de la fonction

let generatedPassword = generatePassword();
console.log(generatedPassword);

//Fonction dans l'input password

function generatePasswordButton() {
  let passwordInput = document.getElementById('password');
  passwordInput.value = generatePassword();
}

// Ajout de l'événement au bouton

let generateButton = document.getElementById('genererPassword');
generateButton.addEventListener('click', generatePasswordButton);

// Fonction pour voir le mot de passe 

function showPassword() {
  let passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}


// Ajout de l'événement au bouton

let showPasswordButton = document.getElementsByName('voirPassword');

showPasswordButton.forEach(button => {
  button.addEventListener('click', showPassword);
});

// Fonction pour repeter le mot de passe

function repeatPassword() {
  let passwordInput = document.getElementById('password');
  let repeatPasswordInput = document.getElementById('password2');

  if (passwordInput.value === repeatPasswordInput.value) {
    repeatPasswordInput.setCustomValidity('');
  } else {
    repeatPasswordInput.setCustomValidity('Les mots de passe ne correspondent pas !');
  }
};

// Fonction pour vérifier les champs Email et mot de passe remplies

function validateForm() {
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');
  let repeatPasswordInput = document.getElementsByName('password2');
  
  if (emailInput.validity.valid && passwordInput.validity.valid && repeatPasswordInput[0].validity.valid) {
    alert('Formulaire validé!');
    return true;
  } else {
    alert('Veuillez remplir tous les champs correctement!');
    return false;
  }
};

// Sélectionne une couleur via le champ 
dédié afficher cette couleur dans la div et fixer la dimension a 
100px par 100px

function selectColor() {
  let colorInput = document.getElementById('couleur');
  let colorDiv = document.getElementsByClassName('apercu_couleur');

  colorDiv.style.backgroundColor = colorInput.value;
  colorDiv.style.width = '100px';
  colorDiv.style.height = '100px';
};

// Ajout de l'événement au champ

let colorInput = document.getElementById('couleur');
colorInput.addEventListener('change', selectColor);

// Traiter l’envoi du formulaire en AJAX avec Jquery

function sendForm() {
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');

  $.ajax({
    url: 'formulaire.php',
    type: 'POST',
    data: { email: emailInput.value, password: passwordInput.value },
    success: function(response) {
      console.log('Inscription OK ' + response)
    },
    error: function(error) {
      console.log('Error :'+ error);
    },
  })
};

function connect() {
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');

  let user = new User(emailInput.value, passwordInput.value);

  $.ajax({
    url: 'connection.php',
    type: 'POST',
    data: user,
    success: function(response) {
      console.log('Connexion OK'+ response)
    },
    error: function(error) {
      console.log('Error :'+ error);
    },
  })
};

// - Créer une fonction constructeur User pour la création d'un nouvel utilisateur

function User(email, password) {
  this.email = email;
  this.password = password;
}
