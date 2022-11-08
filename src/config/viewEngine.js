import express  from "express";

const viewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set('view engine', 'ejs');
    app.set('views', './src/resources/views')
}

export default viewEngine;