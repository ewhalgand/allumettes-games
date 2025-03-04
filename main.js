const multiplayerGames = () => {
  const multiPlayer = prompt("Nombre de joueur ?");

  return multiPlayer > 0 ? multiPlayer : 1;
};

const numberMatchToRemove = (numberToRemove) => {
    const players = multiplayerGames();
    let currentPlayer = 1;

  while (numberToRemove > 0) {
    const player = Number(prompt(`Joueur ${currentPlayer} : Combien d'alumette soutez fou retirer ? (1 - 6)`))

    if (player > 6 || player < 1 || isNaN(player)) {
      alert("Le nomber n'est pas compris entre 1 - 6");
      continue;
    }

    numberToRemove -= player

    if (numberToRemove <= 0) {
      alert(`Joueur ${currentPlayer} a gagné !`);
      return;
    }

    currentPlayer = (currentPlayer % players) + 1;
  }
};
numberMatchToRemove(50);
