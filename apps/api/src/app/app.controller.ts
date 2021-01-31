import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Message, TestDto } from '@vat-mvp/api-interfaces';
import { AppService } from './app.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

interface RequestWithUser extends Request {
  user: TestDto;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: RequestWithUser) {
    return { user: req.user, api: 'test' };
  }
}
