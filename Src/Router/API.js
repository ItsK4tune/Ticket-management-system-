import express from 'express'

import reserveSeat from '../Configs/general Configs/lock'
import {timeWindow} from '../Configs/general Configs/timeWindow'
import verifyToken from '../Configs/jwt Configs/verifyToken'
import checkBookStat from '../Configs/router Configs/checkBookStat'
import checkDeleteStat from '../Configs/router Configs/checkDeleteStat'

import configRouter from '../Configs/general Configs/routerSetting'

import Login from '../Controller/Login-Register Controller/Login'
import Register from '../Controller/Login-Register Controller/Register'
import Book from '../Controller/Seat Controller/Book'
import Delete from '../Controller/Seat Controller/Delete'

let router = express.Router();

// router.use(timeWindow)

configRouter(router);

const API = (app) => {
    // API
    router.post('/api/dang-ky', Register.RegisterFunction)
    router.post('/api/dang-nhap', Login.LoginFunction)
    router.post(`/api/dat-cho/:token`, verifyToken, checkBookStat, reserveSeat, Book)
    router.post('/api/huy-cho/:token', verifyToken, checkDeleteStat, Delete)
    
    return app.use('/', router)
}

export default API;
