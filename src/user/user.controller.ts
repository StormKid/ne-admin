import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserToData, User } from './user';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() userToData: UserToData){
        this.userService.created(userToData);
    }

    @Get()
    async findAll(): Promise<User[]>{
        return this.userService.find();
    }
}
