const bancoDePerguntas = [
  { pergunta: "Qual rio passa por Itabuna?", opcoes: ["Rio Cachoeira", "Rio São Francisco", "Rio Amazonas"], correta: 0 },
  { pergunta: "Qual atividade marcou a economia?", opcoes: ["Mineração", "Cacau", "Pecuária"], correta: 1 },
  { pergunta: "Itabuna fica em qual região da Bahia?", opcoes: ["Norte", "Oeste", "Sul"], correta: 2 },
  { pergunta: "O que significa 'Itabuna' em Tupi?", opcoes: ["Pedra Preta", "Água Doce", "Terra Verde"], correta: 0 },
  { pergunta: "Qual praga afetou o cacau nos anos 90?", opcoes: ["Ferrugem", "Vassoura-de-bruxa", "Mofo"], correta: 1 },
  { pergunta: "Qual a data de fundação de Itabuna?", opcoes: ["28 de Julho", "15 de Agosto", "7 de Setembro"], correta: 0 },
  { pergunta: "Itabuna se emancipou de qual cidade?", opcoes: ["Salvador", "Ilhéus", "Porto Seguro"], correta: 1 },
  { pergunta: "Qual o apelido carinhoso de Itabuna?", opcoes: ["Cidade do Sol", "Cidade Sorriso", "Rainha do Sertão"], correta: 1 },
  { pergunta: "Como são chamados os nascidos em Itabuna?", opcoes: ["Grapiúnas", "Itabunenses", "Ambos estão corretos"], correta: 2 },
  { pergunta: "Qual o nome do primeiro prefeito de Itabuna?", opcoes: ["Olinto Leone", "Simão Fitipaldi", "Firmino Alves"], correta: 0 },
  { pergunta: "Qual distrito de Itabuna é o berço de Jorge Amado?", opcoes: ["Manoel Vitorino", "Ferradas", "Nova Itabuna"], correta: 1 },
  { pergunta: "Qual o nome do estádio municipal?", opcoes: ["Maracanã", "Luiz Viana Filho", "Manoel Barradas"], correta: 1 },
  { pergunta: "Qual o nome do maior shopping da cidade?", opcoes: ["Shopping Itabuna", "Shopping Jequitibá", "Shopping Sul"], correta: 1 },
  { pergunta: "Quem é o padroeiro de Itabuna?", opcoes: ["São Pedro", "São José", "Santo Antônio"], correta: 1 },
  { pergunta: "Qual rodovia liga Itabuna a Ilhéus?", opcoes: ["BR-101", "BR-415", "BA-001"], correta: 1 },
  { pergunta: "Qual o nome do teatro municipal?", opcoes: ["Candinha Dória", "Castro Alves", "Teatro Fênix"], correta: 0 },
  { pergunta: "Qual hospital é referência histórica na cidade?", opcoes: ["Hospital de Base", "Calixto Midlej Filho", "Manoel Novaes"], correta: 1 },
  { pergunta: "O antigo nome do povoado era...", opcoes: ["Vila Imperial", "Arraial de Tabocas", "Ribeirão"], correta: 1 },
  { pergunta: "Qual ponte é famosa na Beira-Rio?", opcoes: ["Ponte do Marabá", "Ponte Rio-Niterói", "Ponte da Amizade"], correta: 0 },
  { pergunta: "Qual avenida é o centro do comércio?", opcoes: ["Avenida do Cinquentenário", "Avenida Brasil", "Avenida Paulista"], correta: 0 },
  { pergunta: "Em que ano ocorreu a grande enchente histórica?", opcoes: ["1967", "1990", "2010"], correta: 0 },
  { pergunta: "Qual dessas universidades fica na região?", opcoes: ["UESC", "UFBA", "UNEB"], correta: 0 },
  { pergunta: "Qual time da cidade veste azul e branco?", opcoes: ["Itabuna Esporte Clube", "Grapiúna", "Colo-Colo"], correta: 0 },
  { pergunta: "Onde ocorre a lavagem oficial do Beco?", opcoes: ["Beco do Fuxico", "Praça da Catedral", "Alto Mirante"], correta: 0 },
  { pergunta: "O monumento na entrada da cidade homenageia o...", opcoes: ["Cacau", "Café", "Milho"], correta: 0 },
  { pergunta: "O que 'Ita' significa em Tupi-Guarani?", opcoes: ["Água", "Pedra", "Fogo"], correta: 1 },
  { pergunta: "Quantos km separam Itabuna de Ilhéus?", opcoes: ["Cerca de 30 km", "Cerca de 100 km", "Cerca de 10 km"], correta: 0 },
  { pergunta: "Qual rio deságua no Cachoeira na cidade?", opcoes: ["Rio Salgado", "Rio Una", "Rio Pardo"], correta: 0 },
  { pergunta: "Quem escreveu 'Terras do Sem Fim'?", opcoes: ["Jorge Amado", "Machado de Assis", "Olavo Bilac"], correta: 0 },
  { pergunta: "Qual destes bairros é um dos mais populosos?", opcoes: ["Califórnia", "Góes Calmon", "Jardim Vitória"], correta: 0 },
  { pergunta: "Em qual mês se comemora o aniversário da cidade?", opcoes: ["Janeiro", "Julho", "Dezembro"], correta: 1 },
  { pergunta: "Qual o clima predominante em Itabuna?", opcoes: ["Tropical Úmido", "Semiárido", "Temperado"], correta: 0 },
  { pergunta: "Quem é considerado o fundador de Tabocas?", opcoes: ["Firmino Alves", "Olinto Leone", "Pedro Álvares Cabral"], correta: 0 },
  { pergunta: "Qual a rádio mais tradicional da cidade?", opcoes: ["Rádio Difusora", "Rádio Globo", "Rádio Mix"], correta: 0 },
  { pergunta: "Qual fábrica têxtil é um grande polo de empregos?", opcoes: ["Trifil", "Lupo", "Hering"], correta: 0 },
  { pergunta: "Itabuna é o polo de qual setor regional?", opcoes: ["Saúde e Comércio", "Mineração", "Turismo de Praia"], correta: 0 },
  { pergunta: "Qual bairro abriga a Vila Olímpica?", opcoes: ["São Caetano", "Fátima", "Santo Antônio"], correta: 0 },
  { pergunta: "Qual dessas praças tem a Catedral?", opcoes: ["Praça de São José", "Praça do Ó", "Praça Laurinda Lapa"], correta: 0 },
  { pergunta: "O termo 'Grapiúna' está ligado a...", opcoes: ["Rio escuro", "Terra fértil", "Pedra grande"], correta: 0 },
  { pergunta: "Itabuna é a principal cidade de qual região?", opcoes: ["Sul da Bahia", "Recôncavo", "Extremo Sul"], correta: 0 }
];

let perguntas = [];
let indiceAtual = 0;
let acertos = 0;
let respondido = false;

function iniciarQuiz() {
  perguntas = bancoDePerguntas
    .sort(() => Math.random() - 0.5)
    .slice(0, 7);
  indiceAtual = 0;
  acertos = 0;
  carregarPergunta();
}

function carregarPergunta() {
  const p = perguntas[indiceAtual];
  document.getElementById("contador").innerText = `Pergunta ${indiceAtual + 1}/${perguntas.length}`;
  document.getElementById("progresso").style.width = ((indiceAtual + 1) / perguntas.length) * 100 + "%";
  document.getElementById("pergunta").innerText = p.pergunta;
  const botoes = document.querySelectorAll(".opcao");
  botoes.forEach((btn, i) => {
    btn.innerText = p.opcoes[i];
    btn.classList.remove("correta", "errada");
    btn.style.background = "rgba(255,255,255,0.05)";
    btn.disabled = false;
  });
  document.getElementById("resultado").innerText = "";
  respondido = false;
}

function responder(indice) {
  if (respondido) return;
  const correta = perguntas[indiceAtual].correta;
  const botoes = document.querySelectorAll(".opcao");
  
  if (indice === correta) {
    acertos++;
    botoes[indice].classList.add("correta");
    document.getElementById("resultado").innerText = "Acertou! ✅";
  } else {
    botoes[indice].classList.add("errada");
    botoes[correta].classList.add("correta");
    document.getElementById("resultado").innerText = "Errou! ❌";
  }
  respondido = true;
}

function proximaPergunta() {
  if (!respondido) return alert("Selecione uma opção!");
  indiceAtual++;
  if (indiceAtual < perguntas.length) carregarPergunta();
  else mostrarFinal();
}

function mostrarFinal() {
  document.querySelector(".quiz-box").innerHTML = `
    <h2 style="text-align:center; color:var(--accent)">Quiz Finalizado!</h2>
    <p style="text-align:center; font-size: 1.5rem; margin: 20px 0;">Você acertou ${acertos} de ${perguntas.length}.</p>
    <button class="btn-action" onclick="location.reload()" style="width:100%">Tentar Novamente</button>
  `;
}

window.onload = iniciarQuiz;