import * as mongoose from 'mongoose';

export const user = new mongoose.Schema(
    {
        name: String,
        age: Number,
        birth: String,
        phone : String,
        userName : String,
        password : String,
        userFlag: String,
    },
);