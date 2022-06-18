const { diskStorage } = require("multer");
const _ = require("lodash");

module.exports = diskStorage({
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".pdf") {
          cb(new Error("Unsupported file type!"), false);
          return;
        }
        cb(null, true);
      },
});
