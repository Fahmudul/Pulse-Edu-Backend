import { Schema, model } from "mongoose";
import { ITeacher } from "./Teacher.interface";

const teacherSchema = new Schema<ITeacher>({
  name: { type: String },
  email: { type: String, required: true },
  googleAccessToken: { type: String },
  googleid: { type: String },
  phone: { type: String },

  image: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref:"Users"
  },
  availability: { type: Object },
});

const Teacher = model<ITeacher>("Teacher", teacherSchema);

export default Teacher;
