const botoesTecidos = document.querySelectorAll(".botao-tecido");
const tituloTecido = document.querySelector("#tituloExplicacao");
const descricaoTecido = document.querySelector("#explicacaoTecido");
const funcaoTecido = document.querySelector("#funcaoTecido");
const localTecido = document.querySelector("#localTecido");
const placeholderTecido = document.querySelector("#placeholder-tecido");
const legendaTecido = document.querySelector("#legenda-tecido");

function selecionarTecido(nome) {
    const tecido = conteudos.tecidos[nome];

    botoesTecidos.forEach((botao) => {
        const selecionado = botao.dataset.tecido === nome;
        botao.classList.toggle("selecionado", selecionado);
        botao.setAttribute("aria-pressed", String(selecionado));
    });

    tituloTecido.textContent = tecido.titulo;
    descricaoTecido.textContent = tecido.descricao;
    funcaoTecido.textContent = tecido.funcao;
    localTecido.textContent = tecido.local;
    placeholderTecido.src = tecido.imagem;
    placeholderTecido.alt = tecido.textoAlternativo;
    placeholderTecido.loading = "lazy";
    legendaTecido.textContent = tecido.credito;
}

botoesTecidos.forEach((botao) => {
    botao.addEventListener("click", () => selecionarTecido(botao.dataset.tecido));
});

selecionarTecido("epitelial");

const botoesPartes = document.querySelectorAll("[data-parte]");
const partesDiagrama = document.querySelectorAll("[data-parte-diagrama]");
const tituloParte = document.querySelector("#titulo-parte");
const descricaoParte = document.querySelector("#descricao-parte");

function selecionarParte(identificador) {
    const parte = conteudos.partesNeuronio[identificador];

    botoesPartes.forEach((botao) => {
        const selecionado = botao.dataset.parte === identificador;
        botao.classList.toggle("selecionado", selecionado);
        botao.setAttribute("aria-pressed", String(selecionado));
    });

    partesDiagrama.forEach((elemento) => {
        elemento.classList.toggle("destacada", elemento.dataset.parteDiagrama === identificador);
    });

    tituloParte.textContent = parte.nome;
    descricaoParte.textContent = parte.descricao;
}

botoesPartes.forEach((botao) => {
    botao.addEventListener("click", () => selecionarParte(botao.dataset.parte));
});

selecionarParte("dendritos");

const botoesGlia = document.querySelectorAll("[data-glia]");
const tituloGlia = document.querySelector("#titulo-glia");
const descricaoGlia = document.querySelector("#descricao-glia");
const localGlia = document.querySelector("#local-glia");
const placeholderGlia = document.querySelector("#placeholder-glia");
const legendaGlia = document.querySelector("#legenda-glia");
const figuraGlia = document.querySelector(".figura-glia");
const contextosGlia = document.querySelectorAll(".contexto-glia");

function selecionarGlia(identificador) {
    const celula = conteudos.glia[identificador];

    botoesGlia.forEach((botao) => {
        const selecionado = botao.dataset.glia === identificador;
        botao.classList.toggle("selecionado", selecionado);
        botao.setAttribute("aria-pressed", String(selecionado));
    });

    tituloGlia.textContent = celula.nome;
    descricaoGlia.textContent = celula.descricao;
    localGlia.textContent = celula.local;
    placeholderGlia.src = celula.imagem;
    placeholderGlia.alt = celula.textoAlternativo;
    placeholderGlia.loading = "lazy";
    figuraGlia.classList.toggle("com-contexto", Boolean(celula.contexto));
    contextosGlia.forEach((contexto) => {
        contexto.toggleAttribute("hidden", contexto.id !== `contexto-${identificador}`);
    });
    legendaGlia.textContent = celula.credito;
}

botoesGlia.forEach((botao) => {
    botao.addEventListener("click", () => selecionarGlia(botao.dataset.glia));
});

selecionarGlia("astrocitos");

const botoesFormas = document.querySelectorAll("[data-forma]");
const desenhosFormas = document.querySelectorAll(".desenho-forma");
const tituloForma = document.querySelector("#titulo-forma");
const descricaoForma = document.querySelector("#descricao-forma");
const exemploForma = document.querySelector("#exemplo-forma");

function selecionarForma(identificador) {
    const forma = conteudos.formasNeuronios[identificador];

    botoesFormas.forEach((botao) => {
        const selecionado = botao.dataset.forma === identificador;
        botao.classList.toggle("selecionado", selecionado);
        botao.setAttribute("aria-pressed", String(selecionado));
    });

    desenhosFormas.forEach((desenho) => {
        const visivel = desenho.id === `desenho-${identificador}`;
        desenho.toggleAttribute("hidden", !visivel);
        desenho.setAttribute("aria-hidden", String(!visivel));
    });

    tituloForma.textContent = forma.nome;
    descricaoForma.textContent = forma.descricao;
    exemploForma.textContent = forma.exemplo;
}

botoesFormas.forEach((botao) => {
    botao.addEventListener("click", () => selecionarForma(botao.dataset.forma));
});

selecionarForma("multipolar");

const botaoMenu = document.querySelector("#botao-menu");
const menuNavegacao = document.querySelector("#menu-navegacao");

function fecharMenu() {
    menuNavegacao.hidden = true;
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
}

botaoMenu.addEventListener("click", () => {
    const abrir = menuNavegacao.hidden;
    menuNavegacao.hidden = !abrir;
    botaoMenu.setAttribute("aria-expanded", String(abrir));
    botaoMenu.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
});

menuNavegacao.addEventListener("click", (evento) => {
    if (evento.target.closest("a")) {
        fecharMenu();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && !menuNavegacao.hidden) {
        fecharMenu();
        botaoMenu.focus();
    }
});

const preferenciaMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
const botaoEstimulo = document.querySelector("#aplicar-estimulo");
const botaoPausar = document.querySelector("#pausar-neuronio");
const botaoAvancarNeuronio = document.querySelector("#avancar-neuronio");
const regioesMembrana = document.querySelectorAll("[data-regiao]");
const textosAtivacao = conteudos.ativacaoNeuronio.controles;
let etapaAtivacao = 0;
let executandoNeuronio = false;
let temporizadorNeuronio = null;

function atualizarAtivacao() {
    const etapas = conteudos.ativacaoNeuronio.etapas;
    const etapa = etapas[etapaAtivacao];
    const terminou = etapaAtivacao === etapas.length - 1;
    const modoManual = preferenciaMovimento.matches;

    document.querySelector("#contador-ativacao").textContent = conteudos.contadorEtapa(etapaAtivacao + 1, etapas.length);
    document.querySelector("#titulo-ativacao-etapa").textContent = etapa.titulo;
    document.querySelector("#texto-ativacao").textContent = etapa.descricao;
    document.querySelector("#modo-ativacao").textContent = modoManual ? textosAtivacao.manual : textosAtivacao.automatico;
    document.querySelector("#estado-ativacao").textContent = terminou ? textosAtivacao.concluido
        : etapaAtivacao === 0 ? textosAtivacao.repouso
        : modoManual ? textosAtivacao.estatico
        : executandoNeuronio ? textosAtivacao.executando : textosAtivacao.pausado;

    regioesMembrana.forEach((regiao) => {
        regiao.classList.toggle("despolarizando", etapa.ativa.includes(regiao.dataset.regiao));
        regiao.classList.toggle("repolarizando", etapa.repolarizando.includes(regiao.dataset.regiao));
    });
    botaoEstimulo.disabled = etapaAtivacao !== 0;
    botaoPausar.hidden = modoManual;
    botaoPausar.disabled = etapaAtivacao === 0 || terminou;
    botaoPausar.textContent = !executandoNeuronio && etapaAtivacao > 0 && !terminou
        ? textosAtivacao.continuar : textosAtivacao.pausar;
    botaoAvancarNeuronio.hidden = !modoManual;
    botaoAvancarNeuronio.disabled = etapaAtivacao === 0 || terminou;
}

function cancelarProgressaoNeuronio() {
    clearTimeout(temporizadorNeuronio);
    temporizadorNeuronio = null;
    executandoNeuronio = false;
}

function agendarEtapaNeuronio() {
    clearTimeout(temporizadorNeuronio);
    if (!executandoNeuronio || preferenciaMovimento.matches) return;
    temporizadorNeuronio = setTimeout(() => {
        temporizadorNeuronio = null;
        avancarAtivacao();
    }, 4200);
}

function avancarAtivacao() {
    etapaAtivacao = Math.min(etapaAtivacao + 1, conteudos.ativacaoNeuronio.etapas.length - 1);
    if (etapaAtivacao === conteudos.ativacaoNeuronio.etapas.length - 1) {
        cancelarProgressaoNeuronio();
    }
    atualizarAtivacao();
    agendarEtapaNeuronio();
}

botaoEstimulo.addEventListener("click", () => {
    if (etapaAtivacao !== 0) return;
    executandoNeuronio = !preferenciaMovimento.matches;
    avancarAtivacao();
});

botaoPausar.addEventListener("click", () => {
    if (preferenciaMovimento.matches || etapaAtivacao === 0 || etapaAtivacao === conteudos.ativacaoNeuronio.etapas.length - 1) return;
    if (executandoNeuronio) {
        cancelarProgressaoNeuronio();
    } else {
        executandoNeuronio = true;
        agendarEtapaNeuronio();
    }
    atualizarAtivacao();
});

botaoAvancarNeuronio.addEventListener("click", () => {
    if (preferenciaMovimento.matches && etapaAtivacao > 0) avancarAtivacao();
});

document.querySelector("#reiniciar-neuronio").addEventListener("click", () => {
    cancelarProgressaoNeuronio();
    etapaAtivacao = 0;
    atualizarAtivacao();
});

preferenciaMovimento.addEventListener("change", () => {
    cancelarProgressaoNeuronio();
    atualizarAtivacao();
});

atualizarAtivacao();

let etapaSinapse = 0;
const botaoAnteriorSinapse = document.querySelector("#anterior-sinapse");
const botaoProximaSinapse = document.querySelector("#proxima-sinapse");

function atualizarSinapse() {
    const etapa = conteudos.sinapse[etapaSinapse];
    document.querySelector("#contador-sinapse").textContent = conteudos.contadorEtapa(etapaSinapse + 1, conteudos.sinapse.length);
    document.querySelector("#titulo-sinapse-etapa").textContent = etapa.titulo;
    document.querySelector("#texto-sinapse").textContent = etapa.descricao;
    document.querySelectorAll("[data-sinapse]").forEach((parte) => {
        parte.classList.toggle("destacada", Number(parte.dataset.sinapse) === etapaSinapse);
    });
    botaoAnteriorSinapse.disabled = etapaSinapse === 0;
    botaoProximaSinapse.disabled = etapaSinapse === conteudos.sinapse.length - 1;
}

botaoAnteriorSinapse.addEventListener("click", () => {
    etapaSinapse = Math.max(0, etapaSinapse - 1);
    atualizarSinapse();
});
botaoProximaSinapse.addEventListener("click", () => {
    etapaSinapse = Math.min(conteudos.sinapse.length - 1, etapaSinapse + 1);
    atualizarSinapse();
});
atualizarSinapse();

let etapaReflexo = 0;
const botaoVoltarReflexo = document.querySelector("#voltar-reflexo");
const botaoAvancarReflexo = document.querySelector("#avancar-reflexo");

function atualizarReflexo() {
    const etapa = conteudos.reflexo[etapaReflexo];
    document.querySelector("#contador-reflexo").textContent = conteudos.contadorEtapa(etapaReflexo + 1, conteudos.reflexo.length);
    document.querySelector("#titulo-reflexo").textContent = etapa.titulo;
    document.querySelector("#texto-reflexo").textContent = etapa.descricao;
    document.querySelectorAll("[data-reflexo]").forEach((estrutura) => {
        const selecionada = estrutura.dataset.reflexo === etapa.estrutura;
        estrutura.classList.toggle("destacada", selecionada);
        if (selecionada) estrutura.setAttribute("aria-current", "step");
        else estrutura.removeAttribute("aria-current");
    });
    botaoVoltarReflexo.disabled = etapaReflexo === 0;
    botaoAvancarReflexo.disabled = etapaReflexo === conteudos.reflexo.length - 1;
}

botaoVoltarReflexo.addEventListener("click", () => {
    etapaReflexo = Math.max(0, etapaReflexo - 1);
    atualizarReflexo();
});
botaoAvancarReflexo.addEventListener("click", () => {
    etapaReflexo = Math.min(conteudos.reflexo.length - 1, etapaReflexo + 1);
    atualizarReflexo();
});
document.querySelector("#reiniciar-reflexo").addEventListener("click", () => {
    etapaReflexo = 0;
    atualizarReflexo();
});
atualizarReflexo();

const formularioQuiz = document.querySelector("#formulario-quiz");
const campoPergunta = document.querySelector("#pergunta-quiz");
const tituloPergunta = document.querySelector("#titulo-pergunta");
const alternativasQuiz = document.querySelector("#alternativas-quiz");
const mensagemQuiz = document.querySelector("#mensagem-quiz");
const correcaoQuiz = document.querySelector("#correcao-quiz");
const botaoConfirmarQuiz = document.querySelector("#confirmar-quiz");
const botaoProximaPergunta = document.querySelector("#proxima-pergunta");
const resultadoQuiz = document.querySelector("#resultado-quiz");
const resumoQuiz = document.querySelector("#resumo-quiz");
const textosQuiz = conteudos.quiz.textos;
let perguntaAtual = 0;
let respostasQuiz = [];

function mostrarPergunta(moverFoco = false) {
    const perguntas = conteudos.quiz.perguntas;
    const pergunta = perguntas[perguntaAtual];
    formularioQuiz.hidden = false;
    resultadoQuiz.hidden = true;
    campoPergunta.disabled = false;
    document.querySelector("#contador-quiz").textContent = textosQuiz.contador(perguntaAtual + 1, perguntas.length);
    document.querySelector("#enunciado-quiz").textContent = pergunta.enunciado;
    alternativasQuiz.replaceChildren();

    pergunta.alternativas.forEach((texto, indice) => {
        const rotulo = document.createElement("label");
        rotulo.className = "alternativa-quiz";
        const alternativa = document.createElement("input");
        alternativa.type = "radio";
        alternativa.name = "resposta-quiz";
        alternativa.value = indice;
        alternativa.required = true;
        const descricao = document.createElement("span");
        descricao.textContent = texto;
        rotulo.append(alternativa, descricao);
        alternativasQuiz.append(rotulo);
    });

    mensagemQuiz.textContent = "";
    campoPergunta.removeAttribute("aria-invalid");
    correcaoQuiz.classList.remove("respondido");
    document.querySelector("#avaliacao-quiz").textContent = "";
    document.querySelector("#resposta-correta").textContent = "";
    document.querySelector("#explicacao-quiz").textContent = "";
    botaoConfirmarQuiz.disabled = false;
    botaoConfirmarQuiz.hidden = false;
    botaoProximaPergunta.hidden = true;
    botaoProximaPergunta.textContent = perguntaAtual === perguntas.length - 1 ? textosQuiz.resultado : textosQuiz.proxima;
    if (moverFoco) {
        setTimeout(() => tituloPergunta.focus(), 0);
    }
}

formularioQuiz.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (respostasQuiz[perguntaAtual] !== undefined) return;
    const selecionada = alternativasQuiz.querySelector("input:checked");
    if (!selecionada) {
        mensagemQuiz.textContent = textosQuiz.semSelecao;
        campoPergunta.setAttribute("aria-invalid", "true");
        alternativasQuiz.querySelector("input").focus();
        return;
    }

    const pergunta = conteudos.quiz.perguntas[perguntaAtual];
    const resposta = Number(selecionada.value);
    respostasQuiz[perguntaAtual] = resposta;
    campoPergunta.disabled = true;
    campoPergunta.removeAttribute("aria-invalid");
    mensagemQuiz.textContent = "";
    document.querySelector("#avaliacao-quiz").textContent = resposta === pergunta.correta ? textosQuiz.acerto : textosQuiz.erro;
    document.querySelector("#resposta-correta").textContent = textosQuiz.resposta(pergunta.alternativas[pergunta.correta]);
    document.querySelector("#explicacao-quiz").textContent = pergunta.explicacao;
    correcaoQuiz.classList.add("respondido");
    botaoConfirmarQuiz.disabled = true;
    botaoConfirmarQuiz.hidden = true;
    botaoProximaPergunta.hidden = false;
    botaoProximaPergunta.focus();
});

alternativasQuiz.addEventListener("change", () => {
    mensagemQuiz.textContent = "";
    campoPergunta.removeAttribute("aria-invalid");
});

botaoProximaPergunta.addEventListener("click", () => {
    if (respostasQuiz[perguntaAtual] === undefined || formularioQuiz.hidden) return;
    if (perguntaAtual < conteudos.quiz.perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta(true);
        return;
    }
    const acertos = respostasQuiz.filter((resposta, indice) => resposta === conteudos.quiz.perguntas[indice].correta).length;
    formularioQuiz.hidden = true;
    resultadoQuiz.hidden = false;
    resumoQuiz.textContent = textosQuiz.pontuacao(acertos, conteudos.quiz.perguntas.length);
    resumoQuiz.focus();
});

document.querySelector("#reiniciar-quiz").addEventListener("click", () => {
    perguntaAtual = 0;
    respostasQuiz = [];
    resumoQuiz.textContent = "";
    mostrarPergunta(true);
});

mostrarPergunta();
