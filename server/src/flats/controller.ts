import {
JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
Body, Patch
} from 'routing-controllers'
import { Flat} from './entity'
import { User } from '../users/entity'

export const baseUrl = 'http://localhost:4008'


@JsonController()
export default class FlatController {

  @Get('/flats/:id([0-9]+)')
    @HttpCode(200)
    getQuiz(
      @Param('id') id: number
    )
    {
      return Flat.findOneById(id)
    }

 @Post("/:id([0-9]+)/flats")
 @HttpCode(201)
 async addFlat(
  @Param('id') userId: number,
  @Body() flat: Partial <Flat>
) {
  const user = await User.findOneById(userId)

  if(!user) throw new BadRequestError("User doesn't exist.")
  const entity = await Flat.create({
    room_type: flat.room_type,
    home_type: flat.home_type,
    accomodate: flat.accomodate,
    address: flat.address,
    is_active: flat.is_active,
    user: user
  }).save()
  return entity
}
}
