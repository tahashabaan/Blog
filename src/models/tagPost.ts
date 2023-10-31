import { prop, getModelForClass } from "@typegoose/typegoose";

 class TagPost {
  @prop({ required: true, unique: true, index: true })
  public readonly TagPostID: string;
  //forigen key to  post
  @prop({ required: true, foreignKey: true })
  public postID: string;
  //forigen key to tags
  @prop({ required: true, foreignKey: true })
  public TagID: string;
}


export default getModelForClass(TagPost);
