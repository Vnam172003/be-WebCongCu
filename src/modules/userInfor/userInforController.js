import MySQLDatabase from "../../databases/MySQLDatabase.js";
import userInforService from "./userInforService.js";
const userRepo = MySQLDatabase.mysqlDataSource.getRepository("UserInfor");

class UserInforController {
  async createUser(req, res, next) {
    const { fullName, DateBirthDay, phone, categoryId } = req.body;
    try {
      const user = await userInforService.registerUser({
        fullName,
        DateBirthDay,
        phone,
        categoryId,
      });

      return res.status(200).json({
        message: "Create success",
        data: { user },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "register error",
      });
    }
  }
  async UpdateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      console.log(updatedData);
      const updatedUser = await userInforService.updateUser(id, updatedData);
      return res.status(200).json({
        updatedUser,
        Message: "Update Successful",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Update Failes" });
    }
  }
  async GetAllUser(req, res) {
    try {
      const User = await userRepo.find();
      return res.status(200).json({
        User,
        Message: " Successful",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "get All Failes" });
    }
  }
  async RemoveUser(req, res) {
    try {
      const { id } = req.params;
      const User = await userInforService.removeUser(id);
      return res.status(200).json({
        User,
        Message: " Successful",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Remove Failes" });
    }
  }
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const User = await userInforService.getuser(id);
      return res.status(200).json({
        User,
        Message: " Successful",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "get User Failes" });
    }
  }
}
export default new UserInforController();
