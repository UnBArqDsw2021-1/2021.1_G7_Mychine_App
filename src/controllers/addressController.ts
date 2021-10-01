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

  async getOne(db, args = {}) {
    try {
      return await db.address.findUnique({
        where: { userId_cep_number: args },
      });
    } catch (e) {
      throw new Error(`Erro ao achar um address ${e}`);
    }
  }

  list(db, args?) {
    throw new Error('Não implementado');
  }

  async create(db, input: AddresCreate) {
    try {
      return await db.address.create({ data: input });
    } catch (error) {}
    throw new Error('Não implementado');
  }

  update(db, input, id) {
    throw new Error('Não implementado');
  }

  delete(db, id) {
    throw new Error('Não implementado');
  }
}
