import {prop, getModelForClass} from '@typegoose/typegoose';


 class UserModel {
    @prop({required:true,unique:true})
    private readonly userID:string;
    @prop({required:true})
    private name:string;
    @prop({required:true})
    private email:string;
    @prop({required:true})
    private password:string
}

export default getModelForClass(UserModel);