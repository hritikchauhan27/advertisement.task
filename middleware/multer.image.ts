import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
      //console.log(file.originalname)
    },
  });
  
  // Create a multer instance with the storage options
export const upload = multer({ storage });