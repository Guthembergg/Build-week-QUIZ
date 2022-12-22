// <!DOCTYPE html>
// <html>
// <!--
//         QUIZ GAME!

//         REGOLE:
//         / L'utente dovrà indovinare un certo numero di domandeThe player must guess correctly a certain amount of questions
//         / Ogni risposta corretta gli darà 1 punto
//         / Le domande possono avere risposte multiple o singole (true/false)
//         / Al termine del quiz l'utente dovrà poter vedere il suo punteggio

//         DOMANDE:
//         / Le domande possono essere ottenute da questo URL ( http://bit.ly/strive_QUIZZ ) o puoi scriverne di tue
//         / Possono essere composte di boolean multipli (true / false)

//         TIPS:
//         / Usa una variabile globale per registrare il punteggio dell'utente
//         / Crea una variabile "questionNumber" per tenere traccia del numero (o posizione) della domanda presentata all'utente
//         / Quando "questionNumber" è maggiore delle domande disponibili, a quel punto l'applicazione dovrà mostrare il punteggio
//         / Comincia salvando le domande in una variabile (o reperiscile dall'URL fornito usando AJAX e fetch)
//         / Parti con l'implementazione semplice, poi passa agli extra e ad abbellire l'interfaccia
//         / Fai test completi: controlla la console periodicamente per verificare che non ci siano errori e che il flusso di dati sia quello che ti aspetti

//         EXTRA:
//         / Dai un feedback sulla risposta al momento del click (corretta o sbagliata)
//         / Visualizza una domanda alla volta in sequenza piuttosto che tutte assieme in forma di lista
//         / Permetti all'utente di selezionare la difficoltà del quiz prima di iniziare e il numero di domande che desidera ricevere.
//         ( Se hai implementato l'applicazione usando l'URL fornito, puoi ottenere i dati che ti servono in modo semplice,
//         usando query parameters in questo modo: https://opentdb.com/api.php?amount=10&category=18&difficulty=easy e modificarne il numero di domande e difficoltà )

//         /* NON DIMENTICARE...
//           di fare commit & push del codice regolarmente sulla tua repository GitHub e di condividerla con i tuoi colleghi
//         */
//     -->

//     window.onload = function () {
//       // TIPS:

//       // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
//       // Per ogni domanda, crea un container e incorporale tutte all'interno.
//       // Crea poi dei radio button
//       // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
//       // con le risposte corrette e incorrette come opzioni
//       // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
//       //
//       // SE MOSTRI UNA DOMANDA ALLA VOLTA:
//       // Mostra la prima domanda con il testo e i radio button.
//       // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
//       // salvando le risposte dell'utente in una variabile
//     };

//       // Come calcolare il risultato? Hai due strade:
//       // Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
//       // Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

//       // BUON LAVORO 💪🚀
//   </script>
// </body>

// </html>

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const questions2 = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: [
      "A&#039;B + B&#039;A",
      "A&#039;B&#039;",
      "AB&#039; + AB",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: [
      "Application Layer",
      "Transport Layer",
      "Physical Layer",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("next");
const difficulty = document.getElementById("difficulty");

const hardness = `<h2> Select Difficulty:</h2><button id="hard" value="hard">Hard</div><button id="hard" value="easy">Easy</div>
`;
difficulty.innerHTML = hardness;
difficulty.onclick = function (e) {
  let diff = e.target.value;
  let domande2;
  let body = document.querySelector("body");
  if (diff === "easy") {
    body.removeChild(difficulty);
    generateQuiz(1);
    domande2 = questions;
  } else if (diff === "hard") {
    body.removeChild(difficulty);
    generateQuiz(2);
    domande2 = questions2;
  }
  setInterval(
    function () {
      //countdown = Tempo;

      countdown--;
      if (countdown === 0 && currentQuestion < domande2.length - 1) {
        currentQuestion++;
        generateQuiz(domande2);
        //countdown = Tempo;

        //countdownNumberEl.innerText = `Seconds ${countdown} remaining`;
      }
      if (currentQuestion >= domande2.length - 1 && countdown === 0) {
        //window.location.href = "index_Results-Page.html"
        //alert(arraySbagliate);
        showAnswers();
        sessionStorage.setItem("score", score);
        sessionStorage.setItem("numeroDomande", domande.length);

        //showResults(); // mostra i risultati del quiz
        //quizContainer.remove(); // elimina il quiz
      }
    },
    //ScountdownNumberEl.innerText = `Seconds ${countdown} remaining`;
    1000
  );
};
let currentQuestion = 0; // imposta il contatore delle domande a zero
let score = 0;
let Tempo = 10;
let countdown = 10;
// imposta il punteggio a zero

// funzione per generare il quiz
function generateQuiz(domande) {
  countdown = Tempo;
  if (domande === 1) {
    domande = questions;
  } else if (domande === 2) {
    domande = questions2;
  }
  const currentQuestionObject = domande[currentQuestion];

  // recupera la domanda e le possibili risposte
  const question = currentQuestionObject.question;
  const answers = currentQuestionObject.incorrect_answers;
  answers.push(currentQuestionObject.correct_answer); // aggiungi la risposta corretta alle altre risposte

  // shuffle le risposte
  answers.sort(() => Math.random() - 0.5);

  // genera il codice HTML per la domanda e le risposte e il timer
  const quiz = `

  <div id="countdown">
  <div id="countdown-number"></div>
  <svg>
    <circle r="18" cx="20" cy="20"></circle>
  </svg>
</div>
      <h2>${question}</h2>
      <form>
      ${answers
        .map(
          (answer) => `
            <label><div class="radio">
              <input type="radio" name="question${currentQuestion}" value="${answer}" id="${question}" >
              ${answer}
              </div>
            </label>
          `
        )
        .join("")}
        <button type="submit" id="next">Invia</button>
      </form>
    `;

  quizContainer.innerHTML = quiz; // inserisci il codice HTML nel container del quiz

  //countdownNumberEl.innerText = `Seconds ${countdown} remaining`;
  let elemento;
  quizContainer.onclick = function (e) {
    if (e.target.tagName === "INPUT") {
      if ((elemento = document.querySelector(".selected"))) {
        elemento.classList.remove("selected");
      }
      e.target.parentElement.classList.toggle("selected");

      if (e.target.value !== domande[currentQuestion].correct_answer) {
        // e.target.parentElement.classList.toggle("red");
        // arraySbagliate.push(e.target.value);
      }
    }
  };
  let arraySbagliate = [];
  quizContainer.addEventListener("submit", (event) => {
    event.preventDefault(); // impedisci il submit del form

    // recupera la risposta selezionata dall'utente
    const selected = document.querySelector(
      `input[name=question${currentQuestion}]:checked`
    );
    // const selected = document.querySelector(".selected");
    const answer = selected.value;
    const numeroQuestion = selected.id;
    const giusta = domande[currentQuestion].correct_answer;
    const domandaCorrente = currentQuestion + 1;
    arrAnswer = { domandaCorrente, numeroQuestion, answer, giusta };
    // controlla se la risposta è corretta
    if (answer === domande[currentQuestion].correct_answer) {
      score++; // aumenta il punteggio di 1
    } else {
      arraySbagliate.push(arrAnswer);
      //console.log(selected);
      //selected.classList.add("red");
    }

    selected.checked = false; // deseleziona la risposta selezionata

    // vai alla prossima domanda
    currentQuestion++;
    countdown = 10;

    // controlla se ci sono ancora domande da mostrare
    if (currentQuestion < domande.length) {
      generateQuiz(domande);
      // mostra la prossima domanda
    } else {
      //alert(arraySbagliate);
      //console.log(arraySbagliate);
      showAnswers();
      //window.location.href = "index_Results-Page.html";
      sessionStorage.setItem("score", score);
      sessionStorage.setItem("numeroDomande", domande.length);
    }

    function showAnswers() {
      let body = document.querySelector("body");
      //body.removeChild(quizContainer);
      let sbagliateScritta = "";
      const sbagliate = document.createElement("div");
      for (let i = 0; i < arraySbagliate.length; i++) {
        sbagliateScritta =
          sbagliateScritta +
          `<div class="sbagliate"><h3>-${arraySbagliate[i].domandaCorrente})<i> ${arraySbagliate[i].numeroQuestion}</i> <br>you replied: </h3><h4>${arraySbagliate[i].answer}</h4> <h3>the correct answer was </h3><h5>${arraySbagliate[i].giusta}<h5></div>`;
      }
      sbagliateScritta =
        sbagliateScritta +
        `<button type="submit" id="continua"> Next </button>`;

      quizContainer.innerHTML = sbagliateScritta;
      quizContainer.addEventListener("submit", (event) => {
        window.location.href = "index_Results-Page.html";
      });
      //body.appendChild(sbagliate);
    }
  });
}

//generateQuiz(); // mostra la prima domanda

//const progressBar = document.getElementById("progress-bar"); // seleziona l'elemento HTML con l'ID "progress-bar"

// function showResults() {
//   // recupera il numero totale di domande
//   const totalQuestions = domande.length;

//   // genera il codice HTML per i risultati
//   const results = `
//         <h2>Hai completato il quiz!</h2>
//         <h3>Il tuo punteggio: ${score} / ${totalQuestions}</h3>
//       `;

//   resultsContainer.innerHTML = results; // inserisci il codice HTML nel container dei risultati
// }

//per passare le variabili a results page si fa cosi:

// let score = sessionStorage.getItem("score");
// let numeroDomande = sessionStorage.getItem("numeroDomande");
