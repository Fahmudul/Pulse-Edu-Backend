import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import { sendResponse } from "../../Utils/senResponse";
import { BlogServices } from "./Blog.services";

const CreateBlog = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await BlogServices.CreateBlog(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Blog created successfully",
    success: true,
    data: result,
  });
});

const GetBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.GetBlog();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Blog fetched successfully",
    success: true,
    data: result,
  });
});

const GetSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.SingleBlog(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Blog fetched successfully",
    success: true,
    data: result,
  });
});

const UpdateBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.UpdateBlog(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Blog updated successfully",
    success: true,
    data: result,
  });
});

const DeleteBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.DeleteBlog(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: " Blog deleted successfully",
    success: true,
    data: result,
  });
});
export const BlogControllers = {
  CreateBlog,
  GetBlog,
  GetSingleBlog,
  UpdateBlog,
  DeleteBlog,
};
