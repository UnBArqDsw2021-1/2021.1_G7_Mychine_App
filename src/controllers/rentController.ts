import { PrismaClient, product } from '@prisma/client';
import { ProductUpdate, ProductCreate } from '@models/Product';
import { BaseController } from './baseController';

export class RentController extends BaseController {
  async get(db: PrismaClient, id): Promise<product> {
    try {
      return await db.product.findUnique({ where: { productId: id } });
    } catch (e) {
      throw new Error(`Erro ao achar um product ${e}`);
    }
  }

  async getOne(db: PrismaClient, args = {}): Promise<product> {
    try {
      return await db.product.findFirst(args);
    } catch (e) {
      throw new Error(`Erro ao achar um product ${e}`);
    }
  }

  async list(db: PrismaClient, args = {}): Promise<product[]> {
    try {
      return await db.product.findMany(args);
    } catch (e) {
      throw new Error(`Erro ao achar um product ${e}`);
    }
  }

  async create(db: PrismaClient, input: ProductCreate): Promise<product> {
    try {
      return await db.product.create({ data: input });
    } catch (e) {
      throw new Error(`Erro ao criar novo usuário${e}`);
    }
  }

  async update(db: PrismaClient, input: ProductUpdate, id): Promise<product> {
    try {
      return await db.product.update({ data: input, where: { productId: id } });
    } catch (error) {
      throw new Error(`Erro ao atualizar novo usuário${error}`);
    }
  }

  async delete(db: PrismaClient, id): Promise<any> {
    try {
      return await db.product.delete({ where: { productId: id } });
    } catch (error) {
      throw new Error(`Erro ao deletar novo usuário${error}`);
    }
  }
}
