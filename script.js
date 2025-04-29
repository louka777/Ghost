function startAdventure() {
  // Cache le bouton "Commencer"
  document.getElementById('startButton').style.display = 'none';
  // Affiche l'énigme
  document.getElementById('riddle').style.display = 'block';
}

function checkAnswer() {
  // Récupère la réponse entrée par l'utilisateur et la met en minuscule pour la comparer
  const answer = document.getElementById('answer').value.trim().toLowerCase();

  if (answer === "discutons ensemble") {
    // Affiche le lien si la réponse est correcte
    document.getElementById('message').style.display = 'block';
  } else {
    // Affiche un effet glitch et recharge la page si la réponse est incorrecte
    document.getElementById('glitch').style.display = 'block';
    setTimeout(() => {
      window.location.reload();
    }, 2000); // Recharge la page après 2 secondes de glitch
  }
}
