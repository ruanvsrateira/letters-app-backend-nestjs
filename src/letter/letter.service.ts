import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LetterDTO } from './letter.entity';

@Injectable()
export class LetterService {
  constructor(private readonly prisma: PrismaService) {}

  async getLetters(): Promise<LetterDTO[]> {
    return await this.prisma.letter.findMany({});
  }

  async addNewLetter(data: LetterDTO): Promise<LetterDTO> {
    return await this.prisma.letter.create({
      data: {
        name: data.name,
        author: data.author,
        letter: data.letter,
        folder: {
          connect: {
            id: data.folderId,
          },
        },
      },
    });
  }

  async deleteLetter(id: number): Promise<LetterDTO> {
    return await this.prisma.letter.delete({ where: { id } });
  }

  async editLetter(id: number, data: LetterDTO): Promise<LetterDTO> {
    return await this.prisma.letter.update({
      where: { id },
      data,
    });
  }
}
