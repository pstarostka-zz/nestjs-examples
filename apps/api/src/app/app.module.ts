import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataAccessModule } from './data-access/data-access.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DataAccessModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
