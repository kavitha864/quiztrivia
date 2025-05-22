const questions = [
  {
    question: "The full form of CSS is:",
    options: ["Cascading Style Sheets", "Coloured Special Sheets", "Color and Style Sheets", "None"],
    answer: 0
  },
  {
    question: "Select the correct HTML tag to make a text italic?",
    options: ["Italic", "I", "It", "II"],
    answer: 1
  },
  {
    question: "What does the acronym DOM stand for?",
    options: ["Document Object Model", "Document Orientation Model", "Document Object Management", "Data Object Model"],
    answer: 0
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    options: ["To define the title of the webpage", "To add CSS styles to the webpage", "To add JavaScript code to the webpage", "To define the body of the webpage"],
    answer: 0
  },
  {
    question: "What is the difference between var, let, and const in JavaScript?",
    options: ["var is used for global variables, let is used for local variables, and const is used for constant variables", "var is used for local variables, let is used for global variables, and const is used for constant variables", "All three are used for the same purpose", "None of the above"],
    answer: 0
  },
  {
    question: "In CSS, Select the property to set an image in a list instead of a standard bullet?",
    options: ["list-image:", "None", "list-style-image:", "image-list:"],
    answer: 2
  },
  {
    question: "In CSS, choose the correct option to select this image by its id?",
    options: ["img { }", ".mainpic { }", "#mainpic { }", "None"],
    answer: 2
  },
  {
    question: "Select the option to make a list that lists the items with bullets?",
    options: ["Dl", "Ol", "List", "None"],
    answer: 0
  },
  {
    question: "Select the correct option to create an e-mail link?",
    options: ["A href=mailto:xxx@yyy.com", "Mail>xxx@yyy.com/mail", "A href=\"xxx@yyy.com\"", "Mail href=\"xxx@yyy.com\""],
    answer: 0
  },
  {
    question: "Select the appropriate HTML tag for inserting a line break?",
    options: ["br", "lb", "brbr", "break"],
    answer: 0
  },
  {
    question: "For users that use the tab key to navigate websites, what property represents this way of moving from one element to another?",
    options: ["None", "a:visited", "a:focus", "a:active"],
    answer: 2
  },
  {
    question: "In CSS, Select the property used to set the spacing in between lines of text?",
    options: ["letter-spacing", "spacing", "line-height", "None"],
    answer: 2
  },
  {
    question: "Select the appropriate HTML tag used for the largest heading?",
    options: ["H1", "Heading", "Head", "H6"],
    answer: 0
  },
  {
    question: "In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element?",
    options: ["display:inline;", "None", "display:horizontal;", "display:left;"],
    answer: 0
  },
  {
    question: "Select the property used to create space between the element’s border and inner content?",
    options: ["spacing", "None", "margin", "padding"],
    answer: 3
  },
  {
    question: "In CSS, what is the correct option to select only the paragraphs with class name “warning”?",
    options: ["p { }", "#warning { }", "warning { }", ".warning { }"],
    answer: 3
  },
  {
    question: "In CSS, select the property used to set the background color of an image?",
    options: ["None", "color:background", "background:color", "background-color"],
    answer: 3
  },
  {
    question: "Select the correct HTML tag to make a text bold.",
    options: ["bb", "b", "bo", "bold"],
    answer: 1
  },
  {
    question: "Select the option to make a list that lists the items with numbers?",
    options: ["Ol", "List", "None", "Dl"],
    answer: 0
  },
  {
    question: "Select the property that is used to create spacing between HTML elements?",
    options: ["margin", "spacing", "border", "padding"],
    answer: 0
  },
  {
    question: "Select the property that is used to change the list style to show roman numerals instead of normal numbers?",
    options: ["list-bullet-type:roman-numerals;", "list-type:roman;", "None", "list-style-type:upper-roman;"],
    answer: 3
  },
  {
    question: "Select the correct option to open a link in a new browser window?",
    options: ["A href=\"url\" target=\"_blank\"", "A href=\"url\" new", "None", "A href=\"url\" target=\"new\""],
    answer: 0
  },
  {
    question: "In CSS, what is the correct option to select all the tags on a page?",
    options: ["p { }", "#p { }", ".p { }", "<p> { }"],
    answer: 0
  },
  {
    question: "Which of the following type of variable takes precedence over other if names are same?",
    options: ["global variable", "local variable", "Both of the above.", "None of the above."],
    answer: 1
  },
  {
    question: "Which of the following is a valid type of function javascript supports?",
    options: ["named function", "anonymous function", "Both of the above.", "None of the above."],
    answer: 2
  },
  {
    question: "Which built-in method returns the calling string value converted to upper case?",
    options: ["toUpperCase()", "toUpper()", "changeCase(case)", "None of the above."],
    answer: 0
  },
  {
    question: "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
    options: ["charAt()", "charCodeAt()", "concat()", "indexOf()"],
    answer: 1
  },
  {
    question: "Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?",
    options: ["reverse()", "shift()", "slice()", "some()"],
    answer: 3
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start-quiz").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";
  document.getElementById("question").textContent = questions[currentQuestionIndex].question;
  displayAnswerChoices();
}

function displayAnswerChoices() {
  const answerChoices = document.getElementById("answer-choices");
  answerChoices.innerHTML = "";
  questions[currentQuestionIndex].options.forEach((option, index) => {
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "answer";
    radioInput.value = index;
    radioInput.id = `answer-${index}`;

    const label = document.createElement("label");
    label.textContent = option;
    label.htmlFor = `answer-${index}`;

    const li = document.createElement("li");
    li.appendChild(radioInput);
    li.appendChild(label);
    li.style.listStyleType = "none"; // Add this line to remove the bullet points
    li.style.paddingBottom = "10px"; // Add this line to add some space between options

    answerChoices.appendChild(li);
  });
}
function handleAnswerSelection() {
  const selectedAnswerIndex = parseInt(document.querySelector('input[name="answer"]:checked').value);
  const correctAnswerIndex = questions[currentQuestionIndex].answer;
  if (selectedAnswerIndex === correctAnswerIndex) {
    score++;
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Incorrect. The correct answer is: " + questions[currentQuestionIndex].options[correctAnswerIndex];
  }

  // Add functionality to handle the next question or end of quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayAnswerChoices();
  } else {
    document.getElementById("result").textContent += "\nYour final score is: " + score;
  }
}

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.id = "submit-button";

document.getElementById("quiz-area").appendChild(submitButton);

submitButton.addEventListener("click", handleAnswerSelection);

function handleAnswerSelection() {
  const selectedAnswerIndex = parseInt(document.querySelector('input[name="answer"]:checked').value);
  const correctAnswerIndex = questions[currentQuestionIndex].answer;
  if (selectedAnswerIndex === correctAnswerIndex) {
    score++;
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Incorrect. The correct answer is: " + questions[currentQuestionIndex].options[correctAnswerIndex];
  }

  // Add functionality to handle the next question or end of quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    document.getElementById("result-area").style.display = "none";
    document.getElementById("quiz-area").style.display = "block";
    document.getElementById("question").textContent = questions[currentQuestionIndex].question;
    displayAnswerChoices();
  } else {
    document.getElementById("result-area").style.display = "block";
    document.getElementById("quiz-area").style.display = "none";
    document.getElementById("result").textContent += "\nYour final score is: " + score;
  }
}
function handleAnswerSelection() {
  const selectedAnswerIndex = parseInt(document.querySelector('input[name="answer"]:checked').value);
  const correctAnswerIndex = questions[currentQuestionIndex].answer;
  if (selectedAnswerIndex === correctAnswerIndex) {
    score++;
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Incorrect. The correct answer is: " + questions[currentQuestionIndex].options[correctAnswerIndex];
    // Show the restart button
    document.getElementById("restart-button").style.display = "block";
  }

  // Add functionality to handle the next question or end of quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    document.getElementById("result-area").style.display = "none";
    document.getElementById("quiz-area").style.display = "block";
    document.getElementById("question").textContent = questions[currentQuestionIndex].question;
    displayAnswerChoices();
  } else {
    document.getElementById("result-area").style.display = "block";
    document.getElementById("quiz-area").style.display = "none";
    document.getElementById("result").textContent += "\nYour final score is: " + score;
    // Show the restart button
    document.getElementById("restart-button").style.display = "block";
  }
}
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-area").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";
  document.getElementById("question").textContent = questions[currentQuestionIndex].question;
  displayAnswerChoices();
  document.getElementById("restart-button").style.display = "none";
}