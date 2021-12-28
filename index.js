var copyText = document.getElementById("passwd-field");
var copyBtn = document.getElementById("copy-btn");

/**
 * Desactive le bouton Copy si le champ est vide. L'active s'il n'est pas vide.
 */
function inputIsFile() {
  if (copyText.value.length > 0) {
    copyBtn.disabled = false;
  } else {
    copyBtn.disabled = true;
  }
}

/**
 * Copie le mot de passe dans le presse papier et change l'aspect du bouton Copy.
 */
function copyToClipboard() {
  copyBtn.classList.remove("btn-secondary");
  copyBtn.classList.add("btn-success");
  copyBtn.innerHTML = "Password copied!";

  copyText.select();
  /* For mobile devices */
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}
