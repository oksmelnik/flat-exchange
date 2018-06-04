import {
JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
Body, Patch
} from 'routing-controllers'
import { User} from './entity'

export const baseUrl = 'http://localhost:4008'


@JsonController()
export default class UserController {

 @Post("/users")
 @HttpCode(201)
 async createUser(
 @Body() {name, email, picture, userID}
) {
  const entity = await User.create({
    name: name,
    picture: picture,
    userID: userID,
    email: email,
 }).save();

 return entity;
}
}
