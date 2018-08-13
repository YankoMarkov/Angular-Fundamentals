export class CreateProductModel {
  constructor(
    public name: string,
    public price: number,
    public image: string,
    public description: string,
    public category: number
  ) { }
}