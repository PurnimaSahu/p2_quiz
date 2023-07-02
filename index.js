const num1 = Math.ceil(Math.random() * 10);

const num2 = Math.ceil(Math.random() * 10);

const ques = document.getElementById("question");

const form1 = document.getElementById("form");

const input1 = document.getElementById("input");
let score = 0;

ques.innerHTML = `what will be the output <br />if we multiply ${num1} by ${num2}?`;
const correctAns = num1 * num2;

form1.addEventListener("submit", xyz);

function xyz() {
  const userAns = +input1.value;

  if (userAns === correctAns) {
    score = score + 1;

    // document.getElementsByTagName("p").innerHTML = score;
  } else {
    score--;
    console.log(score);
  }
  document.getElementById("score").innerHTML = `Score:${score}`;
}
