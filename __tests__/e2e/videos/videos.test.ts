// import request from "supertest";
// import { beforeAll, describe, expect, it } from "vitest";
// import { RouterPaths } from "../../../src/core/roter-paths.ts";
// import { HttpStatuses } from "../../../src/core/types/http-statuses.enum.ts";
// import type { VideoCreateInputDto } from "../../../src/features/videos/dto/video.create-input.dto.ts";
//
// describe("/videos api", () => {
// 	const createdEntity: VideoCreateInputDto = { userName: "Semen" };
// 	let createdEntityId: number;
//
// 	beforeAll(async () => {
// 		await request(app)
// 			.delete(`${RouterPaths.testing}`)
// 			.expect(HttpStatuses.NO_CONTENT_204);
// 	});
//
// 	it("should return 200 and empty array", async () => {
// 		await request(app).get(RouterPaths.videos).expect(HttpStatuses.OK_200, []);
// 	});
//
// 	it("should return 404 for not existing entity", async () => {
// 		await request(app)
// 			.get(`${RouterPaths.videos}/4`)
// 			.expect(HttpStatuses.NOT_FOUND_404);
// 	});
//
// 	it(`shouldn't create new entity with empty data`, async () => {
// 		const data = { userName: "" };
// 		await usersTestManager.createUser(data, HTTP_STATUSES.BAD_REQUEST_400);
//
// 		await request(app).get(RouterPaths.users).expect(HTTP_STATUSES.OK_200, []);
// 	});
//
// 	it("should create new entity with correct data", async () => {
// 		const createResponse = await usersTestManager.createUser(createdEntity);
//
// 		createdEntityId = +createResponse.body.id;
// 	});
//
// 	it("should get entities count 1", async () => {
// 		const res = await request(app).get(RouterPaths.users);
//
// 		expect(res.status).toBe(HTTP_STATUSES.OK_200);
// 		expect(res.body.length).toBe(1);
// 	});
//
// 	it("should find entity by data", async () => {
// 		const res = await request(app).get(
// 			`${RouterPaths.users}?userName=${createdEntity.userName}`,
// 		);
//
// 		expect(res.status).toBe(HTTP_STATUSES.OK_200);
// 		expect(res.body).toEqual([
// 			{
// 				id: expect.any(Number),
// 				userName: createdEntity.userName,
// 			},
// 		]);
// 	});
//
// 	it("should get entity by id", async () => {
// 		const res = await request(app).get(
// 			`${RouterPaths.users}/${createdEntityId}`,
// 		);
//
// 		expect(res.status).toBe(HTTP_STATUSES.OK_200);
// 		expect(res.body).toEqual({
// 			id: expect.any(Number),
// 			userName: createdEntity.userName,
// 		});
// 	});
//
// 	it(`shouldn't update entity by id with empty userName`, async () => {
// 		const updateData = { userName: "" };
// 		await request(app)
// 			.put(`${RouterPaths.users}/${createdEntityId}`)
// 			.send(updateData)
// 			.expect(HTTP_STATUSES.BAD_REQUEST_400);
//
// 		const newRes = await request(app).get(
// 			`${RouterPaths.users}/${createdEntityId}`,
// 		);
//
// 		expect(newRes.status).toBe(HTTP_STATUSES.OK_200);
// 		expect(newRes.body).toEqual({
// 			id: expect.any(Number),
// 			userName: createdEntity.userName,
// 		});
// 	});
//
// 	it(`shouldn't update entity by id with incorrect data`, async () => {
// 		const updateData = {};
//
// 		await request(app)
// 			.put(`${RouterPaths.users}/${createdEntityId}`)
// 			.send(updateData)
// 			.expect(HTTP_STATUSES.BAD_REQUEST_400);
//
// 		const res = await request(app).get(
// 			`${RouterPaths.users}/${createdEntityId}`,
// 		);
//
// 		expect(res.status).toBe(HTTP_STATUSES.OK_200);
// 		expect(res.body).toEqual({
// 			id: expect.any(Number),
// 			userName: createdEntity.userName,
// 		});
// 	});
//
// 	it(`shouldn't update entity that not exist`, async () => {
// 		const updateData: UserUpdateModel = { userName: createdEntity.userName };
//
// 		await request(app)
// 			.put(`${RouterPaths.users}/` + 7)
// 			.send(updateData)
// 			.expect(HTTP_STATUSES.NOT_FOUND_404);
// 	});
//
// 	it("should update entity by id with correct data", async () => {
// 		const updateData: UserUpdateModel = { userName: "new course userName" };
//
// 		await request(app)
// 			.put(`${RouterPaths.users}/${createdEntityId}`)
// 			.send(updateData)
// 			.expect(HTTP_STATUSES.NO_CONTENT_204);
//
// 		const res = await request(app).get(
// 			`${RouterPaths.users}/${createdEntityId}`,
// 		);
//
// 		expect(res.status).toBe(HTTP_STATUSES.OK_200);
// 		expect(res.body).toEqual({
// 			id: expect.any(Number),
// 			userName: updateData.userName,
// 		});
// 	});
//
// 	it(`shouldn't find entity by userName`, async () => {
// 		const res = await request(app).get(`${RouterPaths.users}?userName=ab`);
//
// 		expect(res.status).toBe(HTTP_STATUSES.OK_200);
// 		expect(res.body).toEqual([]);
// 	});
//
// 	it("should delete entity by id", async () => {
// 		await request(app)
// 			.delete(`${RouterPaths.users}/${createdEntityId}`)
// 			.expect(HTTP_STATUSES.NO_CONTENT_204);
//
// 		await request(app)
// 			.get(`${RouterPaths.users}/${createdEntityId}`)
// 			.expect(HTTP_STATUSES.NOT_FOUND_404);
// 	});
// });
