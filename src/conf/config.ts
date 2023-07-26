import dotenv from "dotenv";

dotenv.config();

const conf = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECTID),
};

export default conf;
