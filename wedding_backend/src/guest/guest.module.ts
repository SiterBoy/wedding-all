import { Module } from '@nestjs/common';
import { GuestService } from './services/guest.service';
import { GuestController } from './controllers/guest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestDataEntity } from './models/guest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuestDataEntity])],
  providers: [GuestService],
  controllers: [GuestController],
})
export class GuestModule {}
