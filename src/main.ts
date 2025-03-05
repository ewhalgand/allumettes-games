const numberValue = document.querySelector("#number-value") as HTMLInputElement;
const numberChoiceValue = document.querySelector("#number-choice-value") as HTMLInputElement;

const numberMatches = document.querySelector("#number-matches") as HTMLParagraphElement;
const allPlayers = document.querySelector("#player") as HTMLParagraphElement;

const form = document.querySelector("#form") as HTMLFormElement;
const formMulti = document.querySelector("#form-multi") as HTMLFormElement;
const error = document.querySelector("#error") as HTMLParagraphElement;

const setPlayer = document.querySelector("#set-player") as HTMLDivElement;
const games = document.querySelector("#games") as HTMLDivElement;

const buttonSubmit = (document.querySelector("#post") as HTMLButtonElement);
const buttonRetry = (document.querySelector("#retry") as HTMLButtonElement)

let multiGame: number;

formMulti.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiPlayer = Number(numberChoiceValue.value);

  multiGame = multiPlayer > 0 ? multiPlayer : 1;
  
  numberMatchToRemove(10);
});

const changeDisplay = () => {
  if (!multiGame) {
    games.style.display = "none";
  } else {
    games.style.display = "block";
    setPlayer.style.display = "none";
    buttonRetry.style.display = "none";
  }
};
changeDisplay();

const numberMatchToRemove = (numberToRemove: number) => {
  const players = multiGame;
  let currentPlayer = 1;
  changeDisplay();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let playerValue = Number(numberValue.value);

    if (playerValue > 6 || playerValue < 1 || isNaN(playerValue)) {
      error.style.display = "block"
      numberValue.classList.add("active")
      error.textContent = "Le nomber n'est pas compris entre 1 - 6";
      return;
    }

    numberMatches.textContent = `Nombre d'Allumettes restants ${(numberToRemove -= playerValue)}`;
    numberValue.value = "";
    error.style.display = "none"
    numberValue.classList.remove("active")

    if (numberToRemove <= 0) {
      numberMatches.textContent = `Joueur ${currentPlayer} a gagné !`;
      buttonRetry.style.display = "block";
      buttonRetry.addEventListener("click", () => location.reload())
      buttonSubmit.style.display = "none"
      numberValue.disabled = true
      return;
    }

    currentPlayer = (currentPlayer % players) + 1;
    allPlayers.textContent = `Joueur ${currentPlayer} :`;
  });
};
