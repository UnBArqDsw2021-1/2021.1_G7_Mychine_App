import { BaseController } from "./baseController";

import { UserCreate, UserUpdate } from "../models/User";
import { PrismaClient, user } from ".prisma/client";

export class UserController extends BaseController {
  async get(db: PrismaClient, id): Promise<user> {
    try {
      return await db.user.findUnique({ where: { userId: id } });
    } catch (e) {
      throw new Error(`Erro ao achar um user ${e}`);
    }
  }

  async getOne(db: PrismaClient, args = {}) {
    try {
      return await db.user.findFirst(args);
    } catch (e) {
      throw new Error(`Erro ao achar um user ${e}`);
    }
  }

  async list(db: PrismaClient, args = {}) {
    try {
      return await db.user.findMany(args);
    } catch (e) {
      throw new Error(`Erro ao achar um user ${e}`);
    }
  }

  async create(db: PrismaClient, input: UserCreate) {
    try {
      return await db.user.create({ data: input });
    } catch (e) {
      throw new Error(`Erro ao criar novo usuário${e}`);
    }
  }

  async update(db: PrismaClient, input: UserUpdate, id) {
    try {
      return await db.user.update({ data: input, where: { userId: id } });
    } catch (error) {
      throw new Error(`Erro ao atualizar novo usuário${error}`);
    }
  }

  async delete(db: PrismaClient, id) {
    try {
      return await db.user.delete({ where: { userId: id } });
    } catch (error) {
      throw new Error(`Erro ao deletar novo usuário${error}`);
    }
  }
}
