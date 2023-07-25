var config = {
    style: 'mapbox://styles/felipesmbarros/clkhcop1h00jm01qw4h1me42m',
    accessToken: 'pk.eyJ1IjoiZmVsaXBlc21iYXJyb3MiLCJhIjoiY2xraGFsbWlnMDZ5ajNlcngzMDlkbGZwNyJ9.PNOFnda-Sx4w7p0ANtJUMg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Mato Grosso tem equivalente a 100 mil campos de futebol de lavoura mecanizada dentro de terras indígenas',
    subtitle: 'São 73 mil hectares de plantações em TIs no estado campeão do agro, segundo levantamento feito a pedido do Joio',
    byline: 'Marcos Hermanson',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
//        disclaimer
        {
            id: 'disclaimer',
            alignment: 'full',
            hidden: false,
            title: 'Disclaimer!',
            image: './img/cover.png',
            description: 'A presente reportagem foi desenvolvida pelo Instituto  <a href="https://ojoioeotrigo.com.br/">O Joio E o Trigo</a> . Ainda que tenha participado na produção de dados, os direitos autorias pertencem a eles.<br><br>O presente é apenas um estudo sobre uso do MapBoxStoryMap',
            location: {
                center: [-56.22434, -12.49953],
                zoom: 5.69,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//        intro_projeto
        {
            id: 'intro_projeto',
            alignment: 'right',
            hidden: false,
            title: 'Sobre o projeto',
            image: '',
            description: 'Um levantamento produzido a pedido do Joio apontou que as terras indígenas do estado do Mato Grosso têm em seu interior aproximadamente <trong>73 mil hectares de lavouras mecanizadas</strong>. <br><br><a href="https://opara.nyc3.cdn.digitaloceanspaces.com/ojoio/uploads/2023/07/Mapeamento-de-lavouras-em-Terra-indigenas.pdf" target="_blank">O estudo</a> foi conduzido pelo geógrafo Felipe Sodré, que é docente na Faculdade de Ciências Florestais de Misiones, na Argentina, e pela geóloga e doutora em geociências Natalie Aubet, pesquisadora e docente na Universidade Tecnológica do Uruguai. Ambos são integrantes da rede GeoLIBERO, organização ibero-americana de sensoriamento remoto e geomática.',
            location: {
                center: [-54, -12.49953],
                zoom: 5.5,
                pitch: 8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'tismtsimplified',
                     opacity: 1,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 1,
                 }

            ],
            onChapterExit: [
            {
                     layer: 'tismtsimplified',
                     opacity: 0,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 0,
                 }
            ]
        },
//        TIs
        {
            id: 'TIs',
            alignment: 'left',
            hidden: false,
            title: 'TIs',
            image: '',
            description: 'Segundo a pesquisa inédita, <strong>das 72 TIs do estado, 21 têm plantações de commodities no seu interior</strong>. A natureza dos casos varia entre arrendamentos, invasões e territórios contestados judicialmente.',
            location: {
                center: [-59.22434, -12.2],
                zoom: 6,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'tismtsimplified',
                     opacity: 1,
                 },
            {
                     layer: 'maisafetadas',
                     opacity: 1,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
            {
                     layer: 'tismtsimplified',
                     opacity: 0,
                 },
                 {
                     layer: 'maisafetadas',
                     opacity: 0,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 0,
                 }
            ]
        },
//        metodologia
        {
            id: 'metodologia',
            alignment: 'full',
            hidden: false,
            title: '',
            image: './img/metodologia.png',
            description: '"Para o mapeamento, foram utilizadas imagens do satélite Sentinel 2 condensadas entre janeiro de 2021 e maio de 2023. Tais imagens passaram por um processo de segmentação, onde áreas similares são agrupadas a partir de características como cor, textura e brilho – e não apenas na reflectância, como ocorre na classificação baseada em pixel. As plataformas MapBiomas e SojaMaps foram utilizadas para classificação do uso do solo. Para algumas áreas de dúvida, foram consultados indigenistas e outras pessoas com conhecimento dos territórios. O estudo considerou apenas as áreas atualmente ativas de lavoura mecanizada. “Embora tenhamos sido capazes de identificar áreas desmatadas e cicatrizes que possivelmente serão ou já tenham sido destinadas à lavoura mecanizada, é importante observar que esse escopo foge do objetivo deste trabalho”, explica o geógrafo, no relatório final do mapeamento."',
            location: {
                center: [-56.22434, -12.49953],
                zoom: 7,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//        wedeze
        {
            id: 'wedeze',
            alignment: 'right',
            hidden: false,
            title: 'AS mais afetadas',
            image: '',
            description: 'De acordo com o levantamento, a terra indígena mais afetada é Wedeze, situada no município de Cocalinho (MT), com 13 mil hectares de lavoura. Wedeze fica colada a outro território já homologado, Pimentel Barbosa. Os territórios estão separados pelo Rio das Mortes, sagrado para o povo Xavante. A TI Wedeze foi reconhecida como área indígena em um estudo de 2007 da Funai.',
            location: {
                center: [-51.3399, -13.4894],
                zoom: 9,
                pitch: 38.16,
                bearing: -44.09
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'maisafetadas',
                     opacity: 1,
                 },
            {
                     layer: 'tismtsimplified',
                     opacity: 1,
                 },
                 {
                     layer: 'areaslavouramecanizada',
                     opacity: 1,
                 },
             {
                     layer: 'tismtsimplified_label',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
            {
                     layer: 'areaslavouramecanizada',
                     opacity: 0,
                 },
            {
                     layer: 'maisafetadas',
                     opacity: 0,
                 },
            {
                     layer: 'tismtsimplified',
                     opacity: 0,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 0,
                 }]
        },
//        comentario_geral
        {
            id: 'comentario_geral',
            alignment: 'right',
            hidden: false,
            title: 'Os indigenístas e especialistas da FUNAI comentam:',
            image: '',
            description: '“Apesar das terras da margem direita não terem sido alocadas aos Xavantes, eles nunca deixaram de utilizar a região de Wedezé, até mesmo depois da mudança para o lado esquerdo do rio. Ao longo das últimas décadas, continuaram a usar Wedezé para caça, pesca e coleta, além de atividades cerimoniais e espirituais”, pontuou o órgão indigenista na época.<br><br>Segundo funcionários da Funai ouvidos pela reportagem, já não há mais indígenas residindo de forma permanente na área. O processo de demarcação está parado por uma ação judicial. Em imagens de satélite, é possível verificar uma série de polígonos de plantação de grãos no coração do território. Em segundo lugar aparece a TI Batelão, com 13 mil hectares de lavoura.',
            location: {
                center: [-56.579, -11.132],
                zoom: 8.62,
                pitch: 33.50,
                bearing: -64
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'areaslavouramecanizada',
                     opacity: 1,
                 },
            {
                     layer: 'maisafetadas',
                     opacity: 1,
                 },
            {
                     layer: 'tismtsimplified',
                     opacity: 1,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
            {
                     layer: 'areaslavouramecanizada',
                     opacity: 0,
                 },
            {
                     layer: 'maisafetadas',
                     opacity: 0,
                 },
            {
                     layer: 'tismtsimplified',
                     opacity: 0,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 0,
                 }
                 ]
        },
//        maisafetadas2
        {
            id: 'maisafetadas2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'As terras indígenas <strong>Pareci</strong>, <strong>Tirecatinga</strong>, <strong>Irantxe</strong>, <strong>Rio Formoso</strong> e <strong>Utiariti</strong>, das etnias Pareci, Manoki e Nambiquara têm, somadas, 20 mil hectares de lavoura. Desde 2019, os territórios se enquadram em um Termo de Ajustamento de Conduta (TAC) que permitiu o plantio mecanizado, desde que conduzido unicamente pelos indígenas.<br><br>Recentemente, o Joio e a Repórter Brasil <a href="https://ojoioeotrigo.com.br/2023/05/gigantes-do-agro-compram-soja-de-fazendeiros-multados-por-plantio-em-terra-indigena-embargada-em-mato-grosso/" target="_blank">mostraram</a> que, antes do TAC, fazendeiros locais “lavavam” a soja dos indígenas e vendiam a grandes exportadoras do agronegócio, como Bunge e Cargill.',
            location: {
                center: [-58.68886, -14.01808],
                zoom: 8.21,
                pitch: 34.50,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                     layer: 'areaslavouramecanizada',
                     opacity: 1,
                 },
            {
                     layer: 'maisafetadas2',
                     opacity: 1,
                 },
            {
                     layer: 'tismtsimplified',
                     opacity: 1,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
            {
                     layer: 'areaslavouramecanizada',
                     opacity: 0,
                 },
            {
                     layer: 'maisafetadas2',
                     opacity: 0,
                 },
            {
                     layer: 'tismtsimplified',
                     opacity: 0,
                 },
            {
                     layer: 'tismtsimplified_label',
                     opacity: 0,
                 }
                 ]
        }
    ]
};
