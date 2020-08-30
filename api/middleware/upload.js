const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  "/home/nishi/finalproject/finalprojectN/resources/static/assets/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-N-${file.originalname}`);
  },
});

var upload = multer({ storage: storage, fileFilter: imageFilter });
module.exports = upload;