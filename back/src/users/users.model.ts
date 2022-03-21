import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  name: { type: String, required: true },
  companyName: { type: String, required: false },
  mail: { type: String, required: true },
  password: { type: String, required: true },
});

export interface User extends mongoose.Document {
  id: string;
  firstname: string;
  name: string;
  companyName: string;
  mail: string;
  password: string;
}
