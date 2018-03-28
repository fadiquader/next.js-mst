import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { generateSalt } from '../utils';

const localAuthSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
    minlength: [8, 'Password must be 5 characters or more.'],
  },
  user: { type: Schema.ObjectId, ref: 'User' },
});

// Write encryption for Password
/**
 * The pre-save hook method.
 */
// On save hook, encrypt password
localAuthSchema.pre('save', async function (next) {
  const user = this;
  try {
    const salt = await generateSalt(user.password);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

// compare password when local login
localAuthSchema.methods.comparePassword = function (condidatePassword, callback) {
  bcrypt.compare(condidatePassword, this.password, (err, isMatch) => {
    if (err) callback(err);
    callback(null, isMatch);
  });
};

localAuthSchema.statics.createLocalUser = async function ({
  firstName, lastName, password, email,
}) {
  const localObj = new this({ email, password });
  const UserModel = mongoose.model('User');
  const userObj = new UserModel();
  return new Promise(async (resolve, reject) => {
    try {
      const username = await UserModel.generateUniqueUserName({ firstName, lastName });
      userObj.username = username;
      userObj.firstName = firstName;
      userObj.lastName = lastName;
      const newUser = await userObj.save();
      localObj.user = newUser._id;
      await localObj.save();
      resolve(newUser);
    } catch (err) {
      reject(err);
    }
  });
};

const LocalAuth = mongoose.model('localAuth', localAuthSchema);

export default LocalAuth;
