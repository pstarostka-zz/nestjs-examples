import { Module } from '@nestjs/common';
import { UserDataAccessModule } from '../data-access/user/user-data-access.module';
import { UserController } from './user.controller';

@Module({
  imports: [UserDataAccessModule],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
