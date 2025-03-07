import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import { sendResponse } from "../../Utils/sendResponse";
import { TeacherServices } from "./Teacher.services";
// import { AuthServices } from "./Auth.services";

const SaveAvailability = catchAsync(async (req, res) => {
  // console.log(req.body);
  const response = await TeacherServices.SaveAvailabilityInDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Schedule saved successfully",
    success: true,
    data: response,
  });
});

const GetTeacherDetails = catchAsync(async (req, res) => {
  const result = await TeacherServices.GetTeacherDetails(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Teacher details retrieved successfully",
    success: true,
    data: result,
  });
});
const GetMeTeacherDetails = catchAsync(async (req, res) => {
  const result = await TeacherServices.GetMeTeacherDetails(req.params.id);
  console.log("from line 20", req.params.email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Teacher details retrieved successfully",
    success: true,
    data: result,
  });
});
const GetAvailability = catchAsync(async (req, res) => {
  const result = await TeacherServices.GetAvailability(req.params.email);
  console.log("from line 20", req.params.email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Schedule retrieved successfully",
    success: true,
    data: result,
  });
});

const GetAllTeacher = catchAsync(async (req, res) => {
  const result = await TeacherServices.GetAllTeacher(req.params.email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Teacher retrieved successfully",
    success: true,
    data: result,
  });
});
const getSingleTeacher = catchAsync(async (req, res) => {
  const result = await TeacherServices.getSingleTeacher(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Teacher retrieved successfully",
    success: true,
    data: result,
  });
});
const getTeacherCalendar = catchAsync(async (req, res) => {
  const result = await TeacherServices.getTeacherCalendar(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Teacher retrieved successfully",
    success: true,
    data: result,
  });
});
export const TeacherControllers = {
  SaveAvailability,
  GetTeacherDetails,
  GetAvailability,
  GetAllTeacher,
  GetMeTeacherDetails,
  getSingleTeacher,
  getTeacherCalendar,
};
