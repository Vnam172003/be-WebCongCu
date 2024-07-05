import { v2 as cloudinaryV2 } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

// Define the cloudinaryConfig object with type CloudinaryConfigOptions
const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_NAME || "",
  api_key: process.env.CLOUDINARY_KEY || "",
  api_secret: process.env.CLOUDINARY_SECRET || "",
};

cloudinaryV2.config(cloudinaryConfig);
const storage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: (req, file) => {
    return {
      folder: "Han_Cf",
    };
  }, // Chuyển đổi thành kiểu Options
});

// Create multer upload
const uploadCloud = multer({ storage });

export default uploadCloud;
