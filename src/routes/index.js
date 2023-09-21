const newRoutes = require("./news");
const siteRoutes = require("./site");
const courseRoutes = require("./courses");
const meRoutes = require("./me");
function route(app) {
  // app.get("/", (req, res) => {
  //   res.render(`index`); //render ra file main.hbs trong folder layouts và apppend file index.hbs vào
  // }); //định nghĩa tuyến đường là /
  // //   app.get("/news", (req, res) => {
  // //     res.render(`news`); //render ra file main.hbs trong folder layouts và apppend file news.hbs vào
  // //   }); //định nghĩa tuyến đường là /news
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, DELETE, PUT, PATCH"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use("/news", newRoutes);
  app.use("/", siteRoutes);
  app.use("/courses", courseRoutes);
  app.use("/me", meRoutes);
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
