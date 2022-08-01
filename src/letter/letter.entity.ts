export class LetterDTO {
  id: number;
  name!: string;
  author!: string;
  letter!: string;

  folderId: number;

  constructor(props: Omit<LetterDTO, 'id'>) {
    Object.assign(this, props);
  }
}
