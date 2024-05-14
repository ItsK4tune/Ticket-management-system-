import express from 'express';

let configServer = (app) =>{
    // Set Public as public folder
    app.use(express.static('./Src/Public'));
}

export default configServer;