import { IBlogData } from "./Blog.interface";
import { Blog } from "./Blog.model";

const CreateBlog = async (payload: IBlogData) => {
  const response = await Blog.create(payload);
  return response;
};

// Get all projects
const GetBlog = async () => {
  const response = await Blog.find({});
  return response;
};

// Get single project
const SingleBlog = async (id: string) => {
  const response = await Blog.findById(id);
  return response;
};

// Update project
const UpdateBlog = async (id: string, payload: Partial<IBlogData>) => {
  const nonEmptyFields = Object.keys(payload).reduce((acc, field) => {
    if (payload[field] !== "") {
      acc[field] = payload[field];
    }
    return acc;
  }, {} as Partial<IBlogData>);
  const response = await Blog.findByIdAndUpdate(id, nonEmptyFields, {
    new: true,
    runValidators: true,
  });
  return response;
};

// Delete project
const DeleteBlog = async (id: string) => {
  const response = await Blog.findByIdAndDelete(id);
  return response;
};
export const BlogServices = {
  CreateBlog,
  GetBlog,
  SingleBlog,
  UpdateBlog,
  DeleteBlog,
};
