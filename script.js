const questions = [
  {
    q: "Apa yang selalu naik tapi nggak pernah turun?",
    a: ["Tangga", "Umur", "Balon", "Harga cabe"]
  },
  {
    q: "Kalau ayam bisa terbang, kenapa dia masih naik motor?",
    a: ["Biar keren", "Karena sayapnya capek", "Karena motor cicilan", "Karena pengen touring"]
  },
  {
    q: "Buah apa yang hobinya nyanyi dangdut?",
    a: ["Pepaya", "Nanas", "Jambu", "Salak — karena 'salak dong sayang~'"]
  },
  {
    q: "Apa bedanya kamu sama kalender?",
    a: ["Kalender ada tanggalnya, kamu enggak", "Kamu lebih berat", "Kalender suka ganti baju", "Nggak ada bedanya"]
  },
  {
    q: "Kenapa ikan nggak bisa ngomong?",
    a: ["Karena bisu", "Karena air masuk ke mulut", "Karena malu", "Karena nggak punya kuota"]
  }
];

let index = 0;
let timerInterval;
const timerDisplay = document.getElementById("timer");
const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const ting = document.getElementById("ting");

function showQuestion() {
  const q = questions[index];
  questionElement.textContent = q.q;
  optionsList.innerHTML = "";
  q.a.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt;
    optionsList.appendChild(li);
  });
  resetTimer();
}

function resetTimer() {
  clearInterval(timerInterval);
  let time = 30;
  timerDisplay.textContent = time;
  timerInterval = setInterval(() => {
    time--;
    timerDisplay.textContent = time;
    if (time <= 0) {
      clearInterval(timerInterval);
      ting.play();
    }
  }, 1000);
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % questions.length;
  showQuestion();
});

window.onload = () => {
  document.body.requestFullscreen?.();
  showQuestion();
};
// --- MUSIK LATAR OTOMATIS SAAT PENGGUNA BERINTERAKSI --- //
let musicStarted = false;
function startMusic() {
  if (!musicStarted) {
    const bg = document.getElementById("bg-music");
    bg.volume = 0.5; // volume setengah biar lembut
    bg.play().catch(err => console.log("Autoplay ditolak:", err));
    musicStarted = true;
  }
}
document.body.addEventListener("click", startMusic);
document.body.addEventListener("touchstart", startMusic);
