import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    isCreator: boolean;
    createdAt: Date;
}

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isCreator: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const User = mongoose.model<IUser>('User', UserSchema);
