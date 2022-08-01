import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import UserDTO from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<UserDTO[]> {
    return await this.prisma.user.findMany({});
  }

  async addNewUser(data: UserDTO): Promise<UserDTO> {
    return await this.prisma.user.create({ data });
  }

  async deleteUser(id: number): Promise<UserDTO> {
    return await this.prisma.user.delete({ where: { id } });
  }

  async editUser(id: number, user: UserDTO): Promise<UserDTO> {
    return await this.prisma.user.update({ where: { id }, data: user });
  }
}
