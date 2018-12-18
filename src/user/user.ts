import { Document } from 'mongoose';
export interface User extends Document {
    readonly name: string;
    readonly age: number;
    readonly birth: string;
    readonly phone: string;
    readonly userName: string;
    readonly password: string;
    readonly userFlag: string;
}

export class UserToData{
    readonly name: string;
    readonly age: number;
    readonly birth: string;
    readonly phone: string;
    readonly userName: string;
    readonly password: string;
    readonly userFlag?: string;
}