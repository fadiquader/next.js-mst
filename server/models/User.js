// npm packages
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 characters or more.'],
  },
  firstName: String,
  lastName: String,
  thumbnail: String,
  picture: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

userSchema.statics.generateUniqueUserName = async function ({ firstName, lastName }) {
  const User = this;
  const username = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
  return new Promise(async (resolve, reject) => {
    const generate = async (username) => {
      const exists = await User.findOne({ username });
      if (exists !== null) {
        generate(`${username}.${Math.floor(Math.random() * 10 + 1)}`);
      } else {
        resolve(username);
      }
    };
    try {
      generate(username);
    } catch (err) {
      reject(err);
    }
  });
};

const User = mongoose.model('User', userSchema);

export default User;
