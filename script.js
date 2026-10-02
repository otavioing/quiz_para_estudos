const perguntas = [
    {
        pergunta: "O que é uma classe abstrata em C#?",
        respostas: [
            "Uma classe que não pode possuir métodos",
            "Uma classe que serve como base para outras classes e não pode ser instanciada diretamente",
            "Uma classe que só pode ser usada por interfaces",
            "Uma classe que obrigatoriamente possui apenas atributos privados"
        ],
        correta: 1
    },

    {
        pergunta: "No código apresentado, qual é a função da classe Transporte?",
        respostas: [
            "Criar diretamente os objetos Carro, Bicicleta e Aviao",
            "Servir como classe base para os diferentes tipos de transporte",
            "Armazenar os valores das distâncias",
            "Controlar exclusivamente o método mover()"
        ],
        correta: 1
    },

    {
        pergunta: "Por que a classe Transporte foi declarada como abstract?",
        respostas: [
            "Porque ela não pode ser usada como classe base",
            "Porque ela não pode possuir métodos",
            "Porque ela serve como modelo/base e não deve ser instanciada diretamente",
            "Porque todos os seus métodos precisam ser privados"
        ],
        correta: 2
    },

    {
        pergunta: "O que significa o método abaixo na classe Transporte?",
        respostas: [
            "public abstract double CalcularTempoViagem(double distancia);",
            "O método possui uma implementação padrão",
            "O método é obrigatório para todas as classes derivadas e deverá ser implementado por elas",
            "O método só pode ser utilizado pela classe Transporte",
            "O método não pode receber parâmetros"
        ],
        correta: 1
    },

    {
        pergunta: "Qual palavra-chave indica que um método é abstrato em C#?",
        respostas: [
            "virtual",
            "override",
            "abstract",
            "interface"
        ],
        correta: 2
    },

    {
        pergunta: "O que a palavra-chave override significa no método CalcularTempoViagem()?",
        respostas: [
            "Que o método está sendo sobrescrito na classe derivada",
            "Que o método é privado",
            "Que o método não pode ser alterado",
            "Que o método pertence a uma interface"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a relação entre Carro e Transporte no código?",
        respostas: [
            "Carro implementa Transporte",
            "Carro herda de Transporte",
            "Transporte herda de Carro",
            "Carro é uma interface de Transporte"
        ],
        correta: 1
    },

    {
        pergunta: "O que significa a declaração 'public class Carro : Transporte, IVeiculo'?",
        respostas: [
            "Carro é uma interface que herda de duas classes",
            "Carro herda de Transporte e implementa a interface IVeiculo",
            "Carro implementa duas interfaces",
            "Carro é uma classe abstrata"
        ],
        correta: 1
    },

    {
        pergunta: "O que é uma interface em C#?",
        respostas: [
            "Um contrato que define membros que uma classe deve implementar",
            "Uma classe que sempre pode ser instanciada",
            "Um tipo especial de variável",
            "Um banco de dados"
        ],
        correta: 0
    },

    {
        pergunta: "No código apresentado, qual método é definido pela interface IVeiculo?",
        respostas: [
            "exibirtipo()",
            "CalcularTempoViagem()",
            "mover()",
            "Main()"
        ],
        correta: 2
    },

    {
        pergunta: "O que uma classe que implementa IVeiculo deve fazer?",
        respostas: [
            "Implementar o método mover() definido pela interface",
            "Criar uma nova interface",
            "Herda obrigatoriamente de Bicicleta",
            "Implementar apenas o método exibirtipo()"
        ],
        correta: 0
    },

    {
        pergunta: "Qual das classes abaixo implementa a interface IVeiculo?",
        respostas: [
            "Somente Carro",
            "Somente Bicicleta",
            "Somente Aviao",
            "Carro, Bicicleta e Aviao"
        ],
        correta: 3
    },

    {
        pergunta: "Qual é o objetivo do método mover() no exemplo?",
        respostas: [
            "Calcular o tempo de viagem",
            "Exibir uma mensagem indicando que o transporte está se movendo",
            "Calcular a distância",
            "Criar um novo objeto"
        ],
        correta: 1
    },

    {
        pergunta: "Qual método calcula o tempo de viagem dos transportes?",
        respostas: [
            "mover()",
            "exibirtipo()",
            "CalcularTempoViagem()",
            "Main()"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é a velocidade utilizada pelo Carro no cálculo?",
        respostas: [
            "20",
            "100",
            "500",
            "50"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é a velocidade utilizada pela Bicicleta no cálculo?",
        respostas: [
            "20",
            "100",
            "200",
            "500"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a velocidade utilizada pelo Aviao no cálculo?",
        respostas: [
            "20",
            "100",
            "300",
            "500"
        ],
        correta: 3
    },

    {
        pergunta: "Se a distância for 200 km, quanto tempo o Carro levará segundo o código?",
        respostas: [
            "1 hora",
            "2 horas",
            "10 horas",
            "20 horas"
        ],
        correta: 1
    },

    {
        pergunta: "Se a distância for 200 km, quanto tempo a Bicicleta levará segundo o código?",
        respostas: [
            "2 horas",
            "5 horas",
            "10 horas",
            "20 horas"
        ],
        correta: 2
    },

    {
        pergunta: "Se a distância for 1000 km, quanto tempo o Aviao levará segundo o código?",
        respostas: [
            "2 horas",
            "5 horas",
            "10 horas",
            "20 horas"
        ],
        correta: 0
    },

    {
        pergunta: "O que o método exibirtipo() faz?",
        respostas: [
            "Calcula a velocidade do transporte",
            "Exibe o tipo de transporte utilizando GetType().Name",
            "Cria um novo transporte",
            "Move o transporte"
        ],
        correta: 1
    },

    {
        pergunta: "O que GetType().Name retorna no método exibirtipo()?",
        respostas: [
            "O valor da distância",
            "O nome do método atual",
            "O nome do tipo/classe do objeto",
            "O nome do namespace"
        ],
        correta: 2
    },

    {
        pergunta: "Se o objeto for criado como 'Carro c1 = new Carro();', o que GetType().Name retornará?",
        respostas: [
            "Transporte",
            "IVeiculo",
            "Carro",
            "c1"
        ],
        correta: 2
    },

    {
        pergunta: "O que significa 'Carro c1 = new Carro();'?",
        respostas: [
            "Cria um objeto da classe Carro e armazena sua referência em c1",
            "Cria uma interface chamada c1",
            "Cria uma classe chamada Carro",
            "Declara uma variável do tipo Transporte"
        ],
        correta: 0
    },

    {
        pergunta: "Qual palavra-chave é utilizada para criar um novo objeto em C#?",
        respostas: [
            "create",
            "object",
            "new",
            "instance"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é a função do 'using ConsoleApp5;' no Program.cs?",
        respostas: [
            "Criar a classe ConsoleApp5",
            "Permitir o uso de tipos pertencentes ao namespace ConsoleApp5",
            "Criar um novo objeto",
            "Executar o programa"
        ],
        correta: 1
    },

    {
        pergunta: "O que significa 'namespace ConsoleApp5'?",
        respostas: [
            "É uma variável global",
            "É uma forma de organizar classes e outros tipos relacionados",
            "É uma interface",
            "É um método obrigatório"
        ],
        correta: 1
    },

    {
        pergunta: "Qual método é executado para mover o objeto Carro?",
        respostas: [
            "c1.mover()",
            "c1.CalcularTempoViagem()",
            "c1.exibirtipo()",
            "Carro.mover()"
        ],
        correta: 0
    },

    {
        pergunta: "O que acontece quando o comando 'c1.mover();' é executado?",
        respostas: [
            "O programa calcula a distância",
            "É exibida a mensagem 'O carro está se movendo.'",
            "É criado outro carro",
            "É calculado o tempo de viagem"
        ],
        correta: 1
    },

    {
        pergunta: "Qual conceito de POO está diretamente relacionado ao fato de Carro, Bicicleta e Aviao possuírem diferentes implementações de CalcularTempoViagem()?",
        respostas: [
            "Encapsulamento",
            "Polimorfismo",
            "Composição",
            "Sobrecarga de variável"
        ],
        correta: 1
    },

    {
        pergunta: "No código, Carro, Bicicleta e Aviao possuem o mesmo nome de método, mas comportamentos diferentes. Isso é um exemplo de:",
        respostas: [
            "Polimorfismo",
            "Encapsulamento",
            "Abstração de variável",
            "Herança múltipla de classes"
        ],
        correta: 0
    },

    {
        pergunta: "Qual conceito permite que Carro, Bicicleta e Aviao reutilizem características da classe Transporte?",
        respostas: [
            "Herança",
            "Interface",
            "Sobrecarga",
            "Construtor"
        ],
        correta: 0
    },

    {
        pergunta: "Qual conceito está presente quando a classe Transporte define apenas que CalcularTempoViagem deve existir, deixando a implementação para as classes filhas?",
        respostas: [
            "Abstração",
            "Encapsulamento",
            "Sobrecarga",
            "Instanciação"
        ],
        correta: 0
    },

    {
        pergunta: "Qual destas afirmações sobre uma classe abstrata é verdadeira?",
        respostas: [
            "Ela sempre pode ser instanciada com new",
            "Ela não pode conter métodos",
            "Ela pode possuir métodos concretos e métodos abstratos",
            "Ela só pode possuir atributos públicos"
        ],
        correta: 2
    },

    {
        pergunta: "É possível fazer 'Transporte t = new Transporte();' no código apresentado?",
        respostas: [
            "Sim, porque Transporte é uma classe pública",
            "Sim, porque toda classe pode ser instanciada",
            "Não, porque Transporte é uma classe abstrata",
            "Não, porque Transporte é uma interface"
        ],
        correta: 2
    },

    {
        pergunta: "Por que as classes Carro, Bicicleta e Aviao precisam implementar CalcularTempoViagem()?",
        respostas: [
            "Porque o método foi declarado como abstract na classe Transporte",
            "Porque o método está dentro da interface IVeiculo",
            "Porque todo método precisa ser implementado três vezes",
            "Porque o Program.cs exige"
        ],
        correta: 0
    },

    {
        pergunta: "Qual dos métodos abaixo pertence à interface IVeiculo?",
        respostas: [
            "CalcularTempoViagem(double distancia)",
            "exibirtipo()",
            "mover()",
            "GetType().Name"
        ],
        correta: 2
    },

    {
        pergunta: "Qual dos métodos abaixo pertence à classe abstrata Transporte?",
        respostas: [
            "mover()",
            "CalcularTempoViagem(double distancia)",
            "Main()",
            "Console.WriteLine()"
        ],
        correta: 1
    },

    {
        pergunta: "O que acontece se uma classe herdar de Transporte e não implementar o método abstrato CalcularTempoViagem()?",
        respostas: [
            "Nada, o método será criado automaticamente",
            "A classe terá que ser abstrata ou ocorrerá um erro de compilação",
            "O método será executado com valor 0",
            "A classe automaticamente herdará a implementação do Carro"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é a diferença principal entre herança e implementação de interface no código?",
        respostas: [
            "Herança permite derivar de uma classe, enquanto a interface define um contrato que a classe deve implementar",
            "Não existe diferença",
            "Interface sempre substitui uma classe abstrata",
            "Herança serve apenas para criar objetos"
        ],
        correta: 0
    },

    {
        pergunta: "Uma classe em C# pode herdar de mais de uma classe ao mesmo tempo?",
        respostas: [
            "Sim, sempre",
            "Sim, desde que todas sejam abstratas",
            "Não, C# não permite herança múltipla de classes",
            "Somente se usar override"
        ],
        correta: 2
    },

    {
        pergunta: "No código apresentado, como Carro consegue ter uma classe base e também implementar uma interface?",
        respostas: [
            "Carro : Transporte, IVeiculo",
            "Carro : Transporte + IVeiculo",
            "Carro extends Transporte implements IVeiculo",
            "Carro -> Transporte -> IVeiculo"
        ],
        correta: 0
    },

    {
        pergunta: "O que o comando double.Parse(Console.ReadLine()) faz?",
        respostas: [
            "Lê uma entrada do usuário e converte o texto para double",
            "Converte um número para string",
            "Cria um objeto double",
            "Lê apenas números inteiros"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é o tipo da variável 'distancia' no Program.cs?",
        respostas: [
            "int",
            "string",
            "double",
            "float"
        ],
        correta: 2
    },

    {
        pergunta: "O que o comando Console.WriteLine() faz?",
        respostas: [
            "Lê informações do teclado",
            "Exibe informações no console",
            "Cria uma classe",
            "Converte tipos de dados"
        ],
        correta: 1
    },

    {
        pergunta: "Qual será o resultado de Carro.CalcularTempoViagem(500) considerando o código apresentado?",
        respostas: [
            "0,2 horas",
            "5 horas",
            "50 horas",
            "500 horas"
        ],
        correta: 1
    },

    {
        pergunta: "Qual será o resultado de Bicicleta.CalcularTempoViagem(100) considerando o código apresentado?",
        respostas: [
            "2 horas",
            "5 horas",
            "10 horas",
            "20 horas"
        ],
        correta: 1
    },

    {
        pergunta: "Qual será o resultado de Aviao.CalcularTempoViagem(2500) considerando o código apresentado?",
        respostas: [
            "2 horas",
            "5 horas",
            "10 horas",
            "50 horas"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é a fórmula utilizada pelo Carro para calcular o tempo de viagem?",
        respostas: [
            "distancia * 100",
            "distancia / 100",
            "100 / distancia",
            "distancia + 100"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é a fórmula utilizada pela Bicicleta para calcular o tempo de viagem?",
        respostas: [
            "distancia / 20",
            "distancia / 100",
            "distancia * 20",
            "20 / distancia"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a fórmula utilizada pelo Aviao para calcular o tempo de viagem?",
        respostas: [
            "distancia / 20",
            "distancia / 100",
            "distancia / 500",
            "500 / distancia"
        ],
        correta: 2
    },

    {
        pergunta: "O que representa o parâmetro 'double distancia' no método CalcularTempoViagem()?",
        respostas: [
            "O tipo do transporte",
            "A distância informada que será utilizada no cálculo",
            "A velocidade do transporte",
            "O nome do objeto"
        ],
        correta: 1
    },

    {
        pergunta: "Qual conceito permite que a mesma chamada 'CalcularTempoViagem()' tenha resultados diferentes dependendo do objeto?",
        respostas: [
            "Polimorfismo",
            "Encapsulamento",
            "Namespace",
            "Construtor"
        ],
        correta: 0
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

