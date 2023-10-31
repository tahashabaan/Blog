import {prop, getModelForClass} from '@typegoose/typegoose';

enum Status {
  canceled,
  pending,
  published,
}

class Post {

    @prop({required: true, unique: true})
    public readonly postID: string;
    @prop({required: true})
    public title: string;
    @prop()
    public content: string;
    @prop({required: true})
    public summary: string;
    //forigen key to  blog
    @prop({required: true})
    public blogID: string;
    //forigen key to publisher
    @prop({required: true})
    public publisherID: string;
    @prop({required: true})
    public statusPost: Status
  
}


export const PostModel = getModelForClass(Post);
