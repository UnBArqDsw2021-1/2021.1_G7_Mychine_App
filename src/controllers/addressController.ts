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
      throw new Error(`Erro ao achar um endereço ${e}`);
    }
  }

  async getOne(db: PrismaClient, id) {
    try {
      return await db.address.findUnique({
        where: { userId_cep_number: id },
      });
    } catch (e) {
      throw new Error(`Erro ao achar um endereço ${e}`);
    }
  }

  async list(db: PrismaClient, args?) {
    try {
      return await db.address.findMany();
    } catch (e) {
      throw new Error(`Erro ao achar um endereço ${e}`);
    }
  }

  async create(db: PrismaClient, input: AddresCreate): Promise<address> {
    try {
      return await db.address.create({ data: input });
    } catch (e) {
      throw new Error(`Erro ao criar endereço ${e}`);
    }
  }

  async update(db: PrismaClient, input: AddresUpdate, id): Promise<address> {
    try {
      return await db.address.update({
        data: input,
        where: { userId_cep_number: id },
      });
    } catch (e) {
      throw new Error(`Erro ao atualizar endereço ${e}`);
    }
  }

  async delete(db: PrismaClient, id) {
    try {
      return await db.address.delete({ where: { userId_cep_number: id } });
    } catch (e) {
      throw new Error(`Erro ao deletar novo endereço ${e}`);
    }
  }
}
