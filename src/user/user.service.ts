import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import { User } from './user';

@Injectable()
export class UserService {

    constructor( @InjectModel('user') private readonly user: Model<User> ){}

    









}
