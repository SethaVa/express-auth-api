import mongoose from "mongoose";

interface IUser {
  username: { type: string; require: boolean; unique: boolean };
  password: { type: string; require: boolean; unique: boolean };
  email: { type: string; require: boolean; unique: boolean };
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  profile: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    require: [true, "Please provide unique Username"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    require: [true, "Please provide Password"],
    unique: false,
  },
  email: {
    type: String,
    require: [true, "Please provide Email"],
    unique: [true, "Email Exist"],
  },
  firstName: String,
  lastName: String,
  mobile: String,
  address: String,
  profile: String,
});

export default mongoose.model("User", UserSchema);
