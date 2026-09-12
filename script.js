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

  // =========================
  // MATEMATIKA
  // =========================

  {
    question: "Berapakah hasil dari 5 + 7?",
    answers: ["10", "12", "15", "20"],
    correct: 1
  },

  {
    question: "Berapakah hasil dari 9 × 6?",
    answers: ["45", "54", "56", "63"],
    correct: 1
  },

  {
    question: "Berapakah hasil dari 100 ÷ 4?",
    answers: ["20", "25", "30", "40"],
    correct: 1
  },

  {
    question: "Berapakah hasil dari 15 - 8?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },

  {
    question: "Berapakah 12 × 5?",
    answers: ["50", "55", "60", "65"],
    correct: 2
  },

  {
    question: "Berapakah hasil dari 81 ÷ 9?",
    answers: ["7", "8", "9", "10"],
    correct: 2
  },

  {
    question: "Berapakah 25 + 35?",
    answers: ["50", "55", "60", "65"],
    correct: 2
  },

  {
    question: "Berapakah 50 - 23?",
    answers: ["27", "28", "29", "30"],
    correct: 0
  },

  {
    question: "Berapakah 7 × 8?",
    answers: ["48", "54", "56", "64"],
    correct: 2
  },

  {
    question: "Berapakah 144 ÷ 12?",
    answers: ["10", "11", "12", "14"],
    correct: 2
  },


  // =========================
  // IPA
  // =========================

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
    question: "Organ tubuh manusia yang digunakan untuk bernapas adalah?",
    answers: [
      "Jantung",
      "Paru-paru",
      "Lambung",
      "Ginjal"
    ],
    correct: 1
  },

  {
    question: "Sumber energi utama bagi bumi adalah?",
    answers: [
      "Bulan",
      "Angin",
      "Matahari",
      "Air"
    ],
    correct: 2
  },

  {
    question: "Air akan membeku pada suhu?",
    answers: [
      "0°C",
      "10°C",
      "50°C",
      "100°C"
    ],
    correct: 0
  },

  {
    question: "Hewan yang mengalami metamorfosis sempurna adalah?",
    answers: [
      "Kupu-kupu",
      "Kucing",
      "Ayam",
      "Sapi"
    ],
    correct: 0
  },

  {
    question: "Bagian tumbuhan yang berfungsi menyerap air adalah?",
    answers: [
      "Daun",
      "Batang",
      "Akar",
      "Bunga"
    ],
    correct: 2
  },

  {
    question: "Manusia membutuhkan oksigen untuk?",
    answers: [
      "Bernapas",
      "Melihat",
      "Mendengar",
      "Berbicara"
    ],
    correct: 0
  },

  {
    question: "Hewan yang berkembang biak dengan bertelur disebut?",
    answers: [
      "Vivipar",
      "Ovipar",
      "Mamalia",
      "Herbivora"
    ],
    correct: 1
  },

  {
    question: "Alat untuk mengukur suhu disebut?",
    answers: [
      "Barometer",
      "Termometer",
      "Speedometer",
      "Higrometer"
    ],
    correct: 1
  },

  {
    question: "Gaya yang menyebabkan benda jatuh ke tanah adalah?",
    answers: [
      "Gaya otot",
      "Gaya magnet",
      "Gaya gravitasi",
      "Gaya listrik"
    ],
    correct: 2
  },


  // =========================
  // BAHASA INDONESIA
  // =========================

  {
    question: "Lawan kata dari 'besar' adalah?",
    answers: [
      "Tinggi",
      "Kecil",
      "Panjang",
      "Lebar"
    ],
    correct: 1
  },

  {
    question: "Sinonim dari kata 'indah' adalah?",
    answers: [
      "Buruk",
      "Cantik",
      "Kotor",
      "Lambat"
    ],
    correct: 1
  },

  {
    question: "Kalimat yang digunakan untuk bertanya disebut kalimat?",
    answers: [
      "Berita",
      "Perintah",
      "Tanya",
      "Seruan"
    ],
    correct: 2
  },

  {
    question: "Tanda baca yang digunakan pada akhir kalimat tanya adalah?",
    answers: [
      ".",
      ",",
      "!",
      "?"
    ],
    correct: 3
  },

  {
    question: "Antonim dari kata 'panjang' adalah?",
    answers: [
      "Lebar",
      "Pendek",
      "Tinggi",
      "Besar"
    ],
    correct: 1
  },


  // =========================
  // IPS
  // =========================

  {
    question: "Apa ibu kota Indonesia?",
    answers: [
      "Bandung",
      "Surabaya",
      "Jakarta",
      "Medan"
    ],
    correct: 2
  },

  {
    question: "Indonesia berada di benua?",
    answers: [
      "Asia",
      "Eropa",
      "Afrika",
      "Amerika"
    ],
    correct: 0
  },

  {
    question: "Mata uang Indonesia adalah?",
    answers: [
      "Ringgit",
      "Rupiah",
      "Baht",
      "Dollar"
    ],
    correct: 1
  },

  {
    question: "Lambang negara Indonesia adalah?",
    answers: [
      "Garuda Pancasila",
      "Burung Elang",
      "Harimau",
      "Komodo"
    ],
    correct: 0
  },

  {
    question: "Indonesia dikenal sebagai negara?",
    answers: [
      "Kepulauan",
      "Gurun",
      "Kutub",
      "Pegunungan saja"
    ],
    correct: 0
  },


  // =========================
  // PENGETAHUAN UMUM
  // =========================

  {
    question: "Ada berapa hari dalam satu minggu?",
    answers: [
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 2
  },

  {
    question: "Ada berapa bulan dalam satu tahun?",
    answers: [
      "10",
      "11",
      "12",
      "13"
    ],
    correct: 2
  },

  {
    question: "Warna yang dihasilkan dari campuran merah dan putih adalah?",
    answers: [
      "Hijau",
      "Ungu",
      "Pink",
      "Cokelat"
    ],
    correct: 2
  },

  {
    question: "Hewan terbesar di dunia adalah?",
    answers: [
      "Gajah",
      "Paus biru",
      "Jerapah",
      "Hiu"
    ],
    correct: 1
  },

  {
    question: "Alat yang digunakan untuk melihat benda yang sangat jauh adalah?",
    answers: [
      "Mikroskop",
      "Teleskop",
      "Termometer",
      "Kamera"
    ],
    correct: 1
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
