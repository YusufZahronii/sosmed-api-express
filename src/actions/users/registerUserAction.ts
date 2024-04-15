import { create } from "domain";
import { IUser } from "../../types/user.type";
import { createUser } from "../../repositories/users/createUser";
import { findUsersByEmailAndUsername } from "../../repositories/users/findUsersByEmailAndUsername";

export const registerUserAction = async (data: IUser) => {
  try {
    const { email, username } = data;
    const users = await findUsersByEmailAndUsername(email, username);

    if (users.length) {
      return {
        status: 400,
        message: "email or username already axist",
      };
    }

    // create user di database
    await createUser(data);

    return {
      status: 200,
      message: "register Succes",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
