const perguntas = [
    {
        pergunta: "O que é uma classe abstrata em C#?",
        respostas: [
            "Uma classe que não pode ser instanciada diretamente e serve como base para outras classes",
            "Uma classe que só possui atributos",
            "Uma classe que não pode possuir métodos",
            "Uma classe que só pode ser usada em interfaces"
        ],
        correta: 0
    },

    {
        pergunta: "No código apresentado, qual classe é abstrata?",
        respostas: [
            "Carro",
            "Bicicleta",
            "Transporte",
            "Aviao"
        ],
        correta: 2
    },

    {
        pergunta: "O que significa o método 'public abstract double CalcularTempoViagem(double distancia);'?",
        respostas: [
            "O método já possui uma implementação",
            "As classes filhas devem implementar esse método",
            "O método só pode ser usado pelo Program.cs",
            "O método é privado"
        ],
        correta: 1
    },

    {
        pergunta: "O que significa 'public class Carro : Transporte, IVeiculo'?",
        respostas: [
            "Carro herda de Transporte e implementa IVeiculo",
            "Carro herda de duas classes",
            "Carro é uma interface",
            "Carro é uma classe abstrata"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a função de uma interface no código?",
        respostas: [
            "Criar objetos automaticamente",
            "Definir um contrato que a classe deve implementar",
            "Substituir todas as classes abstratas",
            "Armazenar valores"
        ],
        correta: 1
    },

    {
        pergunta: "Qual método é definido pela interface IVeiculo?",
        respostas: [
            "CalcularTempoViagem()",
            "exibirtipo()",
            "mover()",
            "Main()"
        ],
        correta: 2
    },

    {
        pergunta: "Para que serve a palavra-chave 'override'?",
        respostas: [
            "Criar uma nova classe",
            "Sobrescrever um método herdado",
            "Criar uma interface",
            "Criar um objeto"
        ],
        correta: 1
    },

    {
        pergunta: "Qual conceito de POO está presente quando Carro, Bicicleta e Aviao possuem diferentes implementações de CalcularTempoViagem()?",
        respostas: [
            "Encapsulamento",
            "Herança",
            "Polimorfismo",
            "Construtor"
        ],
        correta: 2
    },

    {
        pergunta: "O que acontece em 'Carro c1 = new Carro();'?",
        respostas: [
            "É criada uma classe Carro",
            "É criado um objeto da classe Carro",
            "É criada uma interface",
            "É criado um método"
        ],
        correta: 1
    },

    {
        pergunta: "O que o método exibirtipo() faz?",
        respostas: [
            "Calcula o tempo da viagem",
            "Exibe o tipo do transporte",
            "Move o transporte",
            "Lê a distância"
        ],
        correta: 1
    },

    {
        pergunta: "Qual velocidade é utilizada pelo Carro no cálculo?",
        respostas: [
            "20",
            "100",
            "500",
            "1000"
        ],
        correta: 1
    },

    {
        pergunta: "Se a distância for 500 km, quanto tempo o Carro levará?",
        respostas: [
            "2 horas",
            "5 horas",
            "10 horas",
            "50 horas"
        ],
        correta: 1
    },

    {
        pergunta: "Se a distância for 100 km, quanto tempo a Bicicleta levará?",
        respostas: [
            "2 horas",
            "5 horas",
            "10 horas",
            "20 horas"
        ],
        correta: 1
    },

    {
        pergunta: "Se a distância for 1000 km, quanto tempo o Aviao levará?",
        respostas: [
            "1 hora",
            "2 horas",
            "5 horas",
            "10 horas"
        ],
        correta: 1
    },

    {
        pergunta: "É possível fazer 'Transporte t = new Transporte();' no código apresentado?",
        respostas: [
            "Sim, porque Transporte é pública",
            "Sim, porque toda classe pode ser instanciada",
            "Não, porque Transporte é abstrata",
            "Não, porque Transporte é uma interface"
        ],
        correta: 2
    }
];

const quizBody = document.getElementById("quizBody");
const resultPanel = document.getElementById("resultPanel");
const progressChip = document.getElementById("progressChip");
const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const optionsGrid = document.getElementById("optionsGrid");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const correctCountEl = document.getElementById("correctCount");
const wrongCountEl = document.getElementById("wrongCount");
const scorePercentEl = document.getElementById("scorePercent");
const timerFill = document.getElementById("timerFill");
const timerText = document.getElementById("timerText");
const totalTimeEl = document.getElementById("totalTime");
const startModal = document.getElementById("startModal");
const participantInput = document.getElementById("participantName");
const startBtn = document.getElementById("startButton");
const rankingListEl = document.getElementById("rankingList");
const clearRankingBtn = document.getElementById("clearRanking");
const summaryButton = document.getElementById("summaryButton");
const summaryModal = document.getElementById("summaryModal");
const closeSummaryButton = document.getElementById("closeSummaryButton");
const summaryContent = document.getElementById("summaryContent");

let participantName = null;

let currentQuestionIndex = 0;
let selectedAnswerIndex = null;
let score = 0;
let wrongAnswers = 0;
let answered = false;
let quizPerguntas = [];
// Timer / tempo
const QUESTION_TIME = 20; // segundos por pergunta (ajustável)
let timeLeft = QUESTION_TIME;
let timerInterval = null;
let totalTimeStart = null;

function validateQuestions(questionList) {
  if (!Array.isArray(questionList) || questionList.length === 0) {
    throw new Error("O array de perguntas não pode estar vazio.");
  }

  questionList.forEach((question, index) => {
    const hasValidShape =
      question &&
      typeof question.pergunta === "string" &&
      Array.isArray(question.respostas) &&
      question.respostas.length >= 2 &&
      Number.isInteger(question.correta) &&
      question.correta >= 0 &&
      question.correta < question.respostas.length;

    if (!hasValidShape) {
      throw new Error(
        `Pergunta inválida no índice ${index}. Cada item precisa ter pergunta, respostas e uma alternativa correta válida.`
      );
    }
  });
}

function shuffleQuestions(questionList) {
  const shuffledQuestions = [...questionList];

  for (let index = shuffledQuestions.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledQuestions[index], shuffledQuestions[randomIndex]] = [shuffledQuestions[randomIndex], shuffledQuestions[index]];
  }

  return shuffledQuestions;
}

// Embaralha as alternativas de uma pergunta mantendo o índice correto
function shuffleAnswersForQuestion(question) {
  const items = question.respostas.map((text, idx) => ({ text, idx }));

  for (let i = items.length - 1; i > 0; i -= 1) {
    const r = Math.floor(Math.random() * (i + 1));
    [items[i], items[r]] = [items[r], items[i]];
  }

  const newRespostas = items.map((it) => it.text);
  const newCorreta = items.findIndex((it) => it.idx === question.correta);

  return {
    pergunta: question.pergunta,
    respostas: newRespostas,
    correta: newCorreta,
  };
}

function updateProgress() {
  const currentNumber = currentQuestionIndex + 1;
  progressChip.textContent = `Pergunta ${currentNumber} de ${quizPerguntas.length}`;
  questionCount.textContent = `Pergunta ${currentNumber}`;
}

function clearFeedback() {
  feedback.textContent = "";
  feedback.className = "feedback";
}

function renderQuestion() {
  const currentQuestion = quizPerguntas[currentQuestionIndex];

  updateProgress();
  questionText.textContent = currentQuestion.pergunta;
  optionsGrid.innerHTML = "";
  clearFeedback();
  nextButton.disabled = true;
  selectedAnswerIndex = null;
  answered = false;

  currentQuestion.respostas.forEach((answerText, answerIndex) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-button";
    optionButton.textContent = answerText;
    optionButton.setAttribute("aria-pressed", "false");

    optionButton.addEventListener("click", () => selectAnswer(answerIndex, optionButton));

    optionsGrid.appendChild(optionButton);
  });

  // iniciar temporizador para a pergunta atual
  stopQuestionTimer();
  timeLeft = QUESTION_TIME;
  updateTimerUI();
  startQuestionTimer();

  // marca início do tempo total quando a primeira pergunta é renderizada
  if (!totalTimeStart) {
    totalTimeStart = Date.now();
  }
}

function selectAnswer(answerIndex, clickedButton) {
  if (answered) {
    return;
  }

  selectedAnswerIndex = answerIndex;
  nextButton.disabled = false;

  const optionButtons = [...optionsGrid.querySelectorAll(".option-button")];
  optionButtons.forEach((button, index) => {
    button.classList.toggle("selected", index === answerIndex);
    button.setAttribute("aria-pressed", index === answerIndex ? "true" : "false");
  });

  clickedButton.focus();
}

function confirmAnswer(forced = false) {
  // Se não houve seleção e não foi forçado (ex.: tempo esgotou), não confirma
  if (selectedAnswerIndex === null && !forced) {
    return;
  }

  const currentQuestion = quizPerguntas[currentQuestionIndex];
  const optionButtons = [...optionsGrid.querySelectorAll(".option-button")];
  const isCorrect = selectedAnswerIndex !== null && selectedAnswerIndex === currentQuestion.correta;

  answered = true;
  nextButton.disabled = false;
  stopQuestionTimer();

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    button.classList.remove("selected");

    if (index === currentQuestion.correta) {
      button.classList.add("correct");
    }

    if (selectedAnswerIndex !== null && index === selectedAnswerIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score += 1;
    feedback.textContent = "Você acertou.";
    feedback.classList.add("correct");
  } else {
    wrongAnswers += 1;
    if (forced && selectedAnswerIndex === null) {
      feedback.textContent = `Tempo esgotado. A resposta correta é: ${currentQuestion.respostas[currentQuestion.correta]}.`;
    } else {
      feedback.textContent = `Você errou. A resposta correta é: ${currentQuestion.respostas[currentQuestion.correta]}.`;
    }
    feedback.classList.add("wrong");
  }

  nextButton.textContent = currentQuestionIndex === quizPerguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
}

function startQuestionTimer() {
  if (timerInterval !== null) {
    return;
  }

  updateTimerUI();
  timerInterval = setInterval(() => {
    timeLeft -= 1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      updateTimerUI();
      clearInterval(timerInterval);
      timerInterval = null;
      // tempo esgotado: confirma como resposta errada
      if (!answered) {
        confirmAnswer(true);
      }
      return;
    }
    updateTimerUI();
  }, 1000);
}

function stopQuestionTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerUI() {
  const pct = Math.max(0, Math.min(1, timeLeft / QUESTION_TIME));
  if (timerFill) timerFill.style.width = `${Math.round(pct * 100)}%`;
  if (timerText) timerText.textContent = formatTime(timeLeft);
}

function renderSummary(summaryText) {
  if (!summaryText.trim()) {
    summaryContent.textContent = "O resumo ainda não possui conteúdo disponível.";
    return;
  }

  if (typeof marked === "undefined") {
    summaryContent.textContent = "Não foi possível interpretar o resumo em Markdown.";
    return;
  }

  summaryContent.innerHTML = marked.parse(summaryText, {
    breaks: true,
    gfm: true,
  });
}

async function openSummary() {
  stopQuestionTimer();
  summaryModal.classList.remove("hidden");
  summaryContent.textContent = "Carregando resumo...";
  closeSummaryButton.focus();

  try {
    const response = await fetch("resumo.md", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Resumo não encontrado");
    }
    renderSummary(await response.text());
  } catch (error) {
    summaryContent.textContent = "Não foi possível carregar o resumo agora. Verifique se o arquivo resumo.md está na pasta do quiz.";
  }
}

function closeSummary() {
  summaryModal.classList.add("hidden");
  if (!answered && timeLeft > 0) {
    startQuestionTimer();
  }
  summaryButton.focus();
}

function formatTime(seconds) {
  const s = Number(seconds) || 0;
  const mm = Math.floor(s / 60).toString().padStart(2, "0");
  const ss = (s % 60).toString().padStart(2, "0");
  return `${mm}:${ss}`;
}

function goToNextStep() {
  if (!answered) {
    confirmAnswer();
    return;
  }

  if (currentQuestionIndex < quizPerguntas.length - 1) {
    currentQuestionIndex += 1;
    nextButton.textContent = "Próxima pergunta";
    renderQuestion();
    return;
  }

  showResult();
}

function showResult() {
  const totalQuestions = quizPerguntas.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  // stop any running timer
  stopQuestionTimer();

  quizBody.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  correctCountEl.textContent = String(score);
  wrongCountEl.textContent = String(wrongAnswers);
  scorePercentEl.textContent = `${percentage}%`;
  progressChip.textContent = "Quiz concluído";

  // tempo total
  let totalElapsed = 0;
  if (totalTimeStart) {
    totalElapsed = Math.round((Date.now() - totalTimeStart) / 1000);
  }
  if (totalTimeEl) totalTimeEl.textContent = formatTime(totalElapsed);
  // salva no localStorage
  const record = {
    name: participantName || "Anônimo",
    correct: score,
    wrong: wrongAnswers,
    timeSeconds: totalElapsed,
    date: new Date().toISOString(),
  };
  saveRankingEntry(record);
  renderRanking();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  selectedAnswerIndex = null;
  score = 0;
  wrongAnswers = 0;
  answered = false;
  quizPerguntas = shuffleQuestions(perguntas).map(shuffleAnswersForQuestion);
  totalTimeStart = null;

  resultPanel.classList.add("hidden");
  quizBody.classList.remove("hidden");
  nextButton.textContent = "Próxima pergunta";

  renderQuestion();
}

validateQuestions(perguntas);

// inicializa ranking existente
renderRanking();

// não inicia o quiz até o usuário informar o nome
startBtn.addEventListener("click", () => {
  const name = (participantInput.value || "").trim();
  participantName = name || "Anônimo";
  // fechar modal
  if (startModal) startModal.style.display = "none";

  // preparar perguntas embaralhadas e embaralhar alternativas
  quizPerguntas = shuffleQuestions(perguntas).map(shuffleAnswersForQuestion);
  // iniciar
  renderQuestion();
});

nextButton.addEventListener("click", goToNextStep);
restartButton.addEventListener("click", restartQuiz);
summaryButton.addEventListener("click", openSummary);
closeSummaryButton.addEventListener("click", closeSummary);
summaryModal.addEventListener("click", (event) => {
  if (event.target === summaryModal) {
    closeSummary();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !summaryModal.classList.contains("hidden")) {
    closeSummary();
  }
});

if (clearRankingBtn) {
  clearRankingBtn.addEventListener("click", () => {
    localStorage.removeItem("quiz_ranking");
    renderRanking();
  });
}

// LocalStorage: salvar e renderizar ranking
function getRanking() {
  try {
    const raw = localStorage.getItem("quiz_ranking");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveRankingEntry(entry) {
  const list = getRanking();
  list.push(entry);
  // ordenar: mais acertos primeiro, depois menor tempo
  list.sort((a, b) => {
    if (b.correct !== a.correct) return b.correct - a.correct;
    return a.timeSeconds - b.timeSeconds;
  });
  localStorage.setItem("quiz_ranking", JSON.stringify(list));
}

function renderRanking() {
  const list = getRanking();
  if (!rankingListEl) return;
  rankingListEl.innerHTML = "";
  if (list.length === 0) {
    rankingListEl.innerHTML = "<li>Nenhum registro ainda</li>";
    return;
  }
  list.slice(0, 20).forEach((r) => {
    const li = document.createElement("li");
    const date = new Date(r.date).toLocaleString();
    li.textContent = `${r.name} — Acertos: ${r.correct}, Erros: ${r.wrong}, Tempo: ${formatTime(r.timeSeconds)} — ${date}`;
    rankingListEl.appendChild(li);
  });
}

