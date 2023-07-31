const newRoutes = require('./news');
const siteRoutes = require('./site');
function route(app) {
 // app.get("/", (req, res) => {
 //   res.render(`index`); //render ra file main.hbs trong folder layouts và apppend file index.hbs vào
 // }); //định nghĩa tuyến đường là /
 // //   app.get("/news", (req, res) => {
 // //     res.render(`news`); //render ra file main.hbs trong folder layouts và apppend file news.hbs vào
 // //   }); //định nghĩa tuyến đường là /news
 app.use('/news', newRoutes);
 app.use('/', siteRoutes);
 // app.get("/search", (req, res) => {
 //   console.log(req.query); //khi ta get /search?q='toan' thì sẽ log ra {q:'toan'}
 //   res.render(`search`); //render ra file main.hbs trong folder layouts và apppend file news.hbs vào
 // }); //định nghĩa tuyến đường là /news
 // app.post("/search", (req, res) => {
 //   console.log("data post", req.body); //khi ta post /search thì sẽ log ra {q:'toan'} là data truyền vào
 //   res.send(``);
 // }); //định nghĩa tuyến đường là /search}
}
module.exports = route;
