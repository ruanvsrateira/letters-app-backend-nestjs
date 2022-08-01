import { Injectable } from '@nestjs/common';
import { LetterDTO } from 'src/letter/letter.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { FolderDTO } from './folder.entity';

@Injectable()
export class FolderService {
  constructor(private readonly prisma: PrismaService) {}

  async getFolders(): Promise<FolderDTO[]> {
    return await this.prisma.folder.findMany({
      include: {
        letters: true,
      },
    });
  }

  async createNewFolder(data: FolderDTO): Promise<FolderDTO> {
    return await this.prisma.folder.create({ data });
  }

  async deleteFolder(id: number): Promise<FolderDTO> {
    return await this.prisma.folder.delete({
      where: { id },
    });
  }

  async editFolder(id: number, data: FolderDTO): Promise<FolderDTO> {
    return await this.prisma.folder.update({
      where: { id },
      data,
    });
  }

  async getLettersFromFolder(
    idFolder: number,
  ): Promise<{ letters: LetterDTO[] }> {
    return await this.prisma.folder.findUnique({
      where: { id: idFolder },
      select: {
        letters: true,
      },
    });
  }
}
