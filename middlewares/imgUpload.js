const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const profileImgUpload = (req, res, next) => {
  if (req.file.filename != undefined) {
    const id = uuidv4();

    const dest = path.resolve(__dirname, "..", "uploadedImages", "profile", id);
    const newFileName = id + "-" + Date.now() + path.extname(req.file.filename);
    const fullPath = path.resolve(dest, newFileName);

    fs.mkdirSync(dest);

    fs.writeFile(fullPath, req.file.imagebuffer, (err) => {
      if (err) throw err;
      req.file.folderPath = dest;
      req.file.imgPath = fullPath;
      next();
    });
  }
  next();
};

module.exports = profileImgUpload;
