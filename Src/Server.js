import express from 'express';

import configViewEngine from './Configs/general Configs/viewEngine';
import configServer from './Configs/general Configs/serverSetting';

import initWebRouter from './Router/initWebRoute';
import advanceWebRouter from './Router/advanceWebRoute'
import API from './Router/API'

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Route call
initWebRouter(app);
advanceWebRouter(app);
API(app);

// Config call
configViewEngine(app);
configServer(app);

app.listen(PORT, () => {
    console.log(`Khoi tao server tai http://localhost:${PORT}`);
})  