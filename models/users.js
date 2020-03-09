const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"]
  },
  password: {
    type: String,
    unique: false,
    validate: {
      validator: function (v) {
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v);
      },
      message: props => `${props.value} is not a valid password`
    },
    required: [true, "password is required"]
  },
  roster: [
     {
      img: {
        type: String
      },
      id: {
        type: Number
      },
      name: {
        type: String
      },
      team: {
        type: String
      },
      age: {
        type: Number
      },
      min: {
        type: Number
      }, 
      pts: {
        type: Number
      },
      fgm: {
        type: Number
      },
      fga: {
        type: Number
      },
      fg: {
        type: Number
      },
      threep: {
        type: Number
      },
      threepav: {
        type: Number
      },
      three: {
        type: String
      },
      ftm: {
        type: Number
      },
      fta: {
        type: String
      },
      ft: {
        type: String
      },
      oreb: {
        type: Number
      },
      dreb: {
        type: Number
      }, 
      reb: {
        type: Number
      },
      ast: {
        type: Number
      },
      tov: {
        type: Number
      },
      tov: {
        type: Number
      },
      blk: {
        type: Number
      },
      pf: {
        type: Number
      },
      fp: {
        type: Number
      }
      
    }
  ],
  admin: {
    type: Boolean,
    unique: false,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
});

usersSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

usersSchema.methods.validPassword = function (password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
}

const User = mongoose.model("User", usersSchema);

module.exports = User;