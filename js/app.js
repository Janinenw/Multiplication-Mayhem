// Multiplication Mastermind
// defeat your numerical nemesis

//Needed
//Game title
//Intructions- preferably not alert prompt, but can be
//
// sprite class if using sprites
//- start game
//- Generate multiplication problem
// Timer for computer
// check accuracy
//progress bars
// check win condition
// 

// //
// // Will log random two random numbers 1-12 to console, multiply them, and display answer in console
// const newQuestion = () => {
//     num1 = Math.floor(Math.random() * 12);
//     num2= Math.floor(Math.random() * 12);
//     (`${num1} x ${num2} = ${(num1) * (num2)}`)
// }
// newQuestion()
// console.log(num1)
// console.log(num2)
// console.log((num1) * (num2))

// Will log random two random numbers 1-12 to console, multiply them, and display answer in console
// const newQuestion = () => {
//     num1 = Math.floor(Math.random() * 12);
//     num2= Math.floor(Math.random() * 12);
//     (`${num1} x ${num2} = ${(num1) * (num2)}`)
// }
// newQuestion()
// console.log(num1)
// console.log(num2)
// console.log((num1) * (num2))

function showInstructions(){
    const instructions = document.getElementById("instructions");
    if(instructions.style.display === "none"){
        instructions.style.display = "block";
    }else{
        instructions.style.display = "none";
    }
}