import express, { type Express } from "express";
import { RouterPaths } from "./core/roter-paths.js";
import { HttpStatuses } from "./core/types/http-statuses.enum.js";
import { testingRouter } from "./features/testing/routers/testing.router.js";
import { videosRouter } from "./features/videos/routers/videos.router.js";

export const setupApp = (app: Express) => {
	app.use(express.json()); // middleware для парсинга JSON в теле запроса
	app.use(RouterPaths.videos, videosRouter);
	app.use(RouterPaths.testing, testingRouter);
	// основной роут
	app.get("/", (_req, res) => {
		res.status(HttpStatuses.OK_200).send(`hello world`);
	});

	return app;
};
