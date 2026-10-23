const conteudos = {
    tecidos: {
        epitelial: {
            nome: "epitelial",
            titulo: "Tecido epitelial",
            descricao: "Suas células ficam muito próximas, com pouca matriz extracelular entre elas. Forma revestimentos e glândulas.",
            funcao: "Proteção, absorção e secreção.",
            local: "Epiderme, revestimento do intestino e glândulas.",
            imagem: "imagens/tecido-epitelial.jpg",
            textoAlternativo: "Epitélio pavimentoso simples humano em preparação histológica, aumento de 400 vezes.",
            credito: "Epitélio pavimentoso simples, 400× — Berkshire Community College Bioscience Image Library, CC0; Wikimedia Commons."
        },
        conjuntivo: {
            nome: "conjuntivo",
            titulo: "Tecido conjuntivo",
            descricao: "Suas células estão distribuídas em uma matriz extracelular, material que preenche o espaço entre elas e varia entre os tipos de tecido.",
            funcao: "Sustentação, preenchimento, defesa, reserva de energia e transporte, conforme o tipo.",
            local: "Derme, tendões, tecido adiposo, cartilagens, ossos e sangue.",
            imagem: "imagens/tecido-conjuntivo-laxo.jpg",
            textoAlternativo: "Tecido conjuntivo frouxo em preparação histológica, aumento de 40 vezes.",
            credito: "Conjuntivo frouxo, 40× — Berkshire Community College Bioscience Image Library, CC0; Wikimedia Commons."
        },
        muscular: {
            nome: "muscular",
            titulo: "Tecido muscular",
            descricao: "Possui células especializadas em contração. Divide-se em estriado esquelético, estriado cardíaco e liso.",
            funcao: "Movimentar o corpo, impulsionar o sangue e deslocar substâncias dentro dos órgãos.",
            local: "Músculos ligados ao esqueleto, coração e paredes de órgãos como o intestino.",
            imagem: "imagens/tecido-muscular-esqueletico.jpg",
            textoAlternativo: "Fibras de músculo esquelético em corte microscópico, aumento de 200 vezes.",
            credito: "Músculo esquelético, 200× — Community College Bioscience, CC0; Wikimedia Commons."
        },
        nervoso: {
            nome: "nervoso",
            titulo: "Tecido nervoso",
            descricao: "Formado por neurônios e células da glia, que atuam juntos na comunicação e na manutenção do tecido.",
            funcao: "Receber e processar informações e coordenar respostas do organismo.",
            local: "Encéfalo, medula espinal, nervos e gânglios.",
            imagem: "imagens/tecido-nervoso-feixe.jpg",
            textoAlternativo: "Feixe de nervos em corte longitudinal, corado com tetróxido de ósmio, aumento de 400 vezes.",
            credito: "Feixe nervoso, 400× — Berkshire Community College Bioscience Image Library, CC0; Wikimedia Commons."
        }
    },
    partesNeuronio: {
        dendritos: {
            nome: "Dendritos",
            descricao: "Recebem muitos dos sinais de outras células."
        },
        corpo: {
            nome: "Corpo celular",
            descricao: "Abriga o núcleo e mantém a atividade da célula."
        },
        axonio: {
            nome: "Axônio",
            descricao: "Conduz potenciais de ação até as terminações."
        },
        mielina: {
            nome: "Bainha de mielina",
            descricao: "Envolve segmentos do axônio e favorece a condução rápida do impulso."
        },
        nodulos: {
            nome: "Nódulos de Ranvier",
            descricao: "São intervalos entre segmentos de mielina onde o potencial de ação é regenerado."
        },
        terminacoes: {
            nome: "Terminações axônicas",
            descricao: "Participam da comunicação com outras células."
        }
    },
    glia: {
        astrocitos: {
            nome: "Astrócitos",
            descricao: "Ajudam a regular o ambiente dos neurônios e oferecem suporte metabólico.",
            local: "Sistema nervoso central.",
            imagem: "imagens/glia-astrocito-servier.png",
            textoAlternativo: "Ilustração de astrócito com numerosos prolongamentos ramificados.",
            credito: "Imagem: Servier Medical Art — CC BY 4.0."
        },
        oligodendrocitos: {
            nome: "Oligodendrócitos",
            descricao: "Formam mielina em segmentos de axônios no sistema nervoso central.",
            local: "Sistema nervoso central.",
            imagem: "imagens/glia-oligodendrocito-servier.png",
            textoAlternativo: "Ilustração de oligodendrócito com prolongamentos, acompanhada por um esquema de axônios com segmentos mielinizados.",
            contexto: true,
            credito: "Imagem: Servier Medical Art — CC BY 4.0. Contexto axonal: esquema simplificado original do projeto."
        },
        microglia: {
            nome: "Micróglia",
            descricao: "Participa da defesa e da remoção de resíduos celulares.",
            local: "Sistema nervoso central.",
            imagem: "imagens/glia-microglia-servier.png",
            textoAlternativo: "Ilustração de micróglia ramificada.",
            credito: "Imagem: Servier Medical Art — CC BY 4.0."
        },
        ependimarias: {
            nome: "Células ependimárias",
            descricao: "Revestem os ventrículos cerebrais e o canal central da medula espinal.",
            local: "Ventrículos cerebrais e canal central da medula espinal.",
            imagem: "imagens/glia-ependimarias-servier.png",
            textoAlternativo: "Ilustração de uma célula ependimária alongada, acompanhada por um esquema de células revestindo uma superfície ciliada.",
            contexto: true,
            credito: "Imagem: Servier Medical Art — CC BY 4.0. Contexto do revestimento: esquema simplificado original do projeto."
        },
        schwann: {
            nome: "Células de Schwann",
            descricao: "Podem formar mielina em segmentos de axônios do sistema nervoso periférico.",
            local: "Sistema nervoso periférico.",
            imagem: "imagens/glia-celula-schwann.svg",
            textoAlternativo: "Esquema simplificado de uma célula de Schwann formando mielina em um segmento do axônio periférico, fora de escala.",
            credito: "Esquema simplificado original do projeto, baseado em referências científicas consultadas."
        },
        satelites: {
            nome: "Células satélites",
            descricao: "Envolvem corpos celulares de neurônios nos gânglios periféricos, ajudando a regular seu ambiente.",
            local: "Gânglios do sistema nervoso periférico.",
            imagem: "imagens/glia-celulas-satelites.svg",
            textoAlternativo: "Esquema simplificado de células satélites achatadas envolvendo o corpo celular de um neurônio ganglionar, fora de escala.",
            credito: "Esquema simplificado original do projeto, baseado em referências científicas consultadas."
        }
    },
    formasNeuronios: {
        multipolar: {
            nome: "Neurônio multipolar",
            descricao: "Apresenta vários dendritos e um axônio.",
            exemplo: "Muitos neurônios motores."
        },
        bipolar: {
            nome: "Neurônio bipolar",
            descricao: "Apresenta um prolongamento dendrítico e um axonal.",
            exemplo: "Neurônios bipolares da retina."
        },
        pseudounipolar: {
            nome: "Neurônio pseudounipolar",
            descricao: "Apresenta um prolongamento que se bifurca em dois ramos.",
            exemplo: "Neurônios sensitivos dos gânglios das raízes dorsais."
        }
    },
    ativacaoNeuronio: {
        controles: {
            pausar: "Pausar", continuar: "Continuar",
            automatico: "Progressão automática. Você pode pausar para ler cada etapa.",
            manual: "Movimento reduzido: use Aplicar estímulo e Avançar etapa para explorar sem progressão automática.",
            repouso: "Pronto para receber um estímulo.",
            executando: "Simulação em andamento.", pausado: "Simulação pausada.",
            estatico: "Etapa estática. Avance quando quiser.",
            concluido: "Sequência concluída. Reinicie para explorar novamente."
        },
        etapas: [
            { titulo: "Repouso", descricao: "A membrana mantém uma diferença de potencial: o interior é mais negativo que o exterior. A bomba de sódio e potássio ajuda a manter os gradientes iônicos ao longo do tempo.", ativa: [], repolarizando: [] },
            { titulo: "Estímulo e limiar", descricao: "Neste exemplo, um estímulo suficiente despolariza a região inicial do axônio até o limiar, desencadeando um potencial de ação. Estímulos abaixo do limiar não o desencadeiam.", ativa: ["inicio"], repolarizando: [] },
            { titulo: "Despolarização: entrada de sódio", descricao: "Canais de sódio dependentes de voltagem se abrem e Na⁺ entra na região inicial. O interior se torna transitoriamente mais positivo. Correntes locais despolarizam a região seguinte.", ativa: ["inicio"], repolarizando: [] },
            { titulo: "Regeneração no primeiro nódulo", descricao: "A corrente se espalha sob a mielina e o potencial de ação é regenerado no primeiro nódulo de Ranvier, com entrada de Na⁺. Atrás dessa região, a inativação dos canais de sódio e a saída de K⁺ por canais de potássio promovem a repolarização.", ativa: ["nodulo-1"], repolarizando: ["inicio"] },
            { titulo: "Propagação e repolarização", descricao: "O potencial de ação é regenerado no nódulo seguinte. A saída de K⁺ repolariza a região anterior; seu período refratário favorece a propagação para a frente. A repolarização rápida não é causada diretamente pela bomba de sódio e potássio.", ativa: ["nodulo-2"], repolarizando: ["nodulo-1"] },
            { titulo: "Chegada às terminações axônicas", descricao: "A despolarização alcança as terminações, enquanto as regiões anteriores se repolarizam. Em uma sinapse química, essa chegada pode iniciar a liberação de neurotransmissores. Explore esse processo no detalhe da sinapse.", ativa: ["terminacoes"], repolarizando: ["nodulo-2"] }
        ]
    },
    sinapse: [
        { titulo: "Chegada do potencial de ação", descricao: "O potencial de ação despolariza a membrana da terminação pré-sináptica." },
        { titulo: "Cálcio e liberação", descricao: "A despolarização abre canais de cálcio dependentes de voltagem. A entrada de Ca²⁺ favorece a fusão de vesículas com a membrana e a liberação de neurotransmissores." },
        { titulo: "Difusão pela fenda", descricao: "Os neurotransmissores se difundem pelo pequeno espaço entre as células: a fenda sináptica." },
        { titulo: "Ligação aos receptores", descricao: "Os neurotransmissores se ligam a receptores na membrana da célula seguinte, alterando sua atividade." },
        { titulo: "Uma resposta, diferentes efeitos", descricao: "Conforme o receptor e os íons envolvidos, a resposta pode favorecer ou dificultar um novo potencial de ação. O resultado depende da integração com outros sinais; não há geração obrigatória de um novo impulso." }
    ],
    reflexo: [
        { estrutura: "mao", titulo: "Detecção de calor potencialmente lesivo", descricao: "Terminações sensitivas na pele detectam o estímulo potencialmente lesivo. Se o limiar for atingido, surgem potenciais de ação em neurônios sensitivos." },
        { estrutura: "sensitiva", titulo: "Via sensitiva até a medula", descricao: "Os potenciais de ação seguem pelos axônios de neurônios sensitivos até a medula espinal, levando informação sobre o estímulo na mão." },
        { estrutura: "medula", titulo: "Integração com interneurônios", descricao: "Na medula espinal, circuitos com interneurônios ativam neurônios motores e ajudam a inibir os músculos que se opõem à retirada. Informações também seguem para o encéfalo." },
        { estrutura: "motora", titulo: "Via motora para os músculos", descricao: "Potenciais de ação seguem pelos axônios de neurônios motores até os músculos que participam da retirada da mão." },
        { estrutura: "musculo", titulo: "Contração e retirada da mão", descricao: "A ativação dos músculos produz a retirada da mão. Essa resposta pode começar antes da percepção consciente da dor; o encéfalo também recebe e processa informações sobre o estímulo." }
    ],
    quiz: {
        perguntas: [
            {
                enunciado: "Qual tecido tem células especializadas em contração?",
                alternativas: ["Tecido epitelial", "Tecido conjuntivo", "Tecido muscular", "Tecido nervoso"],
                correta: 2,
                explicacao: "O tecido muscular produz movimentos por contração. O epitelial forma revestimentos e glândulas; o conjuntivo participa da sustentação e do preenchimento; o nervoso recebe e processa informações."
            },
            {
                enunciado: "Qual parte do neurônio conduz potenciais de ação até as terminações?",
                alternativas: ["Axônio", "Dendritos", "Núcleo", "Bainha de mielina"],
                correta: 0,
                explicacao: "O axônio conduz os potenciais de ação até as terminações. Dendritos recebem muitos sinais, o núcleo fica no corpo celular e a mielina envolve segmentos do axônio, favorecendo a condução rápida."
            },
            {
                enunciado: "Quais células formam mielina no sistema nervoso central?",
                alternativas: ["Astrócitos", "Células de Schwann", "Micróglia", "Oligodendrócitos"],
                correta: 3,
                explicacao: "Oligodendrócitos formam mielina no sistema nervoso central. Células de Schwann podem formar mielina no sistema nervoso periférico. Astrócitos regulam o ambiente dos neurônios e a micróglia participa da defesa."
            },
            {
                enunciado: "Na sinapse química, o que acontece com os neurotransmissores após sua liberação?",
                alternativas: [
                    "Formam uma bainha de mielina na célula seguinte.",
                    "Difundem-se pela fenda sináptica e podem se ligar a receptores da célula seguinte.",
                    "Substituem o núcleo da célula seguinte.",
                    "Garantem sempre um novo potencial de ação na célula seguinte."
                ],
                correta: 1,
                explicacao: "Os neurotransmissores atravessam a fenda por difusão e se ligam a receptores. A resposta pode favorecer ou dificultar um novo potencial de ação; nem toda comunicação gera um novo impulso."
            },
            {
                enunciado: "Qual afirmação descreve o reflexo de retirada da mão?",
                alternativas: [
                    "A retirada depende sempre da percepção consciente da dor para começar.",
                    "A via sensitiva leva comandos da medula diretamente aos músculos.",
                    "Circuitos da medula podem iniciar a retirada antes da percepção consciente da dor.",
                    "Os músculos que se opõem à retirada precisam contrair ao mesmo tempo."
                ],
                correta: 2,
                explicacao: "Circuitos medulares com interneurônios coordenam a resposta motora e ajudam a inibir os músculos que se opõem à retirada. A mão pode começar a se afastar antes da percepção consciente da dor, enquanto informações também seguem para o encéfalo."
            }
        ],
        textos: {
            contador: (atual, total) => `Pergunta ${atual} de ${total}`,
            semSelecao: "Selecione uma alternativa antes de confirmar.",
            acerto: "Você acertou!", erro: "Você errou desta vez.",
            resposta: (texto) => `Resposta correta: ${texto}`,
            proxima: "Próxima pergunta", resultado: "Ver resultado",
            pontuacao: (acertos, total) => `Você acertou ${acertos} de ${total} perguntas.`
        }
    },
    contadorEtapa: (atual, total) => `Etapa ${atual} de ${total}`

};
