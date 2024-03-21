// 노드에 익스프레스를 가져옴 require
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

const dotenv = require("dotenv");
const { userRouter } = require("./routes/userRouter");
const { blogRouter } = require("./routes/bolgRoiuter");

dotenv.config();

// const MONGO_URL =
//   "mongodb+srv://jaehee:UoSRH8e6GdU4KPfW@mongodb.x4wxzfd.mongodb.net/myworld?retryWrites=true&w=majority&appName=Mongodb";

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("디비연결완료");
    mongoose.set("debug", true);
    // const users = [];
    app.use(express.json());

    // user를 통으로 씀
    app.use("/user", userRouter);
    app.use("/blog", blogRouter);

    // 3000번 포트 입력
    app.listen(3000);
  } catch (error) {
    console.log("실행안됨");
  }
};

server();
//내가 쓴거

// const express = require("express");
// const { default: mongoose } = require("mongoose");
// const app = express();

// const dotenv = require("dotenv");
// const { userRouter } = require("./routes/userRouter");

// dotenv.config();

// const server = async function () {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("디비연결완료~~~");

//     app.use(express.json());

//     app.use("/user", userRouter);

//     app.listen(3000);
//   } catch (error) {
//     console.log("연결안됨");
//   }
// };

// server();
