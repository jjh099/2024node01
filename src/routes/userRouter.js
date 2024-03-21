const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const { User } = require("../models/User");
const userRouter = Router();

userRouter.get("/", async function (req, res) {
  try {
    const users = await User.find({});
    return res.send({ users });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  //   return res.send({ users: users });
});

// get post 기본형식
// userRouter.get("/user/:userId",async function(req,res){
//     try {

//     } catch (error) {
//         return res.status(500).send({ error: error.message });
//     }
// })

userRouter.get("/:userId", async function (req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ _id: userId });
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

userRouter.post("/", async function (req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    return res.send(user);
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
//   "age":26,
//   "emaill":"wogml220723@naver.com"
//   }

// get post 기본형식
userRouter.delete("/:userId", async function (req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete({ _id: userId });
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

userRouter.put("/:userId", async function (req, res) {
  try {
    let { age } = req.body;
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: { age },
      },
      {
        new: true,
      }
    );
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = { userRouter };
// 내가 쓴거

// const { Router } = require("express");
// const { default: mongoose } = require("mongoose");
// const { User } = require("../models/User");
// const userRouter = Router();

// userRouter.get("/", async function (req, res) {
//   try {
//     const users = await User.find({});
//     return res.send({ users });
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// });

// // userRouter.get("/user/:userId",async function(req,res){
// //     try {

// //     } catch (error) {
// //         return res.status(500).send({error: error.message});
// //     }
// // })

// userRouter.get("/:userId", async function (req, res) {
//   try {
//     const { userId } = req.params;
//     const user = await User.findOne({ _id: userId });
//     return res.send({ user });
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// });

// userRouter.post("/", async function (req, res) {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// });
// // {
// //     "username":"hanyong5",
// //     "name":{
// //       "first":"han",
// //       "last":"sung yong"
// //      },
// //         "age":40,
// //       "email":"winoz@naver.com"
// //   }

// userRouter.delete("/:userId", async function (req, res) {
//   try {
//     const { userId } = req.params;
//     const user = await User.findByIdAndDelete({ _id: userId });
//     return res.send({ user });
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// });

// userRouter.put("/:userId", async function (req, res) {
//   try {
//     const { age, email } = req.body;
//     const { userId } = req.params;
//     const user = await User.findByIdAndUpdate(
//       userId,
//       {
//         $set: { age, email },
//       },
//       { new: true }
//     );
//     return res.send({ user });
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// });

// module.exports = { userRouter };
