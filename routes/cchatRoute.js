import express from "express";

import { createChat, getAllChat } from "../controller/cchatController.js";

const chatRouter = express.Router();

chatRouter.route("/").get(getAllChat).post(createChat);

export default chatRouter;
