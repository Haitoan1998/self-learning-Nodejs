class Sitecotrollers {
 index(req, res) {
  res.render('index');
 }
 search(req, res) {
  res.render('search');
 }
}
module.exports = new Sitecotrollers();
