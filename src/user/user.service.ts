import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import { User, UserToData } from './user';

@Injectable()
export class UserService {

    constructor( @InjectModel('user') private readonly user: Model<User> ){}

    async created(user: UserToData): Promise<User> {
            const createUser = new this.user(user);
            return await createUser.save();
    }

    async find(): Promise<User[]>{
        return await this.user.find().exec();
    }
}
