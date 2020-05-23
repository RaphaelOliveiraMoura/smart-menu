import { MigrationInterface, QueryRunner } from 'typeorm';

import TypeORMProductModel from '@infra/typeorm/models/TypeORMProductModel';
import IProductModel from '@interfaces/models/IProductModel';

const productsList: IProductModel[] = [
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
    category: { id: 1 },
    title: 'Camarão a milanesa 400g',
    description:
      ' Peça agora o melhor camarão preparado com um toque especial para você.',
    image_url:
      'https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/58ad21cb-87c0-4492-bb18-dd0dbef6b489/202003201638_jfWh_c.jpg',
    price: 40.5,
    oldPrice: 59.99,
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
