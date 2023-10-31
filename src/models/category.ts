import { prop, getModelForClass } from "@typegoose/typegoose";

class Category {
  @prop({ required: true, unique: true })
  public readonly blogingID: string;
  @prop({ required: true })
  public name: string;
  @prop()
  public description: string;
  @prop({ required: true })
  public postID: string;
}

export const CategoryModel = getModelForClass(Category);
