import express from "express";
import userController from "./userController.js";
import {
  GetVerifyEmailTokenMiddleWare,
  LoginMiddleware,
  RegisterMiddleware,
} from "../../middleware/user.middleware.js";
const UserRouter = express.Router();
UserRouter.post("/register", RegisterMiddleware, userController.register);
UserRouter.post("/login", LoginMiddleware, userController.login);
UserRouter.post(
  "/verify-email",
  GetVerifyEmailTokenMiddleWare,
  userController.verifyEmail
);
UserRouter.put("/updateUser/:id", userController.UpdateUser);
UserRouter.delete("/delete/:id", userController.DeleteUser);
UserRouter.get("/getAllCategory", userController.getCategory);
UserRouter.get("/all", userController.getAllUser);

export default UserRouter;
