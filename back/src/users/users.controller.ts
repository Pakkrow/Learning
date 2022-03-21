import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
//C'est ici que je fais mes requêtes, la valeur de retour représente la réponse du back suite à la requête.
//Dans addUser par exemple je retourne un Id qui représente un timestamp lorsque tout ce se passe correctement.
//le 'users' dans les paranthèses du controller représente la route à utiliser pour faire mon call, en l'occurrence là en local ce serait
//localhost:3000/users le port 3000 est défini dans le main.ts dans le /src
//Ensuite le @Post permet d'établir le type de requête, ici Post permet d'envoyer des données qui sont représentées par les @Body
//Les @Body sont donc les valeurs nécessaire au bon fonctionnement de la requête.
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async addUser(
    @Body('firstname') firstname: string,
    @Body('name') name: string,
    @Body('companyname') companyname: string,
    @Body('mail') mail: string,
    @Body('password') password: string,
  ) {
    const generatedId = await this.usersService.insertUser(
      firstname,
      name,
      companyname,
      mail,
      password,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllUsers() {
    const users = await this.usersService.getUsers();
    return users;
  }
  @Get(':id')
  getOneUser(@Param('id') usrId: string) {
    return this.usersService.getSingleUser(usrId);
  }
}
