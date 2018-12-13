import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { user } from '../model';
import { UserService } from './user.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'user', schema: user }])] ,
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
