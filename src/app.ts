import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import router from "./app/Routes";
import globalErrorHandler from "./app/Errors/globalErrorHandler";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use("/api/v1", router);
app.get("/", async (req: Request, res: Response) => {
  res.send("Hello from Express");
});
app.use(globalErrorHandler);
export default app;
