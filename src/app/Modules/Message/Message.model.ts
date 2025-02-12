import { Schema, model } from "mongoose";
import { IMessageBody } from "./Message.interface";
const MessageSchema = new Schema<IMessageBody>(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    message: { type: String },
    phone: { type: String },
    subject: { type: String },
  },
  {
    timestamps: true,
  }
);
export const Message = model<IMessageBody>("Message", MessageSchema);
