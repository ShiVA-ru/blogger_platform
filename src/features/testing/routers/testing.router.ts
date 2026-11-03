import { type Response, Router } from "express";
import { HttpStatuses } from "../../../core/types/http-statuses.enum.js";
import { db } from "../../../db/in-memory.db.js";

export const testingRouter = Router({});

testingRouter.delete("/all-data", (_req, res: Response) => {
	db.videos = [];
	res.sendStatus(HttpStatuses.NO_CONTENT_204);
});
