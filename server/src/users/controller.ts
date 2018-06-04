import {
JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
Body, Patch
} from 'routing-controllers'
import { User} from './entity'

export const baseUrl = 'http://localhost:4008'


@JsonController()
export default class UserController {

  @Get('/users/:id([0-9]+)')
    @HttpCode(200)
    getQuiz(
      @Param('id') id: number
    )
    {
      return User.findOneById(id)
    }

 @Post("/users")
 @HttpCode(201)
 async createUser(
 @Body() {name, email, picture, userID}
) {
  const entity = await User.create({
    name: name,
    picture: picture.data.url,
    id: userID,
    email: email,
 }).save();

 return entity;
}
}
