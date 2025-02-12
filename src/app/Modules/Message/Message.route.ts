import { Router } from "express";
import { MessageControllers } from "./Message.controller";

const route = Router();

route.post("/send-message", MessageControllers.SendMessage);

route.get("/get-all-messages", MessageControllers.GetMessage);

route.get("/get-single-message/:id", MessageControllers.GetSingleMessage);


export const MessageRoutes = route;