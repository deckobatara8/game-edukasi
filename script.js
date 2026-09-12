// ======================================================
// EDUQUEST - GAME EDUKASI 2D
// HTML + CSS + JAVASCRIPT
// ======================================================


// ======================================================
// 1. KONFIGURASI GOOGLE SHEETS
// ======================================================

// Masukkan URL Web App Google Apps Script kamu di sini.
// Contoh:
// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/XXXXX/exec";

const GOOGLE_SCRIPT_URL =
  "MASUKKAN_URL_GOOGLE_APPS_SCRIPT_DI_SINI";


// ======================================================
// 2. BANK SOAL
// ======================================================

const questions = [

  // =========================
  // MATEMATIKA
  // =========================

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
    question: "Berapakah hasil dari 9 × 6?",
    answers: [
      "45",
      "54",
      "56",
      "63"
    ],
    correct: 1
  },

  {
    question: "Berapakah hasil dari 100 ÷ 4?",
    answers: [
      "20",
      "25",
      "30",
      "40"
    ],
    correct: 1
  },

  {
    question: "Berapakah hasil dari 15 - 8?",
    answers: [
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 2
  },

  {
    question: "Berapakah hasil dari 12 × 5?",
    answers: [
      "50",
      "55",
      "60",
      "65"
    ],
    correct: 2
  },

  {
    question: "Berapakah hasil dari 81 ÷ 9?",
    answers: [
      "7",
      "8",
      "9",
      "10"
    ],
    correct: 2
  },

  {
    question: "Berapakah hasil dari 25 + 35?",
    answers: [
      "50",
      "55",
      "60",
      "65"
    ],
    correct: 2
  },

  {
    question: "Berapakah hasil dari 50 - 23?",
    answers: [
      "27",
      "28",
      "29",
      "30"
    ],
    correct: 0
  },

  {
    question: "Berapakah hasil dari 7 × 8?",
    answers: [
      "48",
      "54",
      "56",
      "64"
    ],
    correct: 2
  },

  {
    question: "Berapakah hasil dari 144 ÷ 12?",
    answers: [
      "10",
      "11",
      "12",
      "14"
    ],
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
      "Merah muda",
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


// ======================================================
// 3. VARIABEL GAME
// ======================================================

// Jumlah soal yang dimainkan setiap game
const totalQuestions = 10;

// Soal yang sudah dipilih secara acak
let gameQuestions = [];

// Nomor soal sekarang
let questionNumber = 0;

// Data pemain
let playerName = "";

// Statistik game
let score = 0;
let lives = 3;
let level = 1;

let correctAnswers = 0;
let wrongAnswers = 0;

// Soal aktif
let currentQuestion = null;

// Mencegah pemain memilih jawaban dua kali
let answered = false;


// ======================================================
// 4. MULAI GAME
// ======================================================

function startGame() {

  const input =
    document.getElementById("playerName");

  if (!input) {
    console.error(
      "Element #playerName tidak ditemukan."
    );
    return;
  }

  playerName =
    input.value.trim();

  // Validasi nama
  if (playerName === "") {

    alert(
      "Silakan masukkan nama terlebih dahulu!"
    );

    input.focus();

    return;
  }


  // ==========================
  // RESET GAME
  // ==========================

  score = 0;

  lives = 3;

  level = 1;

  correctAnswers = 0;

  wrongAnswers = 0;

  questionNumber = 0;

  currentQuestion = null;

  answered = false;


  // ==========================
  // ACAK SOAL
  // ==========================

  gameQuestions =
    [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalQuestions);


  console.log(
    "Soal yang dimainkan:",
    gameQuestions
  );


  // ==========================
  // PINDAH KE GAME
  // ==========================

  const startScreen =
    document.getElementById(
      "startScreen"
    );

  const gameScreen =
    document.getElementById(
      "gameScreen"
    );

  if (startScreen) {
    startScreen.classList.add(
      "hidden"
    );
  }

  if (gameScreen) {
    gameScreen.classList.remove(
      "hidden"
    );
  }


  // Tampilkan nama pemain
  const nameDisplay =
    document.getElementById(
      "nameDisplay"
    );

  if (nameDisplay) {
    nameDisplay.textContent =
      playerName;
  }


  // Update statistik
  updateStats();
}


// ======================================================
// 5. MENAMPILKAN PERTANYAAN
// ======================================================

function showQuestion() {

  // Cek apakah soal masih tersedia
  if (
    !gameQuestions ||
    gameQuestions.length === 0
  ) {

    console.error(
      "Belum ada soal yang dipilih."
    );

    return;
  }


  // Jika semua soal selesai
  if (
    questionNumber >=
    gameQuestions.length
  ) {

    endGame();

    return;
  }


  // Ambil soal saat ini
  currentQuestion =
    gameQuestions[questionNumber];


  // Validasi
  if (!currentQuestion) {

    console.error(
      "Soal tidak ditemukan."
    );

    return;
  }


  answered = false;


  // ==========================
  // TAMPILKAN MODAL
  // ==========================

  const modal =
    document.getElementById(
      "quizModal"
    );

  if (modal) {

    modal.classList.remove(
      "hidden"
    );

  }


  // ==========================
  // TAMPILKAN TEKS SOAL
  // ==========================

  const questionText =
    document.getElementById(
      "questionText"
    );

  if (questionText) {

    questionText.textContent =
      `Soal ${questionNumber + 1} dari ${totalQuestions}: ${currentQuestion.question}`;

  }


  // ==========================
  // RESET FEEDBACK
  // ==========================

  const feedback =
    document.getElementById(
      "feedback"
    );

  if (feedback) {

    feedback.textContent = "";

    feedback.style.color =
      "#333";

  }


  // ==========================
  // RESET TOMBOL LANJUT
  // ==========================

  const nextButton =
    document.getElementById(
      "nextButton"
    );

  if (nextButton) {

    nextButton.classList.add(
      "hidden"
    );

  }


  // ==========================
  // BUAT PILIHAN JAWABAN
  // ==========================

  const answersContainer =
    document.getElementById(
      "answers"
    );

  if (!answersContainer) {

    console.error(
      "Element #answers tidak ditemukan."
    );

    return;
  }


  // Bersihkan jawaban sebelumnya
  answersContainer.innerHTML = "";


  // Buat tombol jawaban
  currentQuestion.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.type = "button";

      button.textContent =
        answer;

      button.className =
        "answer";

      button.addEventListener(
        "click",
        function () {

          checkAnswer(
            index,
            button
          );

        }
      );

      answersContainer.appendChild(
        button
      );

    }
  );

}


// ======================================================
// 6. CEK JAWABAN
// ======================================================

function checkAnswer(
  selectedIndex,
  selectedButton
) {

  // Cegah klik dua kali
  if (answered) {
    return;
  }

  answered = true;


  // ==========================
  // NONAKTIFKAN SEMUA JAWABAN
  // ==========================

  const allButtons =
    document.querySelectorAll(
      ".answer"
    );

  allButtons.forEach(
    button => {

      button.disabled = true;

    }
  );


  // ==========================
  // JAWABAN BENAR
  // ==========================

  if (
    selectedIndex ===
    currentQuestion.correct
  ) {

    selectedButton.classList.add(
      "correct"
    );

    score += 100;

    correctAnswers++;


    const feedback =
      document.getElementById(
        "feedback"
      );

    if (feedback) {

      feedback.textContent =
        "✅ Jawaban benar! +100 poin";

      feedback.style.color =
        "#27ae60";

    }

  }


  // ==========================
  // JAWABAN SALAH
  // ==========================

  else {

    selectedButton.classList.add(
      "wrong"
    );

    lives--;

    wrongAnswers++;

    score =
      Math.max(
        0,
        score - 50
      );


    // Tampilkan jawaban benar
    if (
      allButtons[
        currentQuestion.correct
      ]
    ) {

      allButtons[
        currentQuestion.correct
      ].classList.add(
        "correct"
      );

    }


    const feedback =
      document.getElementById(
        "feedback"
      );

    if (feedback) {

      feedback.textContent =
        "❌ Salah! Jawaban yang benar: " +
        currentQuestion.answers[
          currentQuestion.correct
        ];

      feedback.style.color =
        "#e74c3c";

    }

  }


  // ==========================
  // HITUNG LEVEL
  // ==========================

  level =
    Math.floor(score / 200) + 1;


  // Update statistik
  updateStats();


  // ==========================
  // TAMPILKAN TOMBOL LANJUT
  // ==========================

  const nextButton =
    document.getElementById(
      "nextButton"
    );

  if (nextButton) {

    nextButton.classList.remove(
      "hidden"
    );

  }

}


// ======================================================
// 7. SOAL BERIKUTNYA
// ======================================================

function closeQuestion() {

  // Tutup modal
  const modal =
    document.getElementById(
      "quizModal"
    );

  if (modal) {

    modal.classList.add(
      "hidden"
    );

  }


  // ==========================
  // CEK NYAWA
  // ==========================

  if (lives <= 0) {

    endGame();

    return;
  }


  // Tambahkan nomor soal
  questionNumber++;


  // ==========================
  // CEK APAKAH SOAL HABIS
  // ==========================

  if (
    questionNumber >=
    totalQuestions
  ) {

    endGame();

    return;
  }


  // ==========================
  // TAMPILKAN SOAL BERIKUTNYA
  // ==========================

  setTimeout(
    () => {

      showQuestion();

    },
    200
  );

}


// ======================================================
// 8. UPDATE STATISTIK
// ======================================================

function updateStats() {

  const scoreElement =
    document.getElementById(
      "score"
    );

  const livesElement =
    document.getElementById(
      "lives"
    );

  const levelElement =
    document.getElementById(
      "level"
    );


  if (scoreElement) {

    scoreElement.textContent =
      score;

  }


  if (livesElement) {

    livesElement.textContent =
      lives;

  }


  if (levelElement) {

    levelElement.textContent =
      level;

  }

}


// ======================================================
// 9. GAME SELESAI
// ======================================================

function endGame() {

  // Tutup modal jika masih terbuka
  const modal =
    document.getElementById(
      "quizModal"
    );

  if (modal) {

    modal.classList.add(
      "hidden"
    );

  }


  // Sembunyikan game
  const gameScreen =
    document.getElementById(
      "gameScreen"
    );

  if (gameScreen) {

    gameScreen.classList.add(
      "hidden"
    );

  }


  // Tampilkan hasil
  const resultScreen =
    document.getElementById(
      "resultScreen"
    );

  if (resultScreen) {

    resultScreen.classList.remove(
      "hidden"
    );

  }


  // Nama
  const resultName =
    document.getElementById(
      "resultName"
    );

  if (resultName) {

    resultName.textContent =
      playerName;

  }


  // Skor
  const finalScore =
    document.getElementById(
      "finalScore"
    );

  if (finalScore) {

    finalScore.textContent =
      score;

  }


  // ==========================
  // PESAN HASIL
  // ==========================

  const resultMessage =
    document.getElementById(
      "resultMessage"
    );

  let message = "";


  if (score >= 800) {

    message =
      "🏆 LUAR BIASA! Kamu adalah ahli!";

  }

  else if (score >= 600) {

    message =
      "🌟 Hebat! Pengetahuanmu sangat bagus!";

  }

  else if (score >= 400) {

    message =
      "👏 Bagus! Terus belajar dan tingkatkan lagi!";

  }

  else if (score >= 200) {

    message =
      "💪 Lumayan! Jangan menyerah, coba lagi!";

  }

  else {

    message =
      "📚 Tetap semangat! Belajar sedikit demi sedikit.";

  }


  if (resultMessage) {

    resultMessage.textContent =
      message;

  }


  // ==========================
  // SIMPAN KE GOOGLE SHEETS
  // ==========================

  saveToGoogleSheets();

}


// ======================================================
// 10. SIMPAN DATA KE GOOGLE SHEETS
// ======================================================

function saveToGoogleSheets() {

  // Jika URL belum dikonfigurasi
  if (
    GOOGLE_SCRIPT_URL ===
    "MASUKKAN_URL_GOOGLE_APPS_SCRIPT_DI_SINI"
  ) {

    console.warn(
      "Google Sheets belum dikonfigurasi."
    );

    return;
  }


  // ==========================
  // DATA YANG DIKIRIM
  // ==========================

  const data = {

    nama: playerName,

    skor: score,

    level: level,

    benar: correctAnswers,

    salah: wrongAnswers,

    nyawa: lives,

    jumlahSoal: totalQuestions,

    tanggal:
      new Date()
        .toLocaleString(
          "id-ID"
        )

  };


  console.log(
    "Mengirim data:",
    data
  );


  // ==========================
  // KIRIM KE APPS SCRIPT
  // ==========================

  fetch(
    GOOGLE_SCRIPT_URL,
    {

      method: "POST",

      mode: "no-cors",

      headers: {

        "Content-Type":
          "application/json"

      },

      body:
        JSON.stringify(data)

    }
  )

  .then(() => {

    console.log(
      "Data berhasil dikirim ke Google Sheets."
    );

  })

  .catch(
    error => {

      console.error(
        "Gagal mengirim data ke Google Sheets:",
        error
      );

    }
  );

}


// ======================================================
// 11. CEK SAAT HALAMAN SELESAI DIMUAT
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    console.log(
      "🎮 EduQuest berhasil dimuat!"
    );

    console.log(
      `📚 Jumlah bank soal: ${questions.length}`
    );

    console.log(
      `🎯 Soal per permainan: ${totalQuestions}`
    );


    // Pastikan modal tertutup
    const modal =
      document.getElementById(
        "quizModal"
      );

    if (modal) {

      modal.classList.add(
        "hidden"
      );

    }

  }
);
