import bcrypt from 'bcrypt';

export function generateSalt(str) {
  return new Promise((resolve, reject) =>
    // Generate hash's random salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { return reject(err); }

      // Now, with the given salt, generate the hash
      bcrypt.hash(str, salt, (err, hash) => {
        if (err) { return reject(err); }

        // Hash generated successfully!
        return resolve(hash);
      });
    }));
}
