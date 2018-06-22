import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import UserController from './users/controller'
import FlatController from './flats/controller'

const port = process.env.PORT || 4008

const app = createKoaServer({
  controllers: [
    UserController,
    FlatController
  ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))
