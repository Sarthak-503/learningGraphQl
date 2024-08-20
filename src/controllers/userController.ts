import { User } from "../models/userModels.js";

export const getAllUsers = async ()=>{
    const users = await User.find();
    return users;
  }
export const getUserById =async (parent:any,arg:{id:string}) => {
    const user = await User.findById(arg.id);
    return user;
}  
 