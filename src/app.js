import "./style.css";

function searchExcuse() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class.",
    "when I was sleeping.",
    "while I was exercising.",
    "during my lunch.",
    "while I was praying."
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[whoIndex] + action[actionIndex] + what[whatIndex] + when[whenIndex];
}

document.body.onload = searchExcuse;

const newExcuse = document.getElementById("new-excuse");
newExcuse.onclick = searchExcuse;
