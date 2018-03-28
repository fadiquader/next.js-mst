import gm from 'gm';
import path from 'path';

const gM = gm.subClass({ imageMagick: true });

const saveThumbnail = (file) => {
  const thumbName = `thumb-80-${(new Date()).valueOf()}-${Math.random() * 99999}${path.extname(file.originalname)}`;
  return new Promise((resolve, reject) => {
    gM(file.path)
      .resize(50, 50, '^')
      .noProfile()
      .gravity('center')
      .extent(50, 50)
      .write(`./files/thumbs/${thumbName}`, (err) => {
        if (!err) {
          resolve(thumbName);
        }
        reject(err);
      });
  });
};

export default saveThumbnail;
