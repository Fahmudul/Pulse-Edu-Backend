import httpStatus from "http-status";
import CustomError from "../../Errors/CustomError";
import { TUser } from "./Auth.interface";
import user from "./Auth.model";
import bcrypt from "bcryptjs";
const LoginUser = async (payload: Pick<TUser, "email" | "password">) => {
  // Checking If user exists or not
  const isUserExists = await user.findOne({ email: payload.email });
  if (!isUserExists) {
    throw new CustomError("User not found", httpStatus.NOT_FOUND);
  }
  // Check if password is correct
  const isPasswordMatched = bcrypt.compareSync(
    payload.password as string,
    isUserExists.password as string
  );
  if (!isPasswordMatched) {
    throw new CustomError("Invalid credentials", httpStatus.UNAUTHORIZED);
  }
  return { ...isUserExists.toObject(), password: "" };
};

const RegisterUser = async (
  payload: Pick<TUser, "name" | "email" | "password">
) => {
  const isUserExists = await user.findOne({ email: payload.email });
  if (isUserExists) {
    throw new CustomError("User already exists", httpStatus.CONFLICT);
  }
  let hashedPassword;
  let res;
  if (payload.password) {
    hashedPassword = bcrypt.hashSync(payload.password as string, 10);
    res = await user.create({
      ...payload,
      password: hashedPassword,
    });
  } else {
    res = await user.create({
      ...payload,
      password: undefined,
    });
  }
  return { ...res.toObject(), password: "" };
};

const FindUser = async ({ email, name }: { email: string; name: string }) => {
  console.log("email", email);
  const isUserExists = await user.findOne({ email });
  if (!isUserExists) {
    const result = await RegisterUser({ email, name });
    console.log("result", result);
    return result;
  } else {
    return isUserExists;
  }
};
export const AuthServices = {
  LoginUser,
  RegisterUser,
  FindUser,
};
