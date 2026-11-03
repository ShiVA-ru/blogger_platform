import type { Resolution } from "../types/resolution.enum.js";

export type VideoCreateInputDto = {
	title: string;
	author: string;
	availableResolutions: Resolution[];
};
