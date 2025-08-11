export const DATA: Page[] = [
  {
    header: 'Assessoria Para Importação',
    body: `
      <span>Sua porta de entrada para o mercado internacional de Ferro e Aço.</span>
    `,
    image: 'assessoria.png',
  },
  {
    header: 'Sobre Nós',
    body: `
      <strong>A VMK Comex é especializada na importação de produtos siderúrgicos e materias de construção civil.</strong>
      <span class="block my-2">Para nós, tão importante quanto o destino final é o caminho para chegar até lá.</span>
      <span>Estamos sempre buscando orientar negócios por caminhos inteligentes</span>
    `,
    image: 'sobre.png',
  },
  {
    header: 'Soluções Completas',
    body: `
      <span>Nosso foco é oferecer serviço especializado para todas as etapas da importação e assegurar a otimização de seus processos e a redução de custos.</span>
    `,
    image: 'solucoes.png',
  },
  {
    header: 'Benefícios da Importação Direta',
    body: `
      <span>A importação da China oferece uma combinação imbatível de preços competitivos, variedade de produtos e logística eficiente.</span>
    `,
    image: 'beneficios.png',
    topics: [
      {title: 'Maior controle', description: 'A empresa tem controle sobre a cadeia de suprimentos, desde o desenvolvimento do produto até o transporte.'},
      {title: 'Maior flexibilidade', description: 'A empresa pode negociar diretamente com os fornecedores, escolhendo os parceiros mais adequados.'},
      {title: 'Melhores condições comerciais', description: 'A empresa pode conseguir melhores preços, prazos e formas de pagamento.'},
      {title: 'Acesso a produtos e tecnologias', description: 'A empresa pode ter acesso a produtos e tecnologias que não existem no mercado interno.'},
      {title: 'Redução de custos', description: 'A empresa pode conseguir preços mais atrativos e menor variação do preço da matéria-prima.'},
      {title: 'Maior previsibilidade', description: 'A empresa pode adaptar o processo de importação de acordo com a sazonalidade.'},
      {title: 'Maior segurança', description: 'A empresa pode ter maior segurança e previsibilidade.'},
      {title: 'Histórico com o exportador', description: 'A empresa cria um histórico de compra com o exportador.'},
    ],
  },
  {
    header: 'Nossos Números',
    body: `
      <span>Nossa experiência prática nos permite identificar oportunidades e oferecer soluções inovadoras para impulsionar o crescimento do seu negócio.</span>
    `,
    topics: [
      {description: ``},
      {description: ``},
      {description: ``},
      {description: ``},
    ],
  },
];

interface Page {
  header: string,
  body: string,
  image?: string,
  topics?: Topic[],
}

interface Topic {
  title?: string,
  description: string,
}
