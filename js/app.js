// // Multiplication Mastermind
// // defeat your numerical nemesis

// //Needed
// //Game title
// //Intructions- preferably not alert prompt, but can be
// //
// // sprite class if using sprites
// //- start game
// //- Generate multiplication problem
// // Timer for computer
// // check accuracy
// //progress bars
// // check win condition
// // 

// // //
// // // Will log random two random numbers 1-12 to console, multiply them, and display answer in console
// // const newQuestion = () => {
// //     num1 = Math.floor(Math.random() * 12);
// //     num2= Math.floor(Math.random() * 12);
// //     (`${num1} x ${num2} = ${(num1) * (num2)}`)
// // }
// // newQuestion()
// // console.log(num1)
// // console.log(num2)
// // console.log((num1) * (num2))

// // Will log random two random numbers 1-12 to console, multiply them, and display answer in console
// // const newQuestion = () => {
// //     num1 = Math.floor(Math.random() * 12);
// //     num2= Math.floor(Math.random() * 12);
// //     (`${num1} x ${num2} = ${(num1) * (num2)}`)
// // }
// // newQuestion()
// // console.log(num1)
// // console.log(num2)
// // console.log((num1) * (num2))
// class Hero {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//     }
// }
// const hero = new Hero ("Multiplication Mastermind");


// class Villain {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//     }
// }
// const villain = new Villain ("The Calculator");


// // function showInstructions(){
// // const instructions = document.getElementById("instructions");
// // if(instructions.style.display === "none"){
// // instructions.style.display = "block";
// // }else{
// // instructions.style.display = "none";
// // }


// // const heroHealth = document.getElementById("hero-progress");
// // heroHealth.value = hero.health;
// // const villainHealth = document.getElementById("villain-progress");
// // villainHealth.value = villain.health;
// // document.getElementById("hero-name").innerHTML = hero.name;
// // document.getElementById("villain-name").innerHTML = villain.name;


// // function startGame() {
// // document.getElementById("start-button").addEventListener("click", () => {
// //     document.getElementById("hero-progress").style.display = "block";
// //     document.getElementById("villain-progress").style.display = "block";
// //   })
// // }

// // startGame()
// function showInstructions() {
//     const instructions = document.getElementById("instructions");
//     if (instructions.style.display === "none") {
//       instructions.style.display = "block";
//     } else {
//       instructions.style.display = "none";
//     }
//   }
//   document.getElementById("instructions-button").addEventListener("click", showInstructions);
  
//   function startGame() {
//     document.getElementById("hero-bar").classList.remove("hidden");
//     document.getElementById("hero-level").style.width = "100%";
//     document.getElementById("villain-bar").classList.remove("hidden");
//     document.getElementById("villain-level").style.width = "100%";
//   }
  
//   document.getElementById("start-button").addEventListener("click", startGame)


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
    document.getElementById("hero-bar").classList.remove("hidden");
    document.getElementById("villain-bar").classList.remove("hidden");
    document.getElementById("hero-level").innerHTML = `${hero.name}: ${hero.health}`;
    document.getElementById("villain-level").innerHTML = `${villain.name}: ${villain.health}`;
});

document.getElementById("instructions-button").addEventListener("click", function() {
    const instructions = document.getElementById("instructions");
    if (instructions.style.display === "none") {
        instructions.style.display = "block";
    } else {
        instructions.style.display = "none";
    }
})

});