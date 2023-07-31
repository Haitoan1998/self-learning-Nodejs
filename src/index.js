const express = require('express'); //tải 1 module có tên là express
const morgan = require('morgan');
const path = require('path'); //thư viện có sẵn của nodejs để xử lý thao tác với đường dẫn path.join(), path.resolve(), path.dirname(), path.basename(), path.extname()
const { engine } = require('express-handlebars'); //tải module có tên là express-handlebars để dùng template
const app = express(); //tạo 1 biến là 1 fn, và express là 1 function trả về 1 đối tượng
const port = 3000; // run ở cổng nào
const route = require('./routes');
//HTTP loger
app.use(express.static(path.join(__dirname, '')));
app.use(morgan('combined'));
app.use(express.urlencoded()); //sử dung middlware vơi post dạng form
app.use(express.json()); //XMLHttpRequest,fetch,axios với code js
//template engine
app.engine('.hbs', engine({ extname: '.hbs' })); //đăng ký .hbs làm một template engine trong ứng dụng Express,sử dụng file
//mẫu Handlebars .handlebars,.hbs để hiển thị nội dung web,ta sửa đuôi thành .hbs
app.set('view engine', '.hbs'); //định cấu hình Express để sử dụng .hbs làm view engine (môi trường xem),
//cho phép Express tự động phát hiện và sử dụng các file mẫu .hbs mà bạn đã tạo để tạo ra các trang web hoàn chỉnh.
//Khi bạn cấu hình view engine là "hbs", /
//bạn không cần phải chỉ định phần mở rộng của tệp mẫu hbs khi gọi hàm render trong Express.
app.set('views', path.join(__dirname, 'sources/views')); //path.join(): path.join() là một phương thức của module path trong Node.js.
// Phương thức này được sử dụng để nối các
//phần của các đường dẫn lại với nhau và tạo ra một đường dẫn tuyệt đối.
console.log(__dirname); //__dirname là một biến toàn cục (global variable) mà chứa đường dẫn tuyệt đối đến thư mục chứa tệp đang thực thi hiện tại.

route(app);

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
});
