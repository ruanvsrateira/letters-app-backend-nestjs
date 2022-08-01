export class FolderDTO {
  id: number;
  name: string;

  constructor(props: Omit<FolderDTO, 'id'>) {
    Object.assign(this, props);
  }
}
