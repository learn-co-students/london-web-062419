// // creating objects by hand

// const user1 = {
//   name: "Phil",
//   score: 4,
//   increment: function() {
//     this.score++;
//   }
// };

// // creating objects using dot notation

// const user2 = {};

// user2.name = "Julia";
// user2.score = 5;
// user2.increment = function() {
//   user2.score++;
// };

// // using object.create

// const user3 = Object.create(null);

// user3.name = "Eva";
// user3.score = 9;
// user3.increment = function() {
//   user3.score++;
// };

// // ----------------------------------------------

// how to create objects without having to do it manually?

// using a function

// function userCreator(name, score) {
//   const newUser = {};
//   newUser.name = name;
//   newUser.score = score;
//   newUser.increment = function() {
//     newUser.score++;
//   };
//   return newUser;
// }

// const user1 = userCreator("Julia", 5);
// const user2 = userCreator("James", 2);
// user1.increment === user2.increment;

// ----------------------------------------------
// problem with this approach: every time we crate a new user
// we also are creating a copy of the functions attached
// solution is to use the prototype chain

const parentUserObject = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log("you have been logged in");
  },
  type: "not admin"
};

function userCreator(name, score) {
  const newUser = Object.create(parentUserObject);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const user1 = userCreator("phil", 4);
user1.type = "admin";
const user2 = userCreator("James", 2);
// user1.increment === user2.increment;

// in this solution , we explicitly are creating an object
// that gets access to the functions we defined in the prototype
// ----------------------------------------------

// but there's a better way to do it, and it's using the
// `new` keyword

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++;
};

UserCreator.prototype.login = function() {
  console.log("login");
};

const user1 = new UserCreator("Eva", 9);
const user2 = new UserCreator("James", 2);

// this is faster to write and a bit cleaner
// it is still the industry standard way of doing it
// we are uppercasing the function name just to signalise to other
// devs that it's supposed to generate objects -
// it has nothing to do with a concept of a class or anything else
// js is indifferent to it
// ----------------------------------------------

// // GOTCHA on using `this`:
// // what if we want to design more complex functions?

// function UserCreator(name, score) {
//   this.name = name;
//   this.score = score;
// }

// UserCreator.prototype.increment = function() {
//   const add1 = () => {
//     this.score++;
//   };
//   add1();
// };

// UserCreator.prototype.login = function() {
//   console.log("login");
// };

// const user1 = new UserCreator("Eva", 9);

// // solution - => lexical binding of arrow functions

// function UserCreator(name, score) {
//   this.name = name;
//   this.score = score;
// }

// UserCreator.prototype.increment = function() {
//   const add1 = () => {
//     this.score++;
//   };
//   add1();
// };

// UserCreator.prototype.login = function() {
//   console.log("login");
// };

// const user1 = new UserCreator("Eva", 9);

// ----------------------------------------------

// // last upgrade to this: the `class` keyword

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login = () => {
    console.log("login");
  };
}

const form = document.querySelector("form");
const userContainer = document.querySelector("#userContainer");

const createUserDiv = user => {
  const userDiv = document.createElement("div");

  const span1 = document.createElement("span");
  span1.innerText = user.name;
  const span2 = document.createElement("span");
  span2.innerText = " score: ";
  const span3 = document.createElement("span");
  span3.innerText = user.score;

  const button = document.createElement("button");
  button.innerText = "delete me";

  button.addEventListener("click", deleteParentDiv);

  userDiv.append(span1, span2, span3, button);
  return userDiv;
};

function deleteParentDiv(e) {
  e.target.parentElement.remove();
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = form[0].value;
  const score = form[1].value;
  const user = new User(name, score);
  e.target.reset();
  userContainer.append(createUserDiv(user));
});
