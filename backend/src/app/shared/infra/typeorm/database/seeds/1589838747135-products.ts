import { MigrationInterface, QueryRunner, DeepPartial } from 'typeorm';

import TypeORMProductModel from '@shared/infra/typeorm/models/TypeORMProductModel';
import IProductModel from '@shared/models/IProductModel';

const productsList: DeepPartial<IProductModel>[] = [
  {
    category: { id: 1 },
    title: 'Frango com fritas',
    description:
      'Uma deliciosa porção de frango com fritas que você não vai resistir.',
    image_url: 'https://www.lollos.com.br/uploads/produtos/1452001197.png',
    price: 12.99,
  },
  {
    category: { id: 1 },
    title: 'Feijão Tropeiro 300g',
    description: 'O melhor feijão tropeiro de BH, feito pensando em você.',
    image_url:
      'https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/58ad21cb-87c0-4492-bb18-dd0dbef6b489/202003201731_5pW1_t.jpg',
    price: 18,
    oldPrice: 20.5,
  },
  {
    category: { id: 2 },
    title: 'Coca-Cola zero 2litro',
    description: 'Se delicie com o sabor da nova coca-cola zero',
    image_url:
      'https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/58ad21cb-87c0-4492-bb18-dd0dbef6b489/202003251208_8yOC_2.png',
    price: 4.55,
    oldPrice: 5.8,
  },
  {
    category: { id: 1 },
    title: 'Pastel de carne 12 unid.',
    description:
      'Pastel de carne moída feito na hora, quentinho com um sabor sem igual.',
    image_url:
      'https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/58ad21cb-87c0-4492-bb18-dd0dbef6b489/202003201717_p5tt_c.jpg',
    price: 16.9,
  },
  {
    category: { id: 3 },
    title: 'Ribs Double Decker',
    description:
      'Burger com a nossa suculenta costela desfiada, caprichadas fatias de queijo tipo emmenthal e finalizado com molho Killer no pão tipo brioche.',
    image_url:
      'https://s3.amazonaws.com/institucional-statics-files/site/uploads/225x255_Ribs-Double-Decker.png',
    price: 44.9,
    oldPrice: 48.5,
  },
  {
    category: { id: 1 },
    title: 'Camarão a milanesa 400g',
    description:
      'Peça agora o melhor camarão preparado com um toque especial para você.',
    image_url:
      'https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/58ad21cb-87c0-4492-bb18-dd0dbef6b489/202003201638_jfWh_c.jpg',
    price: 40.5,
    oldPrice: 59.99,
  },
  {
    category: { id: 2 },
    title: 'Goose Island Midway (355ml)',
    description:
      'Estilo: Session IPA A Goose Island Midway IPA é uma Session IPA leve e refrescante, com aroma de frutas tropicais.',
    image_url:
      'https://s3.amazonaws.com/institucional-statics-files/site/uploads/03A7757-min-225x255.jpg',
    price: 19.9,
    oldPrice: 22.3,
  },
  {
    category: { id: 1 },
    title: 'Salmão grelhado 200g',
    description: 'Salmão com um sabor que não se compara a nada que ja comeu.',
    image_url:
      'https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/58ad21cb-87c0-4492-bb18-dd0dbef6b489/202003201650_CE1z_p.jpg',
    price: 39.9,
    oldPrice: 45.99,
  },
  {
    category: { id: 3 },
    title: 'Aussie Picanha Burger',
    description:
      '240 g de hambúrguer de picanha no pão tipo brioche, Bloomin’ Onion, smoked mayo, molho Flame, queijo tipo emmenthal e bacon.',
    image_url:
      'https://s3.amazonaws.com/institucional-statics-files/site/uploads/aussie_picanha_burger-225x255.jpg',
    price: 41.9,
    oldPrice: 47.9,
  },
  {
    category: { id: 3 },
    title: 'Fire Cracker Shrimp Burger',
    description:
      'Hambúrguer da casa no pão tipo brioche, camarões empanados envoltos no molho Firecracker, alface, maionese e cebolinha.',
    image_url:
      'https://s3.amazonaws.com/institucional-statics-files/site/uploads/225x255_Firecracker-Shrimp-Burger.png',
    price: 44.9,
    oldPrice: 52.9,
  },
  {
    category: { id: 2 },
    title: 'Mango Sevilla G&T (500ml)',
    description:
      'A combinação perfeita entre o Gin Tanqueray London Dry e notas de manga, mel e canela.',
    image_url:
      'https://s3.amazonaws.com/institucional-statics-files/site/uploads/03A7481-min-225x255.jpg',
    price: 19.9,
    oldPrice: 22.5,
  },
];

export class Products1589838747135 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .getRepository(TypeORMProductModel)
      .save(productsList);
  }

  public async down(): Promise<void> {
    // ...
  }
}
