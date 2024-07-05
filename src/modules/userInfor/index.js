import express from "express";
import userInforController from "./userInforController.js";
const UserInforRouter = express.Router();
UserInforRouter.post("/createUser", userInforController.createUser);
UserInforRouter.get("/all/:id", userInforController.getUser);
UserInforRouter.put("/updateUser/:id", userInforController.UpdateUser);
UserInforRouter.get("/all", userInforController.GetAllUser);
UserInforRouter.delete("/remove/:id", userInforController.RemoveUser);
export default UserInforRouter;
