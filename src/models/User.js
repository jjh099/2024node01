const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true },
    },
    age: Number,
    email: String,
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

module.exports = { User };

// 내가쓴거

// const { default: mongoose } = require("mongoose");

// const UserSchema = mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//     },
//     name: {
//       first: { type: String, required: true },
//       last: { type: String, required: true },
//     },
//     age: Number,
//     email: String,
//   },
//   { timestamps: true }
// );
// const User = mongoose.model("user", UserSchema);

// module.exports = { User };
