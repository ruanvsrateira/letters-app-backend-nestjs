import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LetterDTO } from './letter.entity';
import { LetterService } from './letter.service';

@Controller('letter')
export class LetterController {
  constructor(private readonly letterService: LetterService) {}

  @Get('/')
  async getLetters(): Promise<LetterDTO[]> {
    return await this.letterService.getLetters();
  }

  @Post('/')
  async addNewLetter(@Body() letter: LetterDTO): Promise<LetterDTO> {
    return await this.letterService.addNewLetter(letter);
  }

  @Delete('/:id')
  async deleteLetter(@Param('id') id: string): Promise<LetterDTO> {
    return await this.letterService.deleteLetter(Number(id));
  }

  @Put('/:id')
  async editLetter(
    @Param('id') id: string,
    @Body() letter: LetterDTO,
  ): Promise<LetterDTO> {
    return this.letterService.editLetter(Number(id), letter);
  }
}
