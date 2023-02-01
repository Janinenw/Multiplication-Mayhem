

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
  
  function setup() {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", function() {
  const instructions = document.getElementById("instructions");
  instructions.classList.remove("hidden");

  const form = document.getElementsByTagName("form")[0];
  form.classList.remove("hidden");

  const question = document.getElementById("question");
  question.classList.remove("hidden");

  const answer = document.getElementById("answer");
  answer.classList.remove("hidden");

  const submitButton = document.getElementById("submit-button");
  submitButton.classList.remove("hidden");

  const result = document.getElementById("result");
  result.classList.remove("hidden");

  const heroBar = document.getElementById("hero-bar");
  heroBar.classList.remove("hidden");

  const villainBar = document.getElementById("villain-bar");
  villainBar.classList.remove("hidden");
});
}

setup();
});