import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import { sendResponse } from "../../Utils/senResponse";
import { MessageServices } from "./Message.services";

const SendMessage = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await MessageServices.SendMessage(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Message sent successfully",
    success: true,
    data: result,
  });
});

const GetMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.GetMessage();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Message fetched successfully",
    success: true,
    data: result,
  });
});

const GetSingleMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.GetSingleMessage(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Message fetched successfully",
    success: true,
    data: result,
  });
});

export const MessageControllers = {
  SendMessage,
  GetMessage,
  GetSingleMessage,
};
