import { Lead } from "../models/leadModel.js";
import { User } from "../models/userModels.js";
import {Column} from "../models/columnModel.js";
export const getAllUsers = async ()=>{
    const users = await User.find();
    return users;
  }
export const getUserById = async (id:string) => {
    const user = await User.findById(id);
    return user;
}  
export const getAllLeads = async ()=>{
  const users = await Lead.find();
  return users;
}
export const getAllColumn = async ()=>{
  const column = await Column.find();
  return column;
}