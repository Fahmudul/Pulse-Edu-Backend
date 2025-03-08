import { IAvailability } from "./Teacher.interface";
import Teacher from "./Teacher.model";

const SaveAvailabilityInDB = async (payload: any) => {
  console.log("From teacher service line 4", payload);
  const { email, availability } = payload;
  const teacherFound = await Teacher.findOne({ email });
  const updatedAvailability = teacherFound?.availability || {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  };

  Object.keys(availability).forEach((day: string) => {
    if (Array.isArray(availability[day]) && availability[day].length > 0) {
      console.log("hitting", updatedAvailability[day]);

      updatedAvailability[day] = [
        ...(teacherFound?.availability[day] || []),
        ...availability[day],
      ] as { startTime: string; endTime: string; isBooked: boolean }[];
    }
  });
  const response = await Teacher.findOneAndUpdate(
    { email: payload.email },
    { $set: { availability: updatedAvailability } },
    { new: true, upsert: true }
  );
  console.log(response);
  return response;
};

const GetTeacherDetails = async (id: string) => {
  console.log("from line 30", id);
  const res = await Teacher.findById(id);
  const result = res;
  // console.log(res?.toObject());
  const nonEmptyDays: IAvailability = {};
  if (res?.availability) {
    Object.keys(res.availability).forEach((day) => {
      if (res.availability[day].length > 0) {
        nonEmptyDays[day] = res.availability[day];
      }
    });
  }
  return { ...res?.toObject(), availability: nonEmptyDays };
};
const GetMeTeacherDetails = async (email: string) => {
  // console.log("from line 30", id);
  const res = await Teacher.findOne({ email });
  const result = res;
  // console.log(res?.toObject());
  const nonEmptyDays: IAvailability = {};
  if (res?.availability) {
    Object.keys(res.availability).forEach((day) => {
      if (res.availability[day].length > 0) {
        nonEmptyDays[day] = res.availability[day];
      }
    });
  }
  return { ...res?.toObject(), availability: nonEmptyDays };
};
const GetAvailability = async (email: string) => {
  console.log("from line 30", email);
  const res = await Teacher.findOne({ email });
  const result = res;
  // console.log(res?.toObject());
  const nonEmptyDays: IAvailability = {};
  if (res?.availability) {
    Object.keys(res.availability).forEach((day) => {
      if (res.availability[day].length > 0) {
        nonEmptyDays[day] = res.availability[day];
      }
    });
  }
  // console.log(nonEmptyDays);
  return nonEmptyDays;
};
const GetAllTeacher = async (email: string) => {
  console.log("from line 30", email);
  const res = await Teacher.find();

  return res;
};

const getSingleTeacher = async (id: string) => {
  const res = await Teacher.findById(id).populate("user");
  return res;
};
const getTeacherCalendar = async (id: string) => {
  const res = await Teacher.findById(id);
  const googleAccessToken = res?.googleAccessToken;
  const eventsResponse = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events",
    {
      headers: {
        Authorization: `Bearer ${googleAccessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const events = await eventsResponse.json();
  console.log("teacher events", events);
  const modifiedResponse = events.items.map((item: any) => ({
    title: item.summary,
    description: item.description,
    start: new Date(item.start.dateTime),
    end: new Date(item.end.dateTime),
  }));
  console.log("modified ", modifiedResponse);
  return modifiedResponse;
};
export const TeacherServices = {
  SaveAvailabilityInDB,
  GetTeacherDetails,
  GetAvailability,
  GetAllTeacher,
  GetMeTeacherDetails,
  getSingleTeacher,
  getTeacherCalendar,
};
