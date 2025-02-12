import { IMessageBody } from "./Message.interface";
import { Message } from "./Message.model";
const SendMessage = async (payload: IMessageBody) => {
  const response = await Message.create(payload);
  return response;
};
// Get all projects
const GetMessage = async () => {
  const response = await Message.find({});
  return response;
};
// Get single project
const GetSingleMessage = async (id: string) => {
  const response = await Message.findById(id);
  return response;
};

export const MessageServices = {
  SendMessage,
  GetMessage,
  GetSingleMessage,
};
