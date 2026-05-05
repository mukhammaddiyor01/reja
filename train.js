// MITASK - D
function checkContent(item1, item2) {
    let list1 = [];
    let list2 = [];

    for (let i = 0; i < item1.length; i++) {
        list1.push(item1[i]);
    }

    for (let i = 0; i < item2.length; i++) {
        list2.push(item2[i]);
    }

    let sorted1 = list1.sort().join('');
    let sorted2 = list2.sort().join('');

    if (sorted1 === sorted2) {
        return true;
    } else {
        return false;
    }
}

console.log(checkContent("mitgroup", "gmtiprou"));

// // MITASK-C
// const moment = require('moment');
// const time = moment().format('LT');

// class Shop {
  
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//   console.log(`Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud!`)
// }

//   sotish(mahsulot, miqdor) {
//     this[mahsulot] -= miqdor;
//     console.log(`Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola sotildi!`)
//   }

//   qabul(mahsulot, miqdor) {
//     this[mahsulot] += miqdor;
//     console.log(`Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola qabul qilindi!`)
//   }

// }
// const shop = new Shop(4, 5, 2)

// shop.qoldiq()
// shop.sotish("non", 3)
// shop.qabul("cola", 4)
// shop.qoldiq()


// // MITASK-B
// const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function countDigits(a) {
//   let count = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (num.includes(Number(a[i]))) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

// // MITASK-A

// function countLetter(a, b) {
//   let count = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] == a) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer"));

// 21 - Darsimiz Rejasi
// 1) NodeJS - single thread hamda Multi Process dasturlsh
// 2) Asynchrnous dasturlash: Callback functionlar
// 3) Callback amallarni NodeJS backend serverda ahamiyati

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling!", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
//     "o'zingizga ishlashingizni boshlang!", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling!", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi damizni oling, foydasi yo'q endi!", // 60
// ];

// function maslahatBering (a, callback) { // a - bu yerda yoshni nazarda tutadi
//     if(typeof a !== 'number') callback("insert a number from 0 to 5" , null); // callback("error yoziladi" , "data yoziladi")
//     else if(a < 20) callback(null, list[0]); // endi bu yerda callback("data birinchi" , "qaytarmoqchi bo'lgan qiymat")
//     // 20 dan kam bolsa 0-index qiymat beradi
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {          // buni qo'shganimizdan keyin biz 'callback' funtion ishlashini ko'rar ekanmiz
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("[passed here 0");
// maslahatBering(65, (err, data) => { // mana shu callback functionni chaqririshimizda, callbackning parametri sifatida funtion ishga tushadi
//     if(err) console.log('ERROR:', err);
//      else {console.log('javob:', data);
//      }
// });

// console.log("[passed here 0");

// TERMINALDA CHIQQAN JAVOB
// [nodemon] starting `node train.js`
// Jack Ma maslahatlari
// [passed here 0
// [passed here 0
// javob: endi damizni oling, foydasi yo'q endi!

// 21-DARS TUGADI

// 22-DARS. ASYNCHRONOUS DASTURLASH - ASYNCHONOUS VA PROMISE
// Darsimiz rejasi
// 1) asynchronous dasturlash: asynchronous functionlar
// 2) asynchronous dasturlash: Promise functionlar
// 3) Callback vs Asynchronous vs Promise

// Definition           Call
// calback        >       callback
// async/await    >       then/catch ][ async/await
// promise        >       then/catch ][ async/await

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling!", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
//     "o'zingizga ishlashingizni boshlang!", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling!", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi damizni oling, foydasi yo'q endi!", // 60
// ];

// async function maslahatBering (a) {   // asynchronous yasash uchun biz functionni :-> 'async function' ko'rinishida define qilamiz
//     if(typeof a !== 'number') throw new Error("insert a number from 0 to 5" , null); // agar bizga error kerak bo'lsa 'throw' qilishimiz kerak.
//     else if(a <= 20) return list[0]; // javiob kelayotgan payt biz faqat javobni return qilamiz

//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else { return list[5];
//         // setTimeout(() => {          // asynchronous ichida - setTimeout, setTimeinterval functionlar ishlamas ekan
//         //     return list[5];
//         // }, 5000);
//     }
// }

// // then/catch
// console.log("[passed here 0");
// maslahatBering(25).then(data => {       // .then() - data catch qiladi.  catch() - catch esa error catch qiladi
//     console.log("Javob:", data);
// }).catch(err => {
//     console.log("Error:", err);
// });
// console.log("passed here 1");

// BU - NOQULAY USUL EKAN. 25dan keyin 40 ni so'rash
// console.log("[passed here 0");
// maslahatBering(25).then(data => {       // .then() - data catch qiladi.  catch() - catch esa error catch qiladi
//     maslahatBering(40).then(data => {       // bunda 25 dan keyin 30 yoshni so'rash uchun shunaqa qildik
//     console.log("Javob:", data);
// }).catch(err => {
//     console.log("Error:", err);
// });
// console.log("passed here 1");
//     console.log("Javob:", data);
// }).catch(err => {
//     console.log("Error:", err);
// });
// console.log("passed here 1");

// // async/await
// async function run() {
//     let javob = await maslahatBering(20); // await yordami bilan biz tartibli bir nechta chaqirishni oson yozishimiz mumkin ekan.
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// NATIJA:
// [nodemon] starting `node train.js`
// Jack Ma maslahatlari
// [passed here 0
// passed here 1
// Javob: to'g'ri boshliq tanlang va ko'proq xato qiling!

// bunga sabab, asynchronous funtion, synchronous functionlar to'liq ishga tushib bo'lgach, ichga tushadi

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling!", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
//     "o'zingizga ishlashingizni boshlang!", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling!", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi damizni oling, foydasi yo'q endi!", // 60
// ];

// ASYNC / PROMISE
// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number from 0 to 5" , null);
//     else if(a <= 20) return list[0];

//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => { // Promise -ning kuchli tarafi, uni ichida setTimeOut ishlaydi
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// async function run() {
//     let javob = await maslahatBering(55);
//     console.log(javob);
//     javob = await maslahatBering(66);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// // CALLBACK / SETINTERVAL

// function maslahatBering (a, callback) {
//     if(typeof a !== 'number') callback("insert a number from 0 to 5" , null);
//     else if(a < 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(() => {         // bunda setinterval yaxshi ishlayverar ekan
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("[passed here 0");
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//      else {console.log('javob:', data);
//      }
// });

// console.log("[passed here 0");

console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data);
    }
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/train", (req, res) => {
    res.render("train", { user: user });
});

const server = http.createServer(app);
server.on("error", (err) => {
    console.log(`Server error: ${err.message}`);
});

let PORT = process.env.PORT || 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});
