import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { GuestService } from '../services/guest.service';
import { GuestData, MessageData } from '../models/guest.interface';

@Controller('guest')
export class GuestController {
  constructor(private guestService: GuestService) {}

  @Get()
  getAllUsers() {
    return this.guestService.getAllGuest();
  }

  @Post()
  create(@Body() guest: GuestData) {
    return this.guestService.createGuest(guest);
  }

  @Get('/:hash')
  getOneByHash(@Param() params) {
    return this.guestService.getGuestInfo(params.hash);
  }

  @Post('/update-message/:hash')
  updateMessage(@Body() messageData: MessageData, @Param() params) {
    return this.guestService.addMessageToGuest(params.hash, messageData);
  }
}
