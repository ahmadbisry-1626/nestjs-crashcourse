import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PekerjakasarService } from './pekerjakasar.service';
import { Prisma } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler';

@SkipThrottle()
@Controller('pekerjakasar')
export class PekerjakasarController {
  constructor(private readonly pekerjakasarService: PekerjakasarService) { }

  @Post()
  create(@Body() createPekerjakasarDto: Prisma.PekerjaKasarCreateInput) {
    return this.pekerjakasarService.create(createPekerjakasarDto);
  }

  @SkipThrottle({ default: false })
  @Get()
  findAll(@Query('role') role?: 'pengocok' | 'pengasah' | 'pengaduk') {
    return this.pekerjakasarService.findAll(role);
  }

  @Throttle({ short: { ttl: 1000, limit: 3 } })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pekerjakasarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePekerjakasarDto: Prisma.PekerjaKasarUpdateInput) {
    return this.pekerjakasarService.update(+id, updatePekerjakasarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pekerjakasarService.remove(+id);
  }
}
