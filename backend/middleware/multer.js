// import multer from "multer";

// const storage = multer.diskStorage({
//   filename:function(req,file,callback){
//     callback(null,file.originalname)
//   }
// })

// const upload = multer({storage});


// export default upload


import multer from "multer";

// Use disk storage with original filename
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

export default upload;
