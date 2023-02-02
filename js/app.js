class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Villain {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

const hero = new Hero("Multiplication Mastermind");
const villain = new Villain("The Calculator");


document.addEventListener("DOMContentLoaded", function() {
  function setup() {
    const startButton = document.querySelector("#start-button");
    startButton.addEventListener("click", function() {
      const instructions = document.querySelector("#instructions");
      instructions.classList.remove("hidden");
      const form = document.querySelector("form");
      form.classList.remove("hidden")
      const question = document.querySelector("#question");
      question.classList.remove("hidden");

      const answer = document.querySelector("#answer");
      answer.classList.remove("hidden");

      const submitButton = document.querySelector("#submit-button");
      submitButton.addEventListener("click", checkAnswer);
      submitButton.classList.remove("hidden");

      const result = document.querySelector("#result");
      result.classList.remove("hidden");

      const hero = document.querySelector("#hero");
      hero.classList.remove("hidden");
      
      const villain = document.querySelector("#villain");
      villain.classList.remove("hidden");

      const heroBar = document.querySelector("#hero-bar");
      heroBar.classList.remove("hidden");
      document.querySelector("#hero-level").style.width = "100%";

      const villainBar = document.querySelector("#villain-bar");
      villainBar.classList.remove("hidden");
      document.querySelector("#villain-level").style.width = "100%";

      startButton.style.display = "none";
      setTimeout(instructionsCheck, 5000);
    });
  }

  function instructionsCheck() {
    const userResponse = prompt("Have you read the instructions? Type 'yes' to continue.");
    if (userResponse === "yes") {
      playGame()
    } else {
      playGame()
    }
  }

  setup();
});

const playGame = () => {
  const num1 = Math.floor(Math.random() * 12) + 1;
  const num2 = Math.floor(Math.random() * 12) + 1;
  document.querySelector("#question").innerHTML = `${num1} x ${num2}`
  startTimer(num1 * num2);
};


const decreaseHeroBar = () => {
  hero.health -= 10;
  if (hero.health < 0) {
    hero.health = 0;
  }
  document.querySelector("#hero-level").style.width = `${hero.health}%`;
};

const decreaseVillainBar = () => {
  villain.health -= 10;
  if (villain.health < 0) {
    villain.health = 0;
  }
  document.querySelector("#villain-level").style.width = `${villain.health}%`;
};

  const checkAnswer = (e) => {
    e.preventDefault();
    const answer = document.getElementById("answer").value;
    const question = document.getElementById("question").innerHTML;
    const response = question.split(" x ")[0] * question.split(" x ")[1];
    if (answer == response) {
      document.getElementById("result").innerHTML = "Correct!";
      decreaseVillainBar();
      clearInterval(countdown)
      playGame();
    } else {
      document.getElementById("result").innerHTML = "Try again.";
      decreaseHeroBar();
    }
    document.getElementById("answer").value = "";
  }


  let countdown; 

  const startTimer = (response) => {
    let timer = 16;
    countdown = setInterval(() => {
    timer--;
    document.getElementById("timer").innerHTML = timer;
    if (timer <= 0) {
    clearInterval(countdown);
    decreaseHeroBar();
    document.getElementById("result").innerHTML = `The correct answer was ${response}.`;
    setTimeout(() => {
    playGame();
    }, 2000);
    }
    }, 1000);
    };
