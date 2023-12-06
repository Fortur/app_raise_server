// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './core/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule],
})
export class AppModule {}
