import { PrismaClient, address, user } from '@prisma/client';
import { AddresCreate, AddresUpdate } from '@models/Address';
import { BaseController } from './baseController';

export class AddressController extends BaseController {
  async get(db: PrismaClient, id): Promise<address[]> {
    try {
      const user = await db.user.findUnique({
        where: { userId: id },
        include: { address: true },
      });

      return user.address;
    } catch (e) {
      throw new Error(`Erro ao achar um address ${e}`);
    }
  }

  async getOne(db: PrismaClient, id) {
    try {
      return await db.address.findUnique({
        where: { userId_cep_number: id },
      });
    } catch (e) {
      throw new Error(`Erro ao achar um address ${e}`);
    }
  }

  list(db: PrismaClient, args?) {
    throw new Error('Não implementado');
  }

  async create(db: PrismaClient, input: AddresCreate): Promise<address> {
    try {
      return await db.address.create({ data: input });
    } catch (e) {
      throw new Error(`Erro ao criar address ${e}`);
    }
  }

  async update(db: PrismaClient, input: AddresUpdate, id): Promise<address> {
    try {
      return await db.address.update({
        data: input,
        where: { userId_cep_number: id },
      });
    } catch (e) {
      throw new Error(`Erro ao atualizar address ${e}`);
    }
  }

  async delete(db: PrismaClient, id) {
    try {
      return await db.address.delete({ where: { userId_cep_number: id } });
    } catch (e) {
      throw new Error(`Erro ao deletar novo address${e}`);
    }
  }
}
