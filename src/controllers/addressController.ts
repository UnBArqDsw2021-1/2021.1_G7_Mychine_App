import { PrismaClient, address, user } from '@prisma/client';
import { AddresCreate, AddresUpdate } from '@models/Address';
import { BaseController } from './baseController';

export class AddressController extends BaseController {
  async get(db: PrismaClient, id): Promise<address[]> {
    try {
      const user = await db.user.findUnique({
        where: { userId: id },
        include: { address: true },
        // select:{user:false},
      });

      return user.address;
    } catch (e) {
      throw new Error(`Erro ao achar um address ${e}`);
    }
  }
}
