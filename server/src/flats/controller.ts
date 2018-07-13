import {
  JsonController,
  Authorized,
  CurrentUser,
  Post,
  Param,
  BadRequestError,
  HttpCode,
  NotFoundError,
  ForbiddenError,
  Get,
  Body,
  Put
} from "routing-controllers";
import { Flat } from "./entity";
import { User } from "../users/entity";

export const baseUrl = "http://localhost:4008";

@JsonController()
export default class FlatController {
  @Get("/flats/:id([0-9]+)")
  @HttpCode(200)
  getFlat(@Param("id") id: number) {
    return Flat.findOneById(id);
  }

  @Get("/:id([0-9]+)/flats/")
  @HttpCode(200)
  async getAllFlat(@Param("id") userId: number) {
    console.log(userId);
    const user = await User.findOneById(userId);
    if (!user) throw new BadRequestError("no user");
    const flats = await Flat.find({
      where: { user: user }
    });
    return flats;
  }

  @Post("/:id([0-9]+)/flats")
  @HttpCode(201)
  async addFlat(@Param("id") userId: number, @Body() flat: Partial<Flat>) {
    const user = await User.findOneById(userId);

    if (!user) throw new BadRequestError("User doesn't exist.");
    const entity = await Flat.create({
      room_type: flat.room_type,
      home_type: flat.home_type,
      accomodate: flat.accomodate,
      address: flat.address,
      is_active: flat.is_active,
      user: user
    }).save();
    return entity;
  }

  @Put("/flats/:id([0-9]+)")
  @HttpCode(201)
  async changeFlat(@Param("id") id: number, @Body() updates: Partial<Flat>) {
    const flat = await Flat.findOneById(id);
    if (!flat) throw new BadRequestError("Flat doesn't exist.");
    const changedFlat = await Flat.merge(flat, updates).save();
    return changedFlat;
  }
}
