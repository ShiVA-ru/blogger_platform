import type { Resolution } from "./resolution.enum.js";

export type VideoType = {
	id: number;
	title: string;
	author: string;
	canBeDownloaded: boolean;
	minAgeRestriction: number;
	createdAt: Date;
	publicationDate: Date;
	availableResolutions: Resolution[];
};
