// 15 multiple-choice questions
let questions = [
  { q: "What does DOM stand for?", a: "Document Object Model", options: ["Data Object Method", "Document Object Model", "Dynamic Output Module", "Document Order Map"] },
  { q: "Which keyword declares a constant?", a: "const", options: ["let", "var", "const", "static"] },
  { q: "Strict comparison operator?", a: "===", options: ["==", "===", "=", "!=="] },
  { q: "Boolean values are?", a: "true/false", options: ["yes/no", "true/false", "on/off", "1/0"] },
  { q: "Loop that runs at least once?", a: "do-while", options: ["for", "while", "do-while", "foreach"] },
  { q: "typeof 'Ali' returns?", a: "string", options: ["number", "string", "boolean", "object"] },
  { q: "typeof 21 returns?", a: "number", options: ["string", "number", "boolean", "undefined"] },
  { q: "Which operator is logical AND?", a: "&&", options: ["||", "&&", "!", "&"] },
  { q: "Which operator is logical OR?", a: "||", options: ["&&", "||", "!", "|"] },
  { q: "Which operator is NOT?", a: "!", options: ["!", "!!", "!==", "not"] },
  { q: "Which method gets element by ID?", a: "getElementById", options: ["querySelector", "getElementById", "getElementsByClassName", "getElement"] },
  { q: "Which BOM method shows popup?", a: "alert()", options: ["prompt()", "alert()", "confirm()", "popup()"] },
  { q: "Which BOM method asks input?", a: "prompt()", options: ["alert()", "prompt()", "confirm()", "input()"] },
  { q: "Which BOM method asks OK/Cancel?", a: "confirm()", options: ["alert()", "prompt()", "confirm()", "dialog()"] },
  { q: "Which keyword is block-scoped?", a: "let", options: ["var", "let", "const", "static"] }
];

// Shuffle helper
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Load 3 random questions
function loadQuiz() {
  let questionDivs = document.querySelectorAll(".question");
  let shuffled = shuffle([...questions]).slice(0, 3);

  shuffled.forEach((item, index) => {
    let qElement = questionDivs[index].querySelector("p");
    let optionsDiv = questionDivs[index].querySelector(".options");
    qElement.innerText = `${index + 1}. ${item.q}`;
    optionsDiv.innerHTML = "";

    item.options.forEach(opt => {
      let label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="q${index}" value="${opt}"> ${opt}`;
      optionsDiv.appendChild(label);
    });

    // store correct answer
    optionsDiv.setAttribute("data-answer", item.a);
  });

  document.getElementById("result").innerText = "";
}

// Check answers
function checkQuiz() {
  let score = 0;
  let questionDivs = document.querySelectorAll(".question");

  questionDivs.forEach((div, index) => {
    let selected = div.querySelector("input[type=radio]:checked");
    let correctAns = div.querySelector(".options").getAttribute("data-answer");
    if (selected && selected.value.toLowerCase() === correctAns.toLowerCase()) {
      score++;
    }
  });

  let resultBox = document.getElementById("result");
  resultBox.innerText = `Your Score: ${score}/3`;

  if (score === 3) {
    resultBox.style.color = "green";
    resultBox.innerText += " 🎉 Excellent!";
  } else if (score === 2) {
    resultBox.style.color = "orange";
    resultBox.innerText += " 👍 Good job!";
  } else {
    resultBox.style.color = "red";
    resultBox.innerText += " ❌ Keep practicing!";
  }
}

// Reset quiz: show correct answers then shuffle
function resetQuiz() {
  let questionDivs = document.querySelectorAll(".question");

  questionDivs.forEach(div => {
    let correctAns = div.querySelector(".options").getAttribute("data-answer");
    let labels = div.querySelectorAll("label");
    labels.forEach(label => {
      if (label.innerText.trim().toLowerCase() === correctAns.toLowerCase()) {
        label.style.color = "blue"; // highlight correct answer
      }
    });
  });

  // After 3 seconds, load new shuffled questions
  setTimeout(() => {
    loadQuiz();
  }, 3000);
}

// Load quiz initially
window.onload = loadQuiz;
