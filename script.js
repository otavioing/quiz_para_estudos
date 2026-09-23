const perguntas = [
  {
    pergunta: "O que é um Sistema Operacional (SO)?",
    respostas: [
      "Um dispositivo responsável por armazenar arquivos",
      "Um software que gerencia os dispositivos do sistema e atua como interface entre usuário e hardware",
      "Um programa utilizado apenas para acessar a internet",
      "Um hardware responsável pelo processamento de dados"
    ],
    correta: 1
  },
  {
    pergunta: "Quais são as duas principais funções de um Sistema Operacional?",
    respostas: [
      "Interface/Abstração e Gerenciador de Recursos",
      "Processamento e Armazenamento",
      "Segurança e Internet",
      "Memória e Arquivos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função de Interface/Abstração de um Sistema Operacional?",
    respostas: [
      "Aumentar a velocidade da CPU",
      "Esconder a complexidade do hardware para o usuário e programador",
      "Criar novos dispositivos de hardware",
      "Executar somente programas do sistema"
    ],
    correta: 1
  },
  {
    pergunta: "O que faz o SO como Gerenciador de Recursos?",
    respostas: [
      "Aloca CPU, memória e dispositivos de Entrada/Saída entre as aplicações",
      "Impede que os programas utilizem memória",
      "Substitui completamente o hardware",
      "Executa apenas uma aplicação por vez"
    ],
    correta: 0
  },
  {
    pergunta: "Em qual modo as aplicações normalmente são executadas?",
    respostas: [
      "Modo Kernel",
      "Modo Núcleo",
      "Modo Usuário",
      "Modo Hardware"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é uma característica do Modo Usuário (User Mode)?",
    respostas: [
      "Possui acesso total ao hardware",
      "Executa instruções privilegiadas",
      "As aplicações não possuem acesso direto ao hardware",
      "É o espaço onde o núcleo do SO é executado"
    ],
    correta: 2
  },
  {
    pergunta: "O que caracteriza o Modo Kernel (Kernel Mode)?",
    respostas: [
      "É o espaço onde as aplicações comuns são executadas",
      "Possui acesso total ao hardware e pode executar instruções privilegiadas",
      "Não possui acesso à memória",
      "Executa somente programas de usuário"
    ],
    correta: 1
  },
  {
    pergunta: "O que são sistemas operacionais Monoprogramáveis ou Monotarefa?",
    respostas: [
      "Sistemas que executam várias tarefas simultaneamente",
      "Sistemas que possuem vários processadores",
      "Sistemas que executam apenas uma tarefa por vez",
      "Sistemas que funcionam somente em rede"
    ],
    correta: 2
  },
  {
    pergunta: "Nos sistemas Monoprogramáveis/Monotarefa, os recursos do sistema ficam:",
    respostas: [
      "Compartilhados entre vários programas",
      "Dedicados ao programa atual",
      "Desativados durante a execução",
      "Disponíveis somente para a rede"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza um sistema Multiprogramável ou Multitarefa?",
    respostas: [
      "Executa somente um programa por vez",
      "Possui obrigatoriamente dois processadores",
      "Compartilha recursos entre várias aplicações e usuários de forma concorrente",
      "Não permite o compartilhamento de memória"
    ],
    correta: 2
  },
  {
    pergunta: "O que caracteriza um sistema Multiprocessado?",
    respostas: [
      "Possui dois ou mais processadores (CPUs)",
      "Executa apenas uma tarefa",
      "Possui apenas um processador",
      "Funciona somente sem conexão de rede"
    ],
    correta: 0
  },
  {
    pergunta: "O que caracteriza um sistema fortemente acoplado?",
    respostas: [
      "Possui computadores independentes conectados por rede",
      "Possui múltiplos processadores que compartilham uma única memória física e um único SO",
      "Possui apenas um processador",
      "Possui vários sistemas operacionais independentes na mesma máquina"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza um sistema fracamente acoplado?",
    respostas: [
      "Múltiplos processadores compartilham uma única memória física",
      "Sistemas independentes conectados por rede funcionando em conjunto",
      "Um único computador executando vários programas",
      "Um único processador compartilhando várias memórias"
    ],
    correta: 1
  },
  {
    pergunta: "Qual das opções apresenta exemplos de sistemas de uso específico?",
    respostas: [
      "Mainframes, servidores, sistemas distribuídos, sistemas de tempo real e sistemas embarcados",
      "Somente computadores pessoais e smartphones",
      "Somente sistemas monotarefa",
      "Apenas sistemas utilizados para jogos"
    ],
    correta: 0
  },
  {
    pergunta: "O que caracteriza um Sistema de Tempo Real?",
    respostas: [
      "Ele executa apenas uma tarefa",
      "Ele não possui memória",
      "Prazos rígidos de execução não podem falhar",
      "Ele funciona somente conectado à internet"
    ],
    correta: 2
  },
  {
    pergunta: "O que é um processo?",
    respostas: [
      "Um arquivo armazenado no computador",
      "Um programa em execução contendo dados de entrada, saída e um estado",
      "Uma parte física do processador",
      "Um dispositivo de entrada"
    ],
    correta: 1
  },
  {
    pergunta: "Em qual estado um processo está sendo criado ou carregado na memória?",
    respostas: [
      "Pronto",
      "Executando",
      "Novo",
      "Terminado"
    ],
    correta: 2
  },
  {
    pergunta: "Em qual estado o processo está em memória aguardando a alocação do processador?",
    respostas: [
      "Pronto",
      "Novo",
      "Suspenso",
      "Terminado"
    ],
    correta: 0
  },
  {
    pergunta: "Em qual estado o processo está sendo processado pela CPU naquele momento?",
    respostas: [
      "Pronto",
      "Executando",
      "Suspenso",
      "Novo"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza o estado Suspenso, Espera ou Bloqueado?",
    respostas: [
      "O processo terminou sua execução",
      "O processo está aguardando um evento de E/S ou recurso externo",
      "O processo está sendo executado pela CPU",
      "O processo acabou de ser criado"
    ],
    correta: 1
  },
  {
    pergunta: "O que acontece com um processo no estado Terminado?",
    respostas: [
      "Ele aguarda a CPU",
      "Ele está sendo criado",
      "Sua execução foi finalizada e ele está pronto para liberar memória",
      "Ele aguarda um evento de Entrada/Saída"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do escalonador de processos?",
    respostas: [
      "Criar novos processadores",
      "Decidir qual processo da fila de Pronto ocupará a CPU",
      "Controlar somente a memória",
      "Encerrar todos os processos"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza um algoritmo de escalonamento não-preemptivo?",
    respostas: [
      "O SO interrompe obrigatoriamente o processo",
      "O processo retém a CPU até terminar sua execução espontaneamente",
      "Todos os processos são executados ao mesmo tempo",
      "O processo nunca utiliza a CPU"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza um algoritmo de escalonamento preemptivo?",
    respostas: [
      "O processo nunca pode ser interrompido",
      "O SO pode interromper forçadamente o processo em execução",
      "A CPU executa somente um processo durante todo o sistema",
      "Os processos são executados somente na ordem de chegada"
    ],
    correta: 1
  },
  {
    pergunta: "O que significa FIFO (First-In, First-Out)?",
    respostas: [
      "O último processo a chegar é executado primeiro",
      "Os processos são atendidos na ordem de chegada",
      "O processo mais curto sempre é executado primeiro",
      "Os processos são escolhidos por prioridade"
    ],
    correta: 1
  },
  {
    pergunta: "O algoritmo FIFO é:",
    respostas: [
      "Preemptivo",
      "Não-preemptivo",
      "Sempre baseado em prioridade",
      "Baseado em quantum"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é uma desvantagem do algoritmo FIFO?",
    respostas: [
      "Não consegue executar processos longos",
      "Um processo longo na frente pode atrasar processos curtos",
      "Sempre causa starvation de processos curtos",
      "Não utiliza a CPU"
    ],
    correta: 1
  },
  {
    pergunta: "Como funciona o algoritmo SJF (Shortest Job First)?",
    respostas: [
      "Executa primeiro o processo com maior prioridade",
      "Executa primeiro o processo que chegou por último",
      "Executa primeiro o processo com menor tempo de execução estimado",
      "Executa todos os processos simultaneamente"
    ],
    correta: 2
  },
  {
    pergunta: "O algoritmo SJF é:",
    respostas: [
      "Preemptivo",
      "Não-preemptivo",
      "Baseado em quantum",
      "Exclusivamente distribuído"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é uma possível desvantagem do SJF?",
    respostas: [
      "Processos longos podem sofrer postergação (starvation)",
      "Processos curtos nunca são executados",
      "Não consegue ordenar processos",
      "Sempre causa excesso de trocas de contexto"
    ],
    correta: 0
  },
  {
    pergunta: "Como funciona o algoritmo Round-Robin (Circular)?",
    respostas: [
      "Executa somente o processo de maior prioridade",
      "Cada processo recebe uma fatia limitada de tempo de CPU",
      "Executa primeiro o processo mais longo",
      "Executa os processos sem interrupções"
    ],
    correta: 1
  },
  {
    pergunta: "O algoritmo Round-Robin é:",
    respostas: [
      "Não-preemptivo",
      "Preemptivo",
      "Exclusivamente baseado em prioridade",
      "Monotarefa"
    ],
    correta: 1
  },
  {
    pergunta: "No Round-Robin, como é chamada a fatia de tempo atribuída a cada processo?",
    respostas: [
      "Buffer",
      "Quantum ou time-slice",
      "Thread",
      "Kernel"
    ],
    correta: 1
  },
  {
    pergunta: "O que pode acontecer quando o quantum do Round-Robin é muito pequeno?",
    respostas: [
      "O sistema deixa de executar processos",
      "Há excesso de trocas de contexto",
      "Todos os processos terminam imediatamente",
      "Os processos passam a ser executados por prioridade"
    ],
    correta: 1
  },
  {
    pergunta: "O que pode acontecer quando o quantum do Round-Robin é muito grande?",
    respostas: [
      "A interatividade pode ser degradada",
      "A CPU deixa de funcionar",
      "Os processos passam a ser monotarefa",
      "Todos os processos entram em estado Novo"
    ],
    correta: 0
  },
  {
    pergunta: "Como funciona o algoritmo de escalonamento por Prioridade?",
    respostas: [
      "Executa os processos com base nas prioridades atribuídas",
      "Executa sempre o processo mais curto",
      "Executa somente processos que chegaram primeiro",
      "Divide a CPU igualmente entre todos os processos"
    ],
    correta: 0
  },
  {
    pergunta: "Segundo o resumo, o algoritmo de Prioridade é:",
    respostas: [
      "Preemptivo",
      "Não-preemptivo",
      "Baseado em quantum",
      "Exclusivamente multitarefa"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza o algoritmo Circular com Prioridade?",
    respostas: [
      "Combina fatias de tempo com filas por prioridade",
      "Executa somente o primeiro processo da fila",
      "Executa sempre o processo mais longo",
      "Não permite interrupção de processos"
    ],
    correta: 0
  },
  {
    pergunta: "Segundo o resumo, o Circular com Prioridade é:",
    respostas: [
      "Não-preemptivo",
      "Preemptivo",
      "Monotarefa",
      "Exclusivamente distribuído"
    ],
    correta: 1
  },
  {
    pergunta: "Segundo o resumo, qual abordagem é apresentada como base para SOs de propósito geral, como Windows e Linux?",
    respostas: [
      "FIFO",
      "SJF",
      "Circular com Prioridade",
      "Monotarefa"
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

