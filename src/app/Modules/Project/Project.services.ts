import { IProjectData } from "./Project.interface";
import { Project } from "./Project.model";
const CreateProject = async (payload: IProjectData) => {
  const response = await Project.create(payload);
  return response;
};
// Get all projects
const GetProject = async () => {
  const response = await Project.find({});
  return response;
};
// Get single project
const SingleProject = async (id: string) => {
  const response = await Project.findById(id);
  return response;
};

// Update project
const UpdateProject = async (id: string, payload: Partial<IProjectData>) => {
  const nonEmptyFields = Object.keys(payload).reduce((acc, field) => {
    if (payload[field] !== "" && payload[field].length > 0) {
      acc[field] = payload[field];
    }
    return acc;
  }, {} as Partial<IProjectData>);

  // console.log("from line 22", nonEmptyFields);
  const response = await Project.findByIdAndUpdate(id, nonEmptyFields, {
    new: true,
    runValidators: true,
  });
  return response;
};
// Delete project
const DeleteProject = async (id: string) => {
  const response = await Project.findByIdAndDelete(id);
  return response;
};
export const ProjectServices = {
  CreateProject,
  GetProject,
  SingleProject,
  UpdateProject,
  DeleteProject,
};
