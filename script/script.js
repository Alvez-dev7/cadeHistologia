const tecidos = {
    epitelial: {
        nome: "epitelial",
        titulo: "Tecido epitelial",
        descricao: "Suas células ficam muito próximas, com pouca matriz extracelular entre elas. Forma revestimentos e glândulas.",
        funcao: "Proteção, absorção e secreção.",
        local: "Epiderme, revestimento do intestino e glândulas.",
        imagem: null,
        textoAlternativo: "",
        credito: ""
    },
    conjuntivo: {
        nome: "conjuntivo",
        titulo: "Tecido conjuntivo",
        descricao: "Suas células estão distribuídas em uma matriz extracelular, material que preenche o espaço entre elas e varia entre os tipos de tecido.",
        funcao: "Sustentação, preenchimento, defesa, reserva de energia e transporte, conforme o tipo.",
        local: "Derme, tendões, tecido adiposo, cartilagens, ossos e sangue.",
        imagem: null,
        textoAlternativo: "",
        credito: ""
    },
    muscular: {
        nome: "muscular",
        titulo: "Tecido muscular",
        descricao: "Possui células especializadas em contração. Divide-se em estriado esquelético, estriado cardíaco e liso.",
        funcao: "Movimentar o corpo, impulsionar o sangue e deslocar substâncias dentro dos órgãos.",
        local: "Músculos ligados ao esqueleto, coração e paredes de órgãos como o intestino.",
        imagem: null,
        textoAlternativo: "",
        credito: ""
    },
    nervoso: {
        nome: "nervoso",
        titulo: "Tecido nervoso",
        descricao: "Formado por neurônios e células da glia, que atuam juntos na comunicação e na manutenção do tecido.",
        funcao: "Receber e processar informações e coordenar respostas do organismo.",
        local: "Encéfalo, medula espinal, nervos e gânglios.",
        imagem: null,
        textoAlternativo: "",
        credito: ""
    }
};

const botoesTecidos = document.querySelectorAll(".botao-tecido");
const tituloTecido = document.querySelector("#tituloExplicacao");
const descricaoTecido = document.querySelector("#explicacaoTecido");
const funcaoTecido = document.querySelector("#funcaoTecido");
const localTecido = document.querySelector("#localTecido");
const placeholderTecido = document.querySelector("#placeholder-tecido");
const legendaTecido = document.querySelector("#legenda-tecido");

function selecionarTecido(nome) {
    const tecido = tecidos[nome];

    botoesTecidos.forEach((botao) => {
        const selecionado = botao.dataset.tecido === nome;
        botao.classList.toggle("selecionado", selecionado);
        botao.setAttribute("aria-pressed", String(selecionado));
    });

    tituloTecido.textContent = tecido.titulo;
    descricaoTecido.textContent = tecido.descricao;
    funcaoTecido.textContent = tecido.funcao;
    localTecido.textContent = tecido.local;
    placeholderTecido.textContent = `Placeholder de imagem: tecido ${tecido.nome}`;
    placeholderTecido.setAttribute("aria-label", `Placeholder de imagem do tecido ${tecido.nome}`);
    legendaTecido.textContent = tecido.credito || "Imagem e crédito a definir";
}

botoesTecidos.forEach((botao) => {
    botao.addEventListener("click", () => selecionarTecido(botao.dataset.tecido));
});

selecionarTecido("epitelial");
