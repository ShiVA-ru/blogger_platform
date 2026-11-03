import type { Resolution } from "../types/resolution.enum.js";

export type VideoUpdateInputDto = {
	title: string;
	author: string;
	availableResolutions: Resolution[];
	canBeDownloaded: boolean;
	minAgeRestriction: number;
	publicationDate: Date;
};
