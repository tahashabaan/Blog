import {prop, getModelForClass} from '@typegoose/typegoose';



class Comment {
    @prop({required: true, unique: true})
    public readonly commentID: string;
    @prop({required: true})
    public message: string;
    //forigen key to  post
    @prop({required: true})
    public postID: string;
    //forigen key to itsel
    @prop({required: true})
    public parentCommentID: string;
    //forigen key to publisher
    @prop({required: true})
    public commentBYID: string
  
}

export const CommentModel = getModelForClass(Comment);
