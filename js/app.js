// // Multiplication Mastermind
// // defeat your numerical nemesis

// //Needed
// //Game title
// //Intructions- preferably not alert prompt, but can be
// //
// // // sprite class if using sprites
// // //- start game
// // //- Generate multiplication problem
// // // Timer for computer
// // // check accuracy
// // //progress bars
// // // check win condition
// // // 

// // // //
// // // // Will log random two random numbers 1-12 to console, multiply them, and display answer in console
// // // const newQuestion = () => {
// // //     num1 = Math.floor(Math.random() * 12);
// // //     num2= Math.floor(Math.random() * 12);
// // //     (`${num1} x ${num2} = ${(num1) * (num2)}`)
// // // }
// // // newQuestion()
// // // console.log(num1)
// // // console.log(num2)
// // // console.log((num1) * (num2))



// // // console.log(num1)
// // // console.log(num2)
// // // console.log((num1) * (num2))
// // class Hero {
// //     constructor(name) {
// //         this.name = name;
// //         this.health = 100;
// //     }



// document.addEventListener("DOMContentLoaded", function() {
    

// class Hero {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//     }
// }

// class Villain {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//     }
// }

// const hero = new Hero("Multiplication Mastermind");
// const villain = new Villain("The Calculator");

// document.getElementById("start-button").addEventListener("click", function() {
//     document.getElementById("hero-bar").classList.remove("hidden");
//     document.getElementById("villain-bar").classList.remove("hidden");
//     document.getElementById("hero-level").innerHTML = `${hero.name}: ${hero.health}`;
//     document.getElementById("villain-level").innerHTML = `${villain.name}: ${villain.health}`;
// });

// document.getElementById("instructions-button").addEventListener("click", function() {
//     const instructions = document.getElementById("instructions");
//     if (instructions.style.display === "none") {
//         instructions.style.display = "block";
//     } else {
//         instructions.style.display = "none";
//     }
// })

// });
// // write using arrow function
// //    const newQuestion = () => {
// //      num1 = Math.floor(Math.random() * 12);
// //    num2= Math.floor(Math.random() * 12);
// //     (`${num1} x ${num2} = ${(num1) * (num2)}`) 
// //    }

// // newQuestion()
// // console.log(num1)
// // console.log(num2)
// // console.log((num1) * (num2))
// // add return

// const newQuestion = () => {
//     const num1 = Math.floor(Math.random() * 12);
//     const num2 = Math.floor(Math.random() * 12);
//     return `${num1} x ${num2}`;
// };

// const checkAnswer = () => {
//     const question = newQuestion();
//     const answer = num1 * num2;
// //     const userAnswer = parseInt(document.getElementById("answer").value);

// //     document.getElementById("question").innerHTML = question;

// //     if (userAnswer === answer) {
// //         document.getElementById("result").innerHTML = "Correct!";
// //     } else {
// //         document.getElementById("result").innerHTML = `Incorrect. The correct answer is ${answer}.`;
// //     }
// // };

// // document.getElementById("start-button").addEventListener("click", checkAnswer);
// // document.getElementById("submit-button").addEventListener("click", checkAnswer);


// document.addEventListener("DOMContentLoaded", function() {
//     class Hero {
//       constructor(name) {
//           this.name = name;
//           this.health = 100;
//       }
//     }
  
//     class Villain {
//       constructor(name) {
//           this.name = name;
//           this.health = 100;
//       }
//     }
  
//     const hero = new Hero("Multiplication Mastermind");
//     const villain = new Villain("The Calculator");
  
//     document.getElementById("start-button").addEventListener("click", function() {
//       document.querySelector(".buttons-one").style.display = "none";
//       document.getElementById("hero-bar").classList.remove("hidden");
//       document.getElementById("villain-bar").classList.remove("hidden");
//       startGame();
//     });
  
//     document.getElementById("instructions-button").addEventListener("click", function() {
//       document.getElementById("instructions").style.display = "block";
//     });
  
//     const startGame = function() {
//       let question = Math.floor(Math.random() * 10) + 1;
//       question = `${question} * ${question}`;
//       document.getElementById("question").innerHTML = question;
  
//       document.getElementById("submit-button").addEventListener("click", function() {
//         let answer = document.getElementById("answer").value;
//         if (answer == question.split(" ")[0] * question.split(" ")[2]) {
//           document.getElementById("result").innerHTML = "Correct!";
//           hero.health += 10;
//           villain.health -= 10;
//           updateHealthBars();
//         } else {
//           document.getElementById("result").innerHTML = "Incorrect.";
//           hero.health -= 10;
//           villain.health += 10;
//           updateHealthBars();
//         }
//       });
//     };
  
//     const updateHealthBars = function() {
//       document.getElementById("hero-level").style.width = `${hero.health}%`;
//       document.getElementById("villain-level").style.width = `${villain.health}%`;
//     };
//   });

document.addEventListener("DOMContentLoaded", function() {
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
  
    document.getElementById("start-button").addEventListener("click", function() {
      document.querySelector(".buttons-one").style.display = "none";
      document.getElementById("hero-bar").classList.remove("hidden");
      document.getElementById("villain-bar").classList.remove("hidden");
      startGame();
    });
  
    document.getElementById("instructions-button").addEventListener("click", function() {
      document.getElementById("instructions").style.display = "block";
    });
  
    const startGame = function() {
      let question = Math.floor(Math.random() * 10) + 1;
      question = `${question} * ${question}`;
      document.getElementById("question").innerHTML = question;
  
      document.getElementById("submit-button").addEventListener("click", function() {
        let answer = document.getElementById("answer").value;
        if (answer == question.split(" ")[0] * question.split(" ")[2]) {
          document.getElementById("result").innerHTML = "Correct!";
          hero.health += 10;
          villain.health -= 10;
          updateHealthBars();
        } else {
          document.getElementById("result").innerHTML = "Incorrect.";
          hero.health -= hero.health * 0.1;
          villain.health += villain.health * 0.1;
          updateHealthBars();
        }
      });
    };
  
    const updateHealthBars = function() {
      document.getElementById("hero-level").style.width = `${hero.health}%`;
      document.getElementById("villain-level").style.width = `${villain.health}%`;
    };
  });