// ===============================
// KONFIGURASI GOOGLE SHEETS
// ===============================

// Ganti dengan URL Google Apps Script Web App kamu
const GOOGLE_SCRIPT_URL =
  "MASUKKAN_URL_GOOGLE_APPS_SCRIPT_DI_SINI";


// ===============================
// DATA GAME
// ===============================

const questions = [

  {
    question: "Berapakah hasil dari 5 + 7?",
    answers: [
      "10",
      "12",
      "15",
      "20"
    ],
    correct: 1
  },

  {
    question: "Planet yang dikenal sebagai Planet Merah adalah?",
    answers: [
      "Bumi",
      "Venus",
      "Mars",
      "Jupiter"
    ],
    correct: 2
  },

  {
    question: "Hewan yang mengalami metamorfosis adalah?",
    answers: [
      "Kupu-kupu",
      "Kucing",
      "Ayam",
      "Sapi"
    ],
    correct: 0
  }

];


// ===============================
// VARIABEL GAME
// ===============================

let playerName = "";

let score = 0;

let lives = 3;

let level = 1;

let correctAnswers = 0;

let wrongAnswers = 0;

let currentQuestion = null;

let answered = false;


// ===============================
// MULAI GAME
// ===============================

function startGame() {

  const input =
    document.getElementById("playerName");

  playerName =
    input.value.trim();

  if (playerName === "") {

    alert("Silakan masukkan nama terlebih dahulu!");

    return;
  }

  document
    .getElementById("startScreen")
    .classList.add("hidden");

  document
    .getElementById("gameScreen")
    .classList.remove("hidden");

  document
    .getElementById("nameDisplay")
    .textContent = playerName;

  updateStats();
}


// ===============================
// TAMPILKAN PERTANYAAN
// ===============================

function showQuestion(index) {

  currentQuestion = questions[index];

  answered = false;

  document
    .getElementById("quizModal")
    .classList.remove("hidden");

  document
    .getElementById("questionText")
    .textContent =
      currentQuestion.question;

  document
    .getElementById("feedback")
    .textContent = "";

  document
    .getElementById("nextButton")
    .classList.add("hidden");

  const answers =
    document.getElementById("answers");

  answers.innerHTML = "";

  currentQuestion.answers.forEach(
    (answer, i) => {

      const button =
        document.createElement("button");

      button.textContent = answer;

      button.className = "answer";

      button.onclick =
        () => checkAnswer(i, button);

      answers.appendChild(button);

    }
  );
}


// ===============================
// CEK JAWABAN
// ===============================

function checkAnswer(index, button) {

  if (answered) return;

  answered = true;

  const allButtons =
    document.querySelectorAll(".answer");

  allButtons.forEach(btn => {

    btn.disabled = true;

  });


  if (index === currentQuestion.correct) {

    button.classList.add("correct");

    score += 100;

    correctAnswers++;

    document
      .getElementById("feedback")
      .textContent =
      "✅ Jawaban benar! +100 poin";

  } else {

    button.classList.add("wrong");

    lives--;

    wrongAnswers++;

    score = Math.max(0, score - 50);

    document
      .getElementById("feedback")
      .textContent =
      "❌ Jawaban salah! -1 nyawa";

  }

  // Level naik setiap 200 poin
  level =
    Math.floor(score / 200) + 1;

  updateStats();

  document
    .getElementById("nextButton")
    .classList.remove("hidden");

}


// ===============================
// TUTUP SOAL
// ===============================

function closeQuestion() {

  document
    .getElementById("quizModal")
    .classList.add("hidden");

  if (lives <= 0) {

    endGame();

  }

}


// ===============================
// UPDATE STATISTIK
// ===============================

function updateStats() {

  document
    .getElementById("score")
    .textContent = score;

  document
    .getElementById("lives")
    .textContent = lives;

  document
    .getElementById("level")
    .textContent = level;

}


// ===============================
// GAME SELESAI
// ===============================

function endGame() {

  document
    .getElementById("gameScreen")
    .classList.add("hidden");

  document
    .getElementById("resultScreen")
    .classList.remove("hidden");

  document
    .getElementById("resultName")
    .textContent = playerName;

  document
    .getElementById("finalScore")
    .textContent = score;

  let message = "";

  if (score >= 250) {

    message =
      "🏆 Luar biasa! Kamu sangat hebat!";

  } else if (score >= 150) {

    message =
      "👏 Bagus! Terus tingkatkan kemampuanmu!";

  } else {

    message =
      "💪 Jangan menyerah! Coba lagi.";

  }

  document
    .getElementById("resultMessage")
    .textContent = message;


  // Kirim data ke Google Sheets
  saveToGoogleSheets();

}


// ===============================
// GOOGLE SHEETS
// ===============================

function saveToGoogleSheets() {

  if (
    GOOGLE_SCRIPT_URL ===
    "MASUKKAN_URL_GOOGLE_APPS_SCRIPT_DI_SINI"
  ) {

    console.log(
      "Google Sheets belum dikonfigurasi."
    );

    return;
  }


  const data = {

    nama: playerName,

    skor: score,

    level: level,

    benar: correctAnswers,

    salah: wrongAnswers,

    nyawa: lives,

    tanggal:
      new Date().toLocaleString("id-ID")

  };


  fetch(GOOGLE_SCRIPT_URL, {

    method: "POST",

    mode: "no-cors",

    headers: {
      "Content-Type":
        "application/json"
    },

    body: JSON.stringify(data)

  })

  .then(() => {

    console.log(
      "Data berhasil dikirim ke Google Sheets."
    );

  })

  .catch(error => {

    console.error(
      "Gagal mengirim data:",
      error
    );

  });

}
