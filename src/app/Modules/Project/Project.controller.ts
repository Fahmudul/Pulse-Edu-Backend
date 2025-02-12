import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import { sendResponse } from "../../Utils/senResponse";
import { ProjectServices } from "./Project.services";

const CreateProject = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await ProjectServices.CreateProject(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Project created successfully",
    success: true,
    data: result,
  });
});

const GetProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.GetProject();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Project fetched successfully",
    success: true,
    data: result,
  });
});

const GetSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.SingleProject(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Project fetched successfully",
    success: true,
    data: result,
  });
});

const UpdateProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.UpdateProject(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Project updated successfully",
    success: true,
    data: result,
  });
});

const DeleteProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.DeleteProject(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Project deleted successfully",
    success: true,
    data: result,
  });
});
export const ProjectControllers = {
  CreateProject,
  GetProject,
  GetSingleProject,
  UpdateProject,
  DeleteProject,
};
