// 노드에 익스프레스를 가져옴 require
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const { User } = require("./models/User");
const dotenv = require("dotenv");

dotenv.config();

// const MONGO_URL =
//   "mongodb+srv://jaehee:UoSRH8e6GdU4KPfW@mongodb.x4wxzfd.mongodb.net/myworld?retryWrites=true&w=majority&appName=Mongodb";

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("디비연결완료");
    // const users = [];
    app.use(express.json());

    app.get("/user", async function (req, res) {
      try {
        const users = await User.find({});
        return res.send({ users });
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
      //   return res.send({ users: users });
    });

    // get post 기본형식
    // app.get("/user/:userId",async function(req,res){
    //     try {

    //     } catch (error) {
    //         return res.status(500).send({ error: error.message });
    //     }
    // })

    app.get("/user/:userId", async function (req, res) {
      try {
        const { userId } = req.params;
        const user = await User.findOne({ _id: userId });
        return res.send({ user });
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    });

    app.post("/user", async function (req, res) {
      try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
      // users.push({
      //     name: req.body.name,
      //     age: req.body.age,
      //   });
    });
    // {
    //     "username":"jaehee",
    //     "name":{
    //     "first":"jo",
    //     "last":"jae hee"
    //   },
    //   "age":26
    //   "emaill":"wogml220723@naver.com"
    //   }

    // get post 기본형식
    app.delete("/user/:userId/:test/:number", async function (req, res) {
      try {
        const { userId } = req.params;
        const user = await User.findByIdAndDelete({ _id: userId });
        return res.send({ user });
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    });

    // 3000번 포트 입력
    app.listen(3000);
  } catch (error) {
    console.log("실행안됨");
  }
};

server();
