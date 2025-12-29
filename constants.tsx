
import { ClassKit, FAQItem } from './types';

export const BUNDLE_CHECKOUT_URL = "https://pay.cakto.com.br/5xZRQLY";
export const UPSELL_CHECKOUT_URL = "https://pay.cakto.com.br/3ee4h2q";

export const CLASSES: ClassKit[] = [
  {
    id: 'amigo',
    name: 'Classe de Amigo',
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-600',
    iconUrl: 'https://i.ibb.co/DPBXB5X4/Classe-de-amigo.png',
    price: '10,90',
    oldPrice: '29,90',
    checkoutUrl: 'https://pay.cakto.com.br/3czhxft_702164',
    items: [
      'Os Dias da Criação: Ilustrações claras do dia 1 ao 7.',
      'Voto e Lei: Artes visuais para facilitar a memorização.',
      'Saúde e Dieta: Quadro dos grupos alimentares (Pirâmide Saudável).',
      'Natureza: Identificação visual de 10 flores silvestres e 10 insetos.',
      'Versos Bíblicos: Textos ilustrados como João 3:16 e Salmos 1.'
    ]
  },
  {
    id: 'companheiro',
    name: 'Classe de Companheiro',
    color: 'bg-red-600',
    textColor: 'text-red-600',
    borderColor: 'border-red-600',
    iconUrl: 'https://i.ibb.co/DgCFN2NQ/Classe-de-companheiro.png',
    price: '10,90',
    oldPrice: '29,90',
    checkoutUrl: 'https://pay.cakto.com.br/u92noni',
    items: [
      'Bandeira Nacional: Estados, estrelas e o significado das cores.',
      'Perigos do Tabagismo: Infográficos impactantes sobre saúde.',
      'Natureza Avançada: 12 árvores nativas e 12 aves em alta resolução.',
      'Versos Bíblicos: Ilustrações para "Serei Puro", "Bondoso e Leal".'
    ]
  },
  {
    id: 'pesquisador',
    name: 'Classe de Pesquisador',
    color: 'bg-green-600',
    textColor: 'text-green-600',
    borderColor: 'border-green-600',
    iconUrl: 'https://i.ibb.co/tww6n5Cm/Classe-de-pesquisador.png',
    price: '10,90',
    oldPrice: '29,90',
    checkoutUrl: 'https://pay.cakto.com.br/izgydjs',
    items: [
      'Animais Comestíveis vs. Não Comestíveis: Diferenciação clara.',
      'Rastreamento: Guia visual de pegadas de animais brasileiros.',
      'Unidade e Bandeirim: Medidas exatas e layout para instrução.',
      'Bíblia: Textos chave ilustrados como Eclesiastes 12 e Romanos 6.'
    ]
  },
  {
    id: 'pioneiro',
    name: 'Classe de Pioneiro',
    color: 'bg-gray-500',
    textColor: 'text-gray-600',
    borderColor: 'border-gray-500',
    iconUrl: 'https://i.ibb.co/xKpvCGHF/Classe-de-pioneiro.png',
    price: '10,90',
    oldPrice: '29,90',
    checkoutUrl: 'https://pay.cakto.com.br/35xfdoj',
    items: [
      'Plantas Silvestres Comestíveis: Fotos reais para identificação segura.',
      'Estudo de Borboletas: Catálogo com 25 espécies e nomes científicos.',
      'Doutrina: Ilustrações sobre a Volta de Jesus e o Santuário.',
      'Liderança: Recursos visuais para o Alvo e Lema.'
    ]
  },
  {
    id: 'excursionista',
    name: 'Classe de Excursionista',
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-600',
    iconUrl: 'https://i.ibb.co/DX8nw1Y/Classe-de-excurcionista.png',
    price: '10,90',
    oldPrice: '29,90',
    checkoutUrl: 'https://pay.cakto.com.br/eqfv4fw',
    items: [
      'Eventos Finais: Ilustrações sobre os sinais da segunda vinda.',
      'Profecias: Material de apoio para estudos proféticos e históricos.',
      'Resgate e Primeiros Socorros: Situações ilustradas para treinamento.'
    ]
  },
  {
    id: 'guia',
    name: 'Classe de Guia',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
    iconUrl: 'https://i.ibb.co/237vPHx2/Classe-de-guia.png',
    price: '10,90',
    oldPrice: '29,90',
    checkoutUrl: 'https://pay.cakto.com.br/rhi8daa',
    items: [
      'Cidadania Cristã: Ilustrações de Batismo, Lava-pés e Dízimos.',
      'Voto à Bíblia: Arte exclusiva para cerimônia e estudo.',
      'Vida no Campo: 3 tipos de abrigos e nós avançados.',
      'Mordomia: Textos ilustrados sobre cuidado com tempo e corpo.'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como recebo o material?',
    answer: 'O envio é imediato via e-mail após a confirmação do pagamento. Você receberá um link para download dos arquivos PDF.'
  },
  {
    question: 'Posso imprimir?',
    answer: 'Sim! Os PDFs foram otimizados para impressão em papel A4 e também funcionam perfeitamente em projetores (Data Show).'
  },
  {
    question: 'O material segue os requisitos atuais?',
    answer: 'Com certeza. Todo o material é baseado nos manuais administrativos mais recentes das classes regulares e avançadas.'
  },
  {
    question: 'Existe garantia?',
    answer: 'Sim, oferecemos 7 dias de garantia incondicional. Se não gostar do material, devolvemos 100% do seu investimento.'
  }
];
