
  // // document.addEventListener("DOMContentLoaded", function() {
  // //   class Hero {
  // //   constructor(name) {
  // //   this.name = name;
  // //   this.health = 100;
  // //   }
  // //   }
    
  // //   class Villain {
  // //   constructor(name) {
  // //   this.name = name;
  // //   this.health = 100;
  // //   }
  // //   }
    
  // //   const hero = new Hero("Multiplication Mastermind");
  // //   const villain = new Villain("The Calculator");
    
  // //   function setup() {
  // //   const startButton = document.getElementById("start-button");
  // //   startButton.addEventListener("click", function() {
  // //   const instructions = document.getElementById("instructions");
  // //   instructions.classList.remove("hidden");
  // //   const form = document.getElementsByTagName("form")[0];
  // //   form.classList.remove("hidden")
  // //   const question = document.getElementById("question");
  // //   question.classList.remove("hidden");
  
  // //   const answer = document.getElementById("answer");
  // //   answer.classList.remove("hidden");
  
  // //   const submitButton = document.getElementById("submit-button");
  // //   submitButton.addEventListener("click", checkAnswer);
  // //   submitButton.classList.remove("hidden");
  
  // //   const result = document.getElementById("result");
  // //   result.classList.remove("hidden");
  
  // //   const heroBar = document.getElementById("hero-bar");
  // //   heroBar.classList.remove("hidden");
  
  // //   const villainBar = document.getElementById("villain-bar");
  // //   villainBar.classList.remove("hidden");
  
  // //   startButton.style.display = "none";
  // //   setTimeout(instructionsCheck, 5000);
  // // });
  // // }
  
  // // function instructionsCheck() {
  // // const userResponse = prompt("Have you read the instructions? Type 'yes' to continue.");
  // // if (userResponse === "yes") {
  // //    playGame()
  // // } else {
  // //   playGame()
  // // }
  // // }
  
  // // setup();
  // // });
  
  // // const playGame = () => {
  // //   const num1 = Math.floor(Math.random() * 12) + 1;
  // //   const num2 =Math.floor(Math.random() * 12) + 1;
  // //   document.getElementById("question").innerHTML = `${num1} x ${num2}`;
  // // }
  
  // // const checkAnswer = (e) => {
  // //   e.preventDefault();
  // //   const answer = document.getElementById("answer").value;
  // //   const question = document.getElementById("question").innerHTML;
  // //   const response = question.split(" x ")[0] * question.split(" x ")[1];
  // //   if (answer == response) {
  // //   document.getElementById("result").innerHTML = "Correct!";
  // //   decreaseVillainBar();
  // //   } else {
  // //   document.getElementById("result").innerHTML = "Try again.";
  // //   } decreaseHeroBar()
  // //   document.getElementById("answer").value = "";
  // //   playGame();
  // //   }

   
  // //   const decreaseHeroBar = () => {
  // //     hero.health *= 0.9;
  // //     document.getElementById("hero-bar").style.width = `${hero.health}%`;
  // //   }
    
  // //   const decreaseVillainBar = () => {
  // //     villain.health *= 0.9;
  // //     document.getElementById("villain-bar").style.width = `${villain.health}%`;
  // //   }

  
  

  // document.addEventListener("DOMContentLoaded", function() {
  //   class Hero {
  //     constructor(name) {
  //       this.name = name;
  //       this.health = 100;
  //     }
  //   }
    
  //   class Villain {
  //     constructor(name) {
  //       this.name = name;
  //       this.health = 100;
  //     }
  //   }
    
  //   const hero = new Hero("Multiplication Mastermind");
  //   const villain = new Villain("The Calculator");
    
  //   function setup() {
  //     const startButton = document.getElementById("start-button");
  //     startButton.addEventListener("click", function() {
  //       const instructions = document.getElementById("instructions");
  //       instructions.classList.remove("hidden");
  //       const form = document.getElementsByTagName("form")[0];
  //       form.classList.remove("hidden");
  //       const question = document.getElementById("question");
  //       question.classList.remove("hidden");
      
  //       const answer = document.getElementById("answer");
  //       answer.classList.remove("hidden");
      
  //       const submitButton = document.getElementById("submit-button");
  //       submitButton.addEventListener("click", checkAnswer);
  //       submitButton.classList.remove("hidden");
      
  //       const result = document.getElementById("result");
  //       result.classList.remove("hidden");
      
  //       const heroBar = document.getElementById("hero-bar");
  //       heroBar.classList.remove("hidden");
      
  //       const villainBar = document.getElementById("villain-bar");
  //       villainBar.classList.remove("hidden");
      
  //       startButton.style.display = "none";
  //       setTimeout(instructionsCheck, 5000);
  //     });
  //   }
    
  //   function instructionsCheck() {
  //     const userResponse = prompt("Have you read the instructions? Type 'yes' to continue.");
  //     if (userResponse === "yes") {
  //       playGame();
  //     } else {
  //       playGame();
  //     }
  //   }
    
  //   setup();
  // });
  
  // const playGame = () => {
  //   const num1 = Math.floor(Math.random() * 12) + 1;
  //   const num2 =Math.floor(Math.random() * 12) + 1;
  //   document.getElementById("question").innerHTML = `${num1} x ${num2}`;
  // };
  
  // const checkAnswer = (e) => {
  //   e.preventDefault();
  //   const answer = document.getElementById("answer").value;
  //   const question = document.getElementById("question").innerHTML;
  //   const response = question.split(" x ")[0] * question.split(" x ")[1];
  //   if (answer == response) {
  //     document.getElementById("result").innerHTML = "Correct!";
  //     decreaseVillainBar();
  //   } else {
  //     document.getElementById("result").innerHTML = "Try again.";
  //   } 
  //   decreaseHeroBar();
  //   document.getElementById("answer").value = "";
  //   playGame();
  // };
  
  // const decreaseHeroBar = () => {
  //     hero.health *= 0.9;
  //     document.getElementById("hero-bar").style.width = `${hero.health}%`;
  //   }
    
  //   const decreaseVillainBar = () => {
  //     villain.health *= 0.9;
  //     document.getElementById("villain-bar").style.width = `${villain.health}%`;
  //   }


  //   document.addEventListener("DOMContentLoaded", function() {
  //     class Hero {
  //     constructor(name) {
  //     this.name = name;
  //     this.health = 100;
  //     }
  //     }
      
  //     class Villain {
  //       constructor(name) {
  //         this.name = name;
  //         this.health = 100;
  //       }
  //     }
      
  //     const hero = new Hero("Multiplication Mastermind");
  //     const villain = new Villain("The Calculator");
      
  //     function setup() {
  //       const startButton = document.getElementById("start-button");
  //       startButton.addEventListener("click", function() {
  //         const instructions = document.getElementById("instructions");
  //         instructions.classList.remove("hidden");
  //         const form = document.getElementsByTagName("form")[0];
  //         form.classList.remove("hidden")
  //         const question = document.getElementById("question");
  //         question.classList.remove("hidden");
      
  //         const answer = document.getElementById("answer");
  //         answer.classList.remove("hidden");
      
  //         const submitButton = document.getElementById("submit-button");
  //         submitButton.addEventListener("click", checkAnswer);
  //         submitButton.classList.remove("hidden");
      
  //         const result = document.getElementById("result");
  //         result.classList.remove("hidden");
      
  //         const heroBar = document.getElementById("hero-bar");
  //         heroBar.classList.remove("hidden");
      
  //         const villainBar = document.getElementById("villain-bar");
  //         villainBar.classList.remove("hidden");
      
  //         startButton.style.display = "none";
  //         setTimeout(instructionsCheck, 5000);
  //       });
  //     }
      
  //     function instructionsCheck() {
  //       const userResponse = prompt("Have you read the instructions? Type 'yes' to continue.");
  //       if (userResponse === "yes") {
  //         playGame()
  //       } else {
  //         playGame()
  //       }
  //     }
      
  //     setup();
  //   });

  //   const playGame = () => {
  //   const num1 = Math.floor(Math.random() * 12) + 1;
  //   const num2 =Math.floor(Math.random() * 12) + 1;
  //   document.getElementById("question").innerHTML = `${num1} x ${num2}`
  //   }
    
    
  //   const checkAnswer = (e) => {
  //   e.preventDefault();
  //   const answer = document.getElementById("answer").value;
  //   const question = document.getElementById("question").innerHTML;
  //   const response = question.split(" x ")[0] * question.split(" x ")[1];
  //   if (answer == response) {
  //   document.getElementById("result").innerHTML = "Correct!";
  //   decreaseVillainBar();
  //   } else {
  //   document.getElementById("result").innerHTML = "Try again.";
  //   }
  //   decreaseHeroBar()
  //   document.getElementById("answer").value = "";
  // }      

  // const decreaseHeroBar = () => {
  //     hero.health *= 0.9;
  //     document.getElementById("hero-bar").style.width = `${hero.health}%`;
  //   }
    
  //   const decreaseVillainBar = () => {
  //     villain.health *= 0.9;
  //     document.getElementById("villain-bar").style.width = `${villain.health}%`;
  //   }
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
      const startButton = document.getElementById("start-button");
      startButton.addEventListener("click", function() {
        const instructions = document.getElementById("instructions");
        instructions.classList.remove("hidden");
        const form = document.getElementsByTagName("form")[0];
        form.classList.remove("hidden")
        const question = document.getElementById("question");
        question.classList.remove("hidden");
  
        const answer = document.getElementById("answer");
        answer.classList.remove("hidden");
  
        const submitButton = document.getElementById("submit-button");
        submitButton.addEventListener("click", checkAnswer);
        submitButton.classList.remove("hidden");
  
        const result = document.getElementById("result");
        result.classList.remove("hidden");
  
        const heroBar = document.getElementById("hero-bar");
        heroBar.classList.remove("hidden");
        document.getElementById("hero-level").style.width = "100%";
  
        const villainBar = document.getElementById("villain-bar");
        villainBar.classList.remove("hidden");
        document.getElementById("villain-level").style.width = "100%";
  
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
    document.getElementById("question").innerHTML = `${num1} x ${num2}`
  }
  
  
  const checkAnswer = (e) => {
    e.preventDefault();
    const answer = document.getElementById("answer").value;
    const question = document.getElementById("question").innerHTML;
    const response = question.split(" x ")[0] * question.split(" x ")[1];
    if (answer == response) {
      document.getElementById("result").innerHTML = "Correct!";
      decreaseVillainBar();
      playGame();
    } else {
      document.getElementById("result").innerHTML = "Try again.";
    decreaseHeroBar();
    }
    document.getElementById("answer").value = "";
  }



  const decreaseHeroBar = () => {
    hero.health -= 10;
    if (hero.health < 0) {
      hero.health = 0;
    }
    document.getElementById("hero-level").style.width = `${hero.health}%`;
  }
const decreaseVillainBar = () => {
    villain.health -= 10;
    if (villain.health < 0) {
      villain.health = 0;
    }
    document.getElementById("villain-level").style.width = `${villain.health}%`;
};