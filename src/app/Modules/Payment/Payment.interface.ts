import mongoose from "mongoose";

export interface IPayment {
  price: number;
  paymentId: string;
  student: string;
  teacher: string;
  courseName: string;
  status: string;
  currency: string;
  method: string;
  bookingId: mongoose.Types.ObjectId;
}

export interface IPaymentPayload {
  paymentId: string;
  student: string;
  price: number;
  courseName: string;
  teacher: string;
  status: string;
  currency: string;
  bookingId: string;
  method: string;
  studentName: string;
  teacherName: string;
}
