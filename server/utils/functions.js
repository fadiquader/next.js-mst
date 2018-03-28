import fs from 'fs';

export function stripTags(str) {
  return str.replace(/(<([^>]+)>)/ig, '');
}
export function slugify(str) {
  return str.toString().toLowerCase().trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

export function avgWordsPerMin(count) {
  return Math.ceil(count / 1050);
}

export function base64Encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
export function base64Decode(base64str, file) {
  // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
  const bitmap = new Buffer(base64str.replace(/^data:image\/\w+;base64,/, ''), 'base64');
  console.log('start saving...');
  // write buffer to file
  fs.writeFileSync(file, bitmap, (err) => {
    if (err) throw err;
  });
  console.log('******** File created from base64 encoded string ********');
}

export function fileUniqueName() {
  return `${(new Date()).valueOf()}-${Math.floor(Math.random() * 99999)}`;
}
