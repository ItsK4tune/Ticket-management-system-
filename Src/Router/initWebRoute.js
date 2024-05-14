import express from 'express'

import verifyToken from '../Configs/jwt Configs/verifyToken'

import configRouter from '../Configs/general Configs/routerSetting'

import HomePage from '../Controller/Login-Register Controller/Home'
import Login from '../Controller/Login-Register Controller/Login'
import Register from '../Controller/Login-Register Controller/Register'
import MenuPage from '../Controller/Login-Register Controller/Menu'
import GeneralMenuPage from '../Controller/Login-Register Controller/GuestMenu'

let router = express.Router();

configRouter(router);

const initWebRouter = (app) => {
    // Routes
    router.get('/', HomePage)
    router.get('/dang-ky', Register.RegisterPage)
    router.get('/dang-nhap', Login.LoginPage)
    router.get('/trang-chu/:token', verifyToken, MenuPage)
    router.get('/trang-chu', GeneralMenuPage)

    return app.use('/', router)
}

export default initWebRouter;
