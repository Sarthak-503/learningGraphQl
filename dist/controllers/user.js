import { User } from "../models/userModels.js";
export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};
export const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};
