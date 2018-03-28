import mongoose, { Schema } from 'mongoose';
import { fileUniqueName } from '../utils/functions';
import download from 'image-downloader';
import fs from 'fs';

const socialAuthSchema = new Schema({
  provider: {
    type: String,
    required: true,
  },
  providerId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  user: { type: Schema.ObjectId, ref: 'User' },
});

const filesDir = './files';
const thumbsDir = `${filesDir}/thumbs`;

socialAuthSchema.statics.findOrCreate = function (network, data) {
  const socialObj = new this();
  const UserModel = mongoose.model('User');
  const userObj = new UserModel();
  if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
    if (!fs.existsSync(thumbsDir)) {
      fs.mkdirSync(thumbsDir);
    }
  }
  return new Promise(async (resolve, reject) => {
    try {
      const user = await this.findOne({ provider: network, providerId: data.id });
      if (!user) {
        socialObj.providerId = data.id;
        socialObj.provider = network;
        const firstName = data.first_name ? data.first_name.toLowerCase() : 'f';
        const lastName = data.last_name ? data.last_name.toLowerCase() : 'l';
        const username = await UserModel.generateUniqueUserName({ firstName, lastName });
        userObj.username = username;
        userObj.firstName = firstName;
        userObj.lastName = lastName;
        userObj.email = data.email || null;
        userObj.thumbnail = null;
        if (data.thumbnail) {
          const thumbnailName = `thumb-50-${fileUniqueName()}.jpg`;
          const { filename, image } = await download.image({
            url: data.thumbnail,
            dest: `${thumbsDir}/${thumbnailName}`,
          });
          userObj.thumbnail = thumbnailName;
        }
        // userObj['thumbnail'] = data.thumbnail;
        if (network === 'facebook') {
          const pictureName = `fb-${fileUniqueName()}.jpg`;
          if (data.picture) {
            const { filename, image } = await download.image({
              url: `${data.picture}?type=large`,
              dest: `${filesDir}/${pictureName}`,
            });
            userObj.picture = pictureName;
          }
        }
        if (network === 'google') {
          const pictureName = `g-${fileUniqueName()}.jpg`;
          if (data.picture) {
            const { filename, image } = await download.image({
              url: data.picture.split('?sz=')[0],
              dest: `${filesDir}/${pictureName}`,
            });
            userObj.picture = pictureName;
          }
        }
        const newUser = await userObj.save();
        socialObj.user = newUser._id;
        await socialObj.save();
        resolve(newUser);
      } else {
        const existsUser = await UserModel.findById(user.user);
        resolve(existsUser);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const SocialAuth = mongoose.model('SocialAuth', socialAuthSchema);

export default SocialAuth;
