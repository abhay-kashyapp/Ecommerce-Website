// import multer from "multer";

// const storage = multer.diskStorage({
//   filename:function(req,file,callback){
//     callback(null,file.originalname)
//   }
// })

// const upload = multer({storage});


// export default upload


// import multer from "multer";

// // Use disk storage with original filename
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// const upload = multer({ storage });

// export default upload;

import multer from "multer";
import fs from "fs";
import path from "path";

// Define a safe writable directory
const uploadDir = path.join("/tmp", "uploads");

// Ensure the directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // ✅ use /tmp/uploads instead of "uploads/"
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

export default upload;
