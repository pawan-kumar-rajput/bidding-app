import multer, { diskStorage } from "multer";
import { extname as _extname } from "path";
import fs from 'fs';
import dotenv from "dotenv";
dotenv.config();

const storage = diskStorage({
  destination: (req, file, cb) => {
    const filePath = process.env.ITEM_IMAGE_LOCATION;
    fs.mkdirSync(filePath, { recursive: true });
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png/;
  const extname = allowedFileTypes.test(
    _extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter,
});

export default upload;
