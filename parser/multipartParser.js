const Busboy = require("busboy");

const multipartParser = (req, res, next) => {
  const busboy = new Busboy({
    headers: req.headers,
    limits: { fileSize: 3 * 1024 * 1024 },
  });
  const acceptedMimetypes = ["image/png", "image/jpeg", "image/jpg"];

  let body = {};
  let profileImg = {};

  busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
    let imgData = [];

    if(acceptedMimetypes.indexOf(mimetype) == -1) {
      file.resume();

      profileImg = {
        err: `Not accepted image type ${mimetype}`
      }
    }

    file.on("data", (data) => {
      imgData.push(data);
    });

    file.on("limit", () => {
      imgData = [];
    });

    file.on("end", () => {
      if(imgData.length) {
        const buff = Buffer.concat(imgData);
  
        profileImg = {
          fieldname,
          imagebuffer: buff,
          filename,
          encoding,
          mimetype,
        };
      } else {
        profileImg = {
          err: "Too large profile image"
        }
      }
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
