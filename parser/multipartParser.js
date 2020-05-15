const Busboy = require("busboy");

const multipartParser = (req, res, next) => {
  const busboy = new Busboy({ headers: req.headers });
  let body = {};
  let profileImg = {};

  busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
    let imgData = [];

    file.on("data", (data) => {
      imgData.push(data);
    });

    file.on("end", () => {
      const buff = Buffer.concat(imgData);

      profileImg = {
        fieldname,
        imagebuffer: buff,
        filename,
        encoding,
        mimetype,
      };
    });
  });

  busboy.on("field", function (fieldname, val) {
    body[fieldname] = val;
  });

  busboy.on("finish", function () {
    req.body = body;
    req.file = profileImg;
    next();
  });
  req.pipe(busboy);
};

module.exports = multipartParser;
