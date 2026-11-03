import { Resolution } from "../features/videos/types/resolution.enum.js";
import type { VideoType } from "../features/videos/types/video.type.js";

export type DBType = {
	videos: VideoType[];
};

export const db: DBType = {
	videos: [
		{
			id: 1,
			title: "front",
			author: "Ben",
			canBeDownloaded: true,
			minAgeRestriction: 18,
			createdAt: new Date(),
			publicationDate: new Date(),
			availableResolutions: [Resolution.P1440],
		},
		{
			id: 2,
			title: "back",
			author: "Bob",
			canBeDownloaded: true,
			minAgeRestriction: 18,
			createdAt: new Date(),
			publicationDate: new Date(),
			availableResolutions: [Resolution.P2160],
		},
	],
};
