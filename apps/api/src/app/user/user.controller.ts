import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '../data-access/user/user.schema';
import { UsersRepository } from '../data-access/user/users.repository';

@Controller('user')
export class UserController {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Get()
  getAll() {
    return this.usersRepository.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersRepository.findOne({ _id: id });
  }

  @Post()
  create(@Body() user: User) {
    return this.usersRepository.create(user);
  }
}
