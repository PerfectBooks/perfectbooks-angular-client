export class ServiceHeader {
  public shortTitle : string;
  public title : string;
  public descriptionTitle:string;
  public description : string;
  public price : string;
  constructor(shortTitle : string, title : string, descriptionTitle : string, description : string, price : string){
    this.shortTitle=shortTitle;
    this.title=title;
    this.descriptionTitle=descriptionTitle;
    this.description=description;
    this.price=price;
  }
}
