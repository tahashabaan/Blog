import { prop, getModelForClass } from "@typegoose/typegoose";

// bloging model
class Bloging {
  @prop({ required: true, unique: true })
  public readonly blogID: string;
  @prop({ required: true})
  public name: string;
  @prop()
  public description: string;
}

// mongoose.model<Document & Bloging>('bloging')
export const BlogModel = getModelForClass(Bloging);
