const {hash, genSalt} = require("bcryptjs")

function hashPassword(p) {
  genSalt(10, (err, salt) => {
    if (err) throw new Error(err);
    hash(p, salt, (err, hash) => {
      if (err) throw new Error(err);
      return hash;
    });
  });
}

console.log(hashPassword("fgdfgdg"))