import { prop, getModelForClass } from "@typegoose/typegoose";

class Tag {
  @prop({ required: true, unique: true })
  public readonly tagID: string;

  @prop({ required: true })
  public title: string;

  @prop()
  public description: string;
}

export const TagModel = getModelForClass(Tag);
