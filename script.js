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
    // Applique un effet glitch sur toute la page
    document.body.classList.add('glitch');

    // Recharge la page après 2 secondes pour laisser le temps à l'animation glitch de se produire
    setTimeout(() => {
      window.location.reload();
    }, 2000); // Attente de 2 secondes avant de recharger la page
  }
}
