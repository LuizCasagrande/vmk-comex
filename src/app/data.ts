export const DATA: Map<string, Page> = new Map([
  [
    'ADVICE',
    {
      header: 'Assessoria Para Importação',
      image: 'assessoria.png',
      body: `
        <span>Sua porta de entrada para o mercado internacional de Ferro e Aço.</span>
      `,
    },
  ],
  [
    'ABOUT',
    {
      header: 'Sobre Nós',
      image: 'sobre.png',
      body: `
        <strong>A VMK Comex é especializada na importação de produtos siderúrgicos e materias de construção civil.</strong>
        <span class="block my-3">Para nós, tão importante quanto o destino final é o caminho para chegar até lá.</span>
        <span>Estamos sempre buscando orientar negócios por caminhos inteligentes</span>
      `,
    },
  ],
  [
    'NUMBERS',
    {
      header: 'Nossos Números',
      image: 'solucoes.png',
      body: `
        <span>Nossa experiência prática nos permite identificar oportunidades e oferecer soluções inovadoras para impulsionar o crescimento do seu negócio.</span>
      `,
      cards: [
        {
          icon: 'pi pi-plus',
          body: `
            <strong>15 milhões</strong> em transações.
          `,
        },
        {
          icon: 'pi pi-plus',
          body: `
            <strong>1000 tons</strong> em entregas.
          `,
        },
        {
          icon: 'pi pi-plus',
          body: `
            <strong>7 Anos</strong> de mercado.
          `,
        },
        {
          icon: 'pi pi-plus',
          body: `
            <strong>80</strong> Operações Portuárias.
          `,
        },
      ],
    },
  ],
  [
    'SOLUTIONS',
    {
      header: 'Soluções Completas',
      image: 'solucoes.png',
      body: `
        <span>Nosso foco é oferecer serviço especializado para todas as etapas da importação e assegurar a otimização de seus processos e a redução de custos.</span>
      `,
      cards: [
        {
          header: 'Expertise',
          icon: 'pi pi-verified',
          body: `
            <span>Antecipar desafios e oferecer soluções ágeis e personalizadas.</span>
          `,
        },
        {
          header: 'Colaboração',
          icon: 'pi pi-sparkles',
          body: `
            <span>Relacionamentos sólidos através da colaboração e da confiança mútua.</span>
          `,
        },
      ],
    },
  ],
  [
    'BENEFITS',
    {
      header: 'Benefícios da Importação Direta',
      image: 'beneficios.png',
      body: `
        <span>A importação da China oferece uma combinação imbatível de preços competitivos, variedade de produtos e logística eficiente.</span>
      `,
      cards: [
        {
          icon: 'pi-chart-line',
          body: `
            <span>Oportunidade e prosperidade para seu negócio.</span>
          `,
        }
      ],
      topics: [
        {
          title: 'Maior controle',
          description: 'A empresa tem controle sobre a cadeia de suprimentos, desde o desenvolvimento do produto até o transporte.',
        },
        {
          title: 'Maior flexibilidade',
          description: 'A empresa pode negociar diretamente com os fornecedores, escolhendo os parceiros mais adequados.',
        },
        {
          title: 'Melhores condições comerciais',
          description: 'A empresa pode conseguir melhores preços, prazos e formas de pagamento.',
        },
        {
          title: 'Acesso a produtos e tecnologias',
          description: 'A empresa pode ter acesso a produtos e tecnologias que não existem no mercado interno.',
        },
        {
          title: 'Redução de custos',
          description: 'A empresa pode conseguir preços mais atrativos e menor variação do preço da matéria-prima.',
        },
        {
          title: 'Maior previsibilidade',
          description: 'A empresa pode adaptar o processo de importação de acordo com a sazonalidade.',
        },
        {
          title: 'Maior segurança',
          description: 'A empresa pode ter maior segurança e previsibilidade.',
        },
        {
          title: 'Histórico com o exportador',
          description: 'A empresa cria um histórico de compra com o exportador.',
        },
      ],
    },
  ],
]);

interface Page {
  header: string,
  image: string,
  body: string,
  cards?: Card[],
  topics?: Topic[],
}

interface Card {
  header?: string,
  icon: string,
  body: string,
}

interface Topic {
  title: string,
  description: string,
}
