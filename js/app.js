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
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", function() {
    const instructions = document.getElementById("instructions");
    instructions.classList.remove("hidden");
    const form = document.querySelector("form");
    form.classList.remove("hidden");
    const question = document.getElementById("question");
    question.classList.remove("hidden");

    const backgroundImage = document.getElementById("background-image");
    backgroundImage.classList.remove("hidden");

    const answer = document.getElementById("answer");
    answer.classList.remove("hidden");

    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", checkAnswer);
    submitButton.classList.remove("hidden");

    const result = document.getElementById("result");
    result.classList.remove("hidden");

    const timer = document.getElementById("timer")
    result.classList.remove("hidden")

    const heroBar = document.getElementById("hero-bar");
    heroBar.classList.remove("hidden");
    document.getElementById("hero-level").style.width = "100%";

    const villainBar = document.getElementById("villain-bar");
    villainBar.classList.remove("hidden");
    document.getElementById("villain-level").style.width = "100%";

    timer.addEventListener("click", ()=> {
      timer.style.visibility=visibile
    })

    startButton.style.display = "none";
    setTimeout(instructionsCheck, 5000);

  });
});
const hideHeaders = () => {
  const headers = document.querySelectorAll("h1, h2, h3");
  headers.forEach(header => {
    header.classList.add("hidden");
  });
};
function setUp() {
  const images = document.querySelectorAll(".image-container img");
  images.forEach(img => {
    img.style.width = "75px";
    img.style.height = "auto";
   
  });
}

function setUpHeroImage() { 
    const heroImage = document.querySelector("#hero-image");
    heroImage.style.width = "75px";
    heroImage.style.height = "auto";
    heroImage.style.marginLeft = "1200px"
  }



  document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", function() {
    hideHeaders()
    setUp();
    setUpHeroImage()

    });
    });


const instructionsCheck = () => {
  const userResponse = prompt("Have you read the How-To-Play? Type 'yes' to continue.");
  if (userResponse === "yes") {
    playGame();
  } else {
    playGame();
  }
};

  const playGame = () => {
    const num1 = Math.floor(Math.random() * 12) + 1;
    const num2 = Math.floor(Math.random() * 12) + 1;
    document.getElementById("question").innerHTML = `${num1} x ${num2}`;
    startTimer(num1 * num2)
  };
    
    function showElement() {
      document.getElementById("background-image").style.display = "";
    }

  
  const checkWin = () => {
    if (hero.health <= 0) {
      alert("Villain wins! Try again.");
      endGame();
    } else if (villain.health === 0) {
      document.getElementById("final-image").style.display = "block";
      alert("Hero wins! Congratulations.");
      endGame();
    }
  };
      
  
  
  const decreaseHeroBar = () => {
    hero.health -= 10;
    if (hero.health < 0) {
      hero.health = 0;
    }
    document.getElementById("hero-level").style.width = `${hero.health}%`;
    if (hero.health === 0) {
      setTimeout(() => {
        checkWin();
      }, 1000);
    }
  };
  const decreaseVillainBar = () => {
    villain.health -= 10;
    if (villain.health < 0) {
      villain.health = 0;
    }
    document.getElementById("villain-level").style.width = `${villain.health}%`;
    if (villain.health === 0) {
      setTimeout(() => {
        checkWin();
      }, 1000);
    }
  }
  
 
  const checkAnswer = (e) => {
    e.preventDefault();
    const answer = document.getElementById("answer").value;
    const question = document.getElementById("question").innerHTML;
    const response = question.split(" x ")[0] * question.split(" x ")[1];
    if (answer == response) {
      document.getElementById("result").innerHTML = "Correct!";
      decreaseVillainBar();
      clearInterval(countdown);
      playGame();
    } else {
      document.getElementById("result").innerHTML = "Try again.";
      decreaseHeroBar();
    }
    document.getElementById("answer").value = "";
    
  };

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

  const endGame = () => {
    hero.health = 100;
    villain.health = 100;
    setTimeout(() => {
      location.reload();
    }, 3000);
  };