import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import UserDTO from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getUsers(): Promise<UserDTO[]> {
    return await this.userService.getUsers();
  }

  @Post('')
  async addNewUser(@Body() user: UserDTO): Promise<UserDTO> {
    return await this.userService.addNewUser(user);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.deleteUser(Number(id));
  }

  @Put('/:id')
  async editUser(
    @Body() user: UserDTO,
    @Param('id') id: string,
  ): Promise<UserDTO> {
    return await this.userService.editUser(Number(id), user);
  }
}
