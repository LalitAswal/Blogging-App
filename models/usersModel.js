const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');


let key = process.env.key;
let iv = process.env.iv;

function encrypt(text) {
    const cipher = crypto.createCipheriv(process.env.cryptoAlgo, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  }
  
  function decrypt(text) {
    const decipher = crypto.createDecipheriv(
      process.env.cryptoAlgo,
      key,
      iv
    );
    let decrypted = decipher.update(text, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }



const userSchema = new Schema({
    googleId: String,
    displayName: String,
    password: {type: String, get: decrypt, set: encrypt },
    image: String,
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserModels' }], // Array of user IDs being followed
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserModels' }] // Array of user IDs following this user
});

const UserModels = mongoose.model('UserModels', userSchema);

module.exports = UserModels;
