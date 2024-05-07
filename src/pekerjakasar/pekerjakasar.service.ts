import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PekerjakasarService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createPekerjakasarDto: Prisma.PekerjaKasarCreateInput) {
    return this.databaseService.pekerjaKasar.create({
      data: createPekerjakasarDto
    })
  }

  async findAll(role?: 'pengocok' | 'pengasah' | 'pengaduk') {
    if (role) {
      return this.databaseService.pekerjaKasar.findMany({
        where: { role }
      })
    }

    return this.databaseService.pekerjaKasar.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.pekerjaKasar.findUnique({
      where: { id }
    })
  }

  async update(id: number, updatePekerjakasarDto: Prisma.PekerjaKasarUpdateInput) {
    return this.databaseService.pekerjaKasar.update({
      where: {
        id,
      },
      data: updatePekerjakasarDto
    })
  }

  async remove(id: number) {
    return this.databaseService.pekerjaKasar.delete({
      where: { id }
    })
  }
}
