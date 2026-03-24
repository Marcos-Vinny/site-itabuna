const perguntas = [
  {
    pergunta: "Qual rio passa por Itabuna?",
    opcoes: ["Rio Cachoeira", "Rio São Francisco", "Rio Amazonas"],
    correta: 0
  },
  {
    pergunta: "Qual atividade marcou a economia de Itabuna?",
    opcoes: ["Mineração", "Cacau", "Pecuária"],
    correta: 1
  },
  {
    pergunta: "Itabuna é conhecida por ser um polo de quê?",
    opcoes: ["Turismo internacional", "Comércio regional", "Indústria pesada"],
    correta: 1
  },
  {
    pergunta: "Em que estado brasileiro fica Itabuna?",
    opcoes: ["Bahia", "Sergipe", "Espírito Santo"],
    correta: 0
  },
  {
    pergunta: "Itabuna pertence a qual região da Bahia?",
    opcoes: ["Sul", "Oeste", "Norte"],
    correta: 0
  },
  {
    pergunta: "Qual era o nome antigo da região onde surgiu Itabuna?",
    opcoes: ["Arraial de Tabocas", "Vila do Cacau", "Porto Novo"],
    correta: 0
  },
  {
    pergunta: "Itabuna se desenvolveu inicialmente por ser ponto de passagem de:",
    opcoes: ["Tropeiros", "Piratas", "Bandeirantes"],
    correta: 0
  },
  {
    pergunta: "A crise do cacau em Itabuna foi causada principalmente por:",
    opcoes: ["Seca extrema", "Doença nas plantações", "Falta de mão de obra"],
    correta: 1
  },
  {
    pergunta: "Qual doença afetou as plantações de cacau na região de Itabuna?",
    opcoes: ["Ferrugem", "Vassoura-de-bruxa", "Míldio"],
    correta: 1
  },
  {
    pergunta: "O Rio Cachoeira foi importante para o surgimento de Itabuna porque:",
    opcoes: ["Servia como rota de entrada e transporte", "Era usado para mineração", "Era fonte de energia elétrica"],
    correta: 0
  },
  {
    pergunta: "Itabuna já sofreu diversas enchentes históricas por causa:",
    opcoes: ["Do clima seco", "Do Rio Cachoeira", "Do nível do mar"],
    correta: 1
  },
  {
    pergunta: "Uma grande enchente registrada em Itabuna ocorreu ainda no início do século XX",
    opcoes: ["Verdadeiro", "Falso", "Não há registros"],
    correta: 0
  },
  {
    pergunta: "O nome 'Itabuna' tem origem em qual língua?",
    opcoes: ["Latim", "Tupi", "Espanhol"],
    correta: 1
  },
  {
    pergunta: "Após a crise do cacau, Itabuna passou a investir mais em:",
    opcoes: ["Comércio e serviços", "Agricultura intensiva", "Mineração"],
    correta: 0
  },
  {
    pergunta: "O crescimento de Itabuna esteve diretamente ligado a qual ciclo econômico brasileiro?",
    opcoes: ["Ciclo da cana-de-açúcar", "Ciclo do cacau", "Ciclo do ouro"],
    correta: 1
  },
  {
    pergunta: "A posição geográfica de Itabuna favoreceu principalmente:",
    opcoes: ["O isolamento da cidade", "A conexão entre municípios da região", "O turismo marítimo"],
    correta: 1
  },
  {
    pergunta: "Após a crise do cacau, qual foi uma das principais alternativas econômicas de Itabuna?",
    opcoes: ["Comércio e prestação de serviços", "Exploração de petróleo", "Indústria automobilística"],
    correta: 0
  },
  {
    pergunta: "A importância regional de Itabuna se deve principalmente ao fato de ser:",
    opcoes: ["Um centro urbano que concentra serviços essenciais", "Uma capital estadual", "Um polo industrial pesado"],
    correta: 0
  },
  {
    pergunta: "O Rio Cachoeira teve papel histórico no desenvolvimento da cidade porque:",
    opcoes: ["Servia como via de transporte e ocupação", "Era fonte de mineração", "Separava territórios indígenas"],
    correta: 0
  }
];

let perguntasSelecionadas = [];
let indiceAtual = 0;
let acertos = 0;
let respondido = false;


function sortearPerguntas() {
  const copia = [...perguntas];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  perguntasSelecionadas = copia.slice(0, 7);
}


function carregarPergunta() {
  const p = perguntasSelecionadas[indiceAtual];

  
  document.getElementById("contador").innerText =
    `${indiceAtual + 1}/${perguntasSelecionadas.length}`;

  
  const progresso = document.getElementById("progresso");
  const porcentagem = ((indiceAtual + 1) / perguntasSelecionadas.length) * 100;
  progresso.style.width = porcentagem + "%";

 
  document.getElementById("pergunta").innerText = p.pergunta;

  const botoes = document.querySelectorAll(".quiz-box button.opcao");

  botoes.forEach((btn, i) => {
    btn.innerText = p.opcoes[i];
    btn.disabled = false;
    btn.style.background = "#1b5e20";
  });

  document.getElementById("resultado").innerText = "";
  respondido = false;
}


function responder(indice) {
  if (respondido) return;

  const botoes = document.querySelectorAll(".quiz-box button.opcao");
  const correta = perguntasSelecionadas[indiceAtual].correta;

  if (indice === correta) {
    acertos++;
    document.getElementById("resultado").innerText = "✅ Acertou!";
  } else {
    document.getElementById("resultado").innerText = "❌ Errou!";
  }

  botoes.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correta) btn.style.background = "green";
    else if (i === indice) btn.style.background = "red";
  });

  respondido = true;
}


function proximaPergunta() {
  if (!respondido) {
    alert("Responda antes de continuar!");
    return;
  }

  indiceAtual++;

  if (indiceAtual < perguntasSelecionadas.length) {
    carregarPergunta();
  } else {
    mostrarResultadoFinal();
  }
}


function mostrarResultadoFinal() {
  const quiz = document.querySelector(".quiz-box");

  quiz.innerHTML = `
    <h2>🎉 Resultado Final</h2>
    <p>Você acertou ${acertos} de ${perguntasSelecionadas.length} perguntas.</p>
    <button onclick="reiniciarQuiz()">🔄 Repetir Quiz</button>
  `;
}


function reiniciarQuiz() {
  indiceAtual = 0;
  acertos = 0;

  sortearPerguntas();

  document.querySelector(".quiz-box").innerHTML = `
    <h2>🧠 Quiz sobre Itabuna</h2>

    <div class="barra-progresso">
      <div id="progresso"></div>
    </div>

    <p id="contador"></p>
    <p id="pergunta"></p>

    <button class="opcao" onclick="responder(0)"></button>
    <button class="opcao" onclick="responder(1)"></button>
    <button class="opcao" onclick="responder(2)"></button>

    <p id="resultado"></p>
    <button onclick="proximaPergunta()">➡ Próxima</button>
  `;

  carregarPergunta();
}


window.onload = () => {
  sortearPerguntas();
  carregarPergunta();
};