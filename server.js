console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();   // bu usuld expres bizga app objectini jo'natar ekan
const http = require("http"); // bu bizning core modelimiz ekan

// App objectida 4ta bosqich bor
// 1-Kirish code
// 2 - Seesion code
// 3 - Views Code
// 4 - routing code
// 1- bosqichda, expressga kirib kelyotgan malumotlarga bog'liq kodlar yoziladi

app.use(express.static("public"));  // tashqaridan kirib kelyotgan foydalanuchilar uchun public - ochiq degani. keyinchalik imidjga, css ga tegishli fayllarni shuni ichiga joylashtiramiz
app.use(express.json());        // bu usulda, kirib kelayotgan json datani object holatiga o'girib beradi
app.use(express.urlencoded({extended: true})); // bu yozilmasa html kelgan formlarni express rad etarkan (bu traditional form qilish usuli ekan)


// 2- Sessions

// 3- backendda html yasab clientga yuboramiz bunga bizga ejs yordam beradi.
app.set("views", "views");  // viewsdan qiymat oladi
app.set("view engine", "ejs");



// 4- routerlarni chaqiramiz
app.get("/hello", function(req, res) {     // bu usulda sayt ishga tushganda /hello qo'yilmasa yozuv ko'rinmaydi
    res.end(`<h1 style= "background: brown"> Hello World by Mukhammaddiyor.</h1>`);
});

app.get("/gift", function(req, res) {
    res.end(`<h1 style= "color: magenta"> Siz sovg'alar bo'limidasiz.</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});