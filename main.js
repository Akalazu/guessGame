let submitBtn = document.querySelector(".submit-btn");
let feedBack = document.querySelector(".feedback-info");
let output = document.querySelector(".output");
let lifeRemaining = document.querySelector(".life-remaining");
let highScore = document.querySelector(".high-score");
let spitOutput = document.querySelector(".randNum");
let inputVal;

// FUNCTIONS
// let timeOutFunc = () => {
//   setTimeout(function () {
//     location.reload();
//   }, 100);
// };
function operations() {
  inputVal = parseInt(lifeRemaining.innerHTML) - 1;
  lifeRemaining.innerHTML = inputVal;
  if (inputVal === 0) {
    swal(
      {
        title: "Oops!",
        text: "You've reached maximum trials",
        type: "warning",
        confirmButtonClass: "btn-outline-success",
        confirmButtonText: "Okay, Cool!",
      },
      function () {
        location.reload();
      } //reloads page after clicking okay
    );
  }
} //Decreases the trials remaining and sends an alert when it is equals 0

function randNum() {
  return Math.trunc(Math.random() * 20 + 1);
} //generates random number

function pageReload() {
  swal(
    {
      title: "Correct!",
      text: "The page would reload in 5 secs",
      type: "success",
      showConfirmButton: false,
      timer: 5000,
    },
    setTimeout(function () {
      location.reload();
    }, 3000)
  );
} // reloads page after 3 secs

function isPrime(n) {
  if (n === 1 || n < 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  } //check if random number is a prime number
}

const displayMessage = function (message, outPut) {
  feedBack.textContent = message;
  output.style.backgroundColor = outPut;
}; //displays message and changes output bg color
//End of functions

let rand = randNum();
// document.write(rand);
if (rand > 9) {
  isPrime(rand)
    ? spitOutput.append("hint : number is two digit and is a prime number")
    : spitOutput.append("hint : number is two digit and is not a prime number");
} else {
  !isPrime(rand)
    ? spitOutput.append("hint : number is one digit and is not a  prime number")
    : spitOutput.append("hint: number is one digit and is a prime number");
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let inputValue = document.getElementById("num-input").value;
  if (inputValue === "") {
    swal({
      title: "Error!",
      text: "Input Field Cannot be empty",
      type: "error",
      confirmButtonClass: "btn-outline-danger",
    });
  } else if (Number(inputValue) === rand) {
    displayMessage("Correct Guess! ????????", "rgb(1, 75, 1)");
    setInterval(pageReload, 1000);
  } else {
    displayMessage(
      "Oops!???? You guessed wrong. Try Again. ",
      "rgb(231, 19, 19)"
    );
    feedBack.style.fontSize = "18px";
    setTimeout(() => {
      // feedBack.style.fontSize = "28px";
      displayMessage("Don't forget, number is from 1 - 20", "black");
    }, 2000);
    operations();
  }
});

// submitBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(document.getElementById("num-input").value);
// });

// function convertTemp(){
//     const tempValues = {
//         unit: "celsius",
//         value: Number(prompt("Celsius Degree"))
//     }
//     return tempValues.value + 273;
// }
// console.log(convertTemp());

//Array of forecasted temperatures
// const tempForcast = arr => {
//     for(let i = 0; i < arr.length; i++){
//         let outputedResult =   `... ${arr[i]} degree Celsius in ${i + 1} days.`
//         console.log(outputedResult);
//     }

// }
// tempForcast([17, 21, 23]);
// tempForcast( [12, 5, -5, 0, 4]);
