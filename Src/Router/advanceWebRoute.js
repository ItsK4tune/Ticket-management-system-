import express from 'express'

import configRouter from '../Configs/general Configs/routerSetting'

import List from '../Controller/Seat Controller/List'
import BookedList from '../Controller/Seat Controller/BookedList'
import verifyToken from '../Configs/jwt Configs/verifyToken'

let router = express.Router();

configRouter(router);

const advanceWebRouter = (app) => {
    // Routes
    router.get('/danh-sach-cho', List)
    router.get('/thong-tin/:token', verifyToken, BookedList)

    return app.use('/trang-chu2', router)
}

export default advanceWebRouter;
