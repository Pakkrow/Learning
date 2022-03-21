import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { profileEnd } from 'console';
import { User } from './users.model';
@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(
    firstname: string,
    name: string,
    companyName: string,
    mail: string,
    password: string,
  ) {
    const newUser = new this.userModel({
      firstname,
      name,
      companyName,
      mail,
      password,
    });
    const result = await newUser.save();
    return result.id as string;
  }
  //Ici le [...this.users] permet de créer une copie vers tous les éléments dans le this.users.
  //Si je faisais juste return this.users, j'enverrai un pointeur vers les users ce qui peut poser problème.
  //Donc ici on envoit juste une copie car de toutes façons la requête sert juste à envoyer la liste des utilisateurs.
  async getUsers() {
    const usrs = await this.userModel.find().exec();
    return usrs.map((usr) => ({
      id: usr.id,
      firstname: usr.firstname,
      name: usr.name,
      companyName: usr.companyName,
      password: usr.password,
    }));
  }

  async getSingleUser(usrId: string) {
    const user = await this.getOneUser(usrId);

    return {
      id: user.id,
      firstname: user.firstname,
      name: user.name,
      companyName: user.companyName,
      mail: user.mail,
      password: user.password,
    };
  }
  private async getOneUser(usrId: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(usrId);
    } catch (error) {
      throw new NotFoundException('Could not find a user with this id');
    }
    if (!user) {
      throw new NotFoundException('Could not find a user with this id');
    }
    return user;
  }
}
