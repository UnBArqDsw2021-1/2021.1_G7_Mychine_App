import { PrismaClient, category } from '@prisma/client';
import { CategoryUpdate, CategoryCreate } from '@models/Category';
import { BaseController } from './baseController';

export class CategoryController extends BaseController {
  async get(db: PrismaClient, id): Promise<category> {
    try {
      return await db.category.findUnique({ where: { categoryId: id } });
    } catch (e) {
      throw new Error(`Erro ao achar um category ${e}`);
    }
  }

  async getOne(db: PrismaClient, args = {}): Promise<category> {
    try {
      return await db.category.findFirst(args);
    } catch (e) {
      throw new Error(`Erro ao achar um category ${e}`);
    }
  }

  async list(db: PrismaClient, args = {}): Promise<category[]> {
    try {
      return await db.category.findMany(args);
    } catch (e) {
      throw new Error(`Erro ao achar um category ${e}`);
    }
  }

  async create(db: PrismaClient, input: CategoryCreate): Promise<category> {
    try {
      return await db.category.create({ data: input });
    } catch (e) {
      throw new Error(`Erro ao criar novo usuário${e}`);
    }
  }

  async update(db: PrismaClient, input: CategoryUpdate, id): Promise<category> {
    try {
      return await db.category.update({
        data: input,
        where: { categoryId: id },
      });
    } catch (error) {
      throw new Error(`Erro ao atualizar novo usuário${error}`);
    }
  }

  async delete(db: PrismaClient, id): Promise<any> {
    try {
      return await db.category.delete({ where: { categoryId: id } });
    } catch (error) {
      throw new Error(`Erro ao deletar novo usuário${error}`);
    }
  }
}
