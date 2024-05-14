const configViewEngine = (app) => {
    // Setup for ejs viewengine
    app.set("view engine", "ejs");
    app.set("views", "./Src/Views");
}

export default configViewEngine;