export interface Item {
  id: number;
  title: string;
  description: string;
  image_url: string;
  price: number;
  oldPrice?: number;
}

export default [
  {
    id: 1,
    title: 'Frango com fritas',
    description:
      'Uma deliciosa porção de frango com fritas que você não vai resistir.',
    image_url: 'https://www.lollos.com.br/uploads/produtos/1452001197.png',
    oldPrice: 15.99,
    price: 12.99,
  },
  {
    id: 2,
    title: 'Big Tasty Chicken Bacon',
    description:
      'Crispy Chicken, 3 fatias de queijo, tomate, alface crocante, cebola, bacon e o dobro de molho Tasty.',
    image_url:
      'https://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/sanduiches-de-frango/big-tasty-chicken-bacon.png',
    oldPrice: 22.9,
    price: 22.9,
  },
  {
    id: 3,
    title: 'McFlurry Oreo & Laka & Diamante Negro',
    description:
      'Difícil escolher apenas um dos seus sabores favoritos? Agora eles aparecem juntos na mesma sobremesa!',
    image_url:
      'https://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/sobremesas/Mcflurry-lakaaaa.png',
    oldPrice: 22.9,
    price: 22.9,
  },
  {
    id: 4,
    title: 'Casquinha',
    description:
      'Uma casquinha supercrocante, com massa gelada de chocolate, baunilha ou mista, que vai bem a qualquer hora.',
    image_url:
      'https://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/sobremesas/casquinhas_new.png',
    oldPrice: 22.9,
    price: 22.9,
  },
  {
    id: 5,
    title: 'Big Tasty',
    description:
      'O maior sanduíche de carne 100% bovina do McDonald’s. 3 deliciosas fatias de queijo, tomate, alface crocante, cebola e o dobro de molho Tasty.',
    image_url:
      'https://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/sanduiches-de-carne/tasty_new.png',
    oldPrice: 22.9,
    price: 22.9,
  },
  {
    id: 6,
    title: 'Big Tasty Turbo Queijo',
    description:
      'O maior sanduíche de carne 100% bovina do McDonald’s agora também com creme de muçarela, 2 deliciosas fatias de queijo cheddar e emental, tomate, alface, cebola e o delicioso molho Tasty.',
    image_url:
      'https://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/sanduiches-de-carne/bigtastyturboqueijo.png',
    oldPrice: 22.9,
    price: 22.9,
  },
  {
    id: 7,
    title: 'Mc Fritas',
    description:
      'Deliciosas batatas selecionadas, fritas, crocantes por fora, macias por dentro, douradas, irresistíveis, saborosas, famosas, e todos os outros adjetivos positivos que você quiser dar.',
    image_url:
      'https://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/acompanhamentos/fritasv2.png',
    oldPrice: 22.9,
    price: 22.9,
  },
] as Item[];
