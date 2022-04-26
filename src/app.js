const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = 8000;
const imgsrc = "https://source.unsplash.com/1200x1200/?dark ";

const v_path = path.join(__dirname, '../templates/views');
const Partialspath = path.join(__dirname, "../partials");
hbs.registerPartials(Partialspath);
//console.log(Partialspath)

app.set("view engine", "hbs");
app.set("views", v_path);
//app.use(express.static(path.join(__dirname, '../images')))

app.get("/", (req, res) => {
    res.render('index.hbs')

})
app.get("/weather", (req, res) => {
    res.render('weather')

})
app.get("/about", (req, res) => {
    res.render('about.hbs')

})
app.get("*", (req, res) => {
    res.render('404.hbs')
})
app.listen(port, () => {
    console.log(`listening the port at ${port}`)
})