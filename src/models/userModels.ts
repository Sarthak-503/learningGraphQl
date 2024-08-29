import mongoose from 'mongoose';

type UserType = {
    name:string;
    email:string;
    password:string;
    watching:string[];
    watched:string[];
    saved:string[];
    verified:boolean;
    gender:"male" | "female";
    role:"admin" | "user";
    googleId?:string;
    _id:string;
    createdAt:Date;
    updatedAt:Date;

}

const schema = new mongoose.Schema({
    name:{type:String,required:true},
    googleId:{type:String,required:true,sparse:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    gender:{type:String,enum:["male","female"]},
    avatar:{type:String},
    verified:{type:String,default:false},

    watching:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],

    watched:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    saved:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],
    role:{
        type:String,
        enum:["user","admin","instructor"],
        default:"user"
    },

    verificationToken:{type:String},
    verificationExpire:{type:Date},

    passwordResetToken:{type:String},
    passwordResetExpire:{type:Date},


    location:{type:String,required:true},
    leadStatus:{type:String,required:true},
    // contactNo:{type:Int,required:true},
    quickAction:{type:String,required:true},
    icon:{type:String,required:true}

},
{timestamps:true}
)

export const User = mongoose.models?.User || mongoose.model<UserType>("User",schema);
export type {UserType};