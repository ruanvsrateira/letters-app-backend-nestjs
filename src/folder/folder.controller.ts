import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LetterDTO } from 'src/letter/letter.entity';
import { FolderDTO } from './folder.entity';
import { FolderService } from './folder.service';

@Controller('folder')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Get('/')
  async getFolders(): Promise<FolderDTO[]> {
    return await this.folderService.getFolders();
  }

  @Get('/:id/letters')
  async getLettersFromFolder(
    @Param('id') id: string,
  ): Promise<{ letters: LetterDTO[] }> {
    return await this.folderService.getLettersFromFolder(Number(id));
  }

  @Post('/')
  async createNewFolder(@Body() folder: FolderDTO): Promise<FolderDTO> {
    return await this.folderService.createNewFolder(folder);
  }

  @Delete('/:id')
  async deleteFolder(@Param('id') id: string): Promise<FolderDTO> {
    return await this.folderService.deleteFolder(Number(id));
  }

  @Put('/:id')
  async editFolder(
    @Param('id') id: string,
    @Body() folder: FolderDTO,
  ): Promise<FolderDTO> {
    return await this.folderService.editFolder(Number(id), folder);
  }
}
