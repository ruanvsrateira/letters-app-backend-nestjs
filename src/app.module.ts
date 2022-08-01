import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { FolderController } from './folder/folder.controller';
import { FolderService } from './folder/folder.service';
import { LetterService } from './letter/letter.service';
import { LetterController } from './letter/letter.controller';

@Module({
  imports: [],
  controllers: [UserController, FolderController, LetterController],
  providers: [PrismaService, UserService, FolderService, LetterService],
})
export class AppModule {}
