import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GuestDataEntity } from '../models/guest.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GuestData, MessageData } from '../models/guest.interface';

@Injectable()
export class GuestService {
  constructor(
    @InjectRepository(GuestDataEntity)
    private readonly guestDataRepository: Repository<GuestDataEntity>,
  ) {}

  async getAllGuest(): Promise<GuestData[]> {
    try {
      return await this.guestDataRepository.find();
    } catch (err) {
      console.log(err);
    }
  }
  async createGuest(guestData: GuestData): Promise<GuestData> {
    return await this.guestDataRepository.save(guestData);
  }

  async getGuestInfo(hash: number): Promise<GuestData | string> {
    const oneUser = await this.guestDataRepository.findOne({
      where: {
        hash: hash,
      },
    });

    return oneUser ? oneUser : 'Not user with that userHashID';
  }

  async addMessageToGuest(hash: number, messageData: MessageData) {
    try {
      await this.guestDataRepository.update(
        {
          hash,
        },
        {
          message: messageData.message,
        },
      );

      return 'Ok';
    } catch (err) {
      console.log(err);
    }
  }
}
