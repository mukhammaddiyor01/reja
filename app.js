console.log("Web Serverni Boshlash");
const express = require("express");
const app = express(); // bu usuld expres bizga app objectini jo'natar ekan

const fs = require("fs");

// MongoDB Call
const db = require("./server").db(); // bu orqali keyinchalik chaqirish, o'qish, o'chirish mumkin ekan
const mongodb = require("mongodb");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

// App objectida 4ta bosqich bor

// 1-Kirish code
// 2 - Seesion code
// 3 - Views Code
// 4 - routing code
// 1- bosqichda, expressga kirib kelyotgan malumotlarga bog'liq kodlar yoziladi

app.use(express.static("public")); // tashqaridan kirib kelyotgan foydalanuchilar uchun public - ochiq degani. keyinchalik imidjga, css ga tegishli fayllarni shuni ichiga joylashtiramiz
app.use(express.json()); // bu usulda, kirib kelayotgan json datani object holatiga o'girib beradi
app.use(express.urlencoded({ extended: true })); // bu yozilmasa html kelgan formlarni express rad etarkan (bu traditional form qilish usuli ekan)

// 2- Sessions

// 3- backendda html yasab clientga yuboramiz bunga bizga ejs yordam beradi.
// BBSR - backendda forntend yasaymiz clientga yuborish uchun. EJS dan foydalanamiz views folder uchun
// 2-usul Bu zamonaviy single page application usuli

app.set("views", "views"); // viewsdan qiymat oladi
app.set("view engine", "ejs");

// 4- routerlarni chaqiramiz
// app.get("/hello", function(req, res) {     // bu usulda sayt ishga tushganda /hello qo'yilmasa yozuv ko'rinmaydi
//     res.end(`<h1 style= "background: brown"> Hello World by Mukhammaddiyor.</h1>`);
// });

// app.get("/gift", function(req, res) {
//     res.end(`<h1 style= "color: magenta"> Siz sovg'alar bo'limidasiz.</h1>`);
// });

// app.get("/", function(req, res) {
//     res.render('project');          // bu usulda, views ejs ni qayerdan izlashni tanishtirgan, ya'ni project nomi bilan yozilgan faylni izlaydi
// });

// Request qismlari:
// start line (1-start line, url qimsi)
// header
// body

// req.body - bilan biz item ni qiymaitni oldik
// req

app.post("/create-item", (req, res) => {
  console.log("user entered /create-data");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.json(data.ops[0]);
    }
  });
});


app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({ _id: new mongodb.ObjectID(id) }, function (err, data) {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.json({ state: "Success" });
    }
  });
});


app.get("/", (req, res) => {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

// app.post("/create-item", (req, res) => {         // post - o'zi bilan malumot olib keladi hamda databasega malumotni yozadi
//     console.log(req.body);
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({reja: new_reja}), (err, data) => {
//         console.log(data.ops);
//         res.json(data.ops[0])
//     }
//     // res.json({test: "Succes"});                 // bu json formatida malumotni qaytarish
// });

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// app.get("/", function(req, res) {  // get - bizga database dan malumot o'qish uchun kerak bo'ladi
//     res.render("reja")
// });

// render() - bu ejs file ni, html ga aylantirib userga yuboradi
// bu data bilan sahifa yasaydi
// Bu degani:
// 👉 views/harid.ejs faylni top
// 👉 uni HTML ga aylantir
// 👉 browserga yubor

// CRUD - Create Read Update Delete

module.exports = app;
