import { Module } from '@nestjs/common';
import { PekerjakasarService } from './pekerjakasar.service';
import { PekerjakasarController } from './pekerjakasar.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PekerjakasarController],
  providers: [PekerjakasarService],
})
export class PekerjakasarModule {}
