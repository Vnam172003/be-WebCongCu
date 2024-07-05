import MySQLDatabase from "../../databases/MySQLDatabase.js";

const userRepo = MySQLDatabase.mysqlDataSource.getRepository("UserInfor");
const CategoryRepo = MySQLDatabase.mysqlDataSource.getRepository("Category");
class UserInforService {
  async registerUser(userInfo) {
    const { fullName, DateBirthDay, phone, categoryId } = userInfo;
    const newUser = userRepo.create({
      fullName,
      DateBirthDay,
      phone,
      categoryId,
    });
    return await userRepo.save(newUser);
  }
  async updateUser(id, updatedData) {
    const userUpdate = await userRepo.findOne({ where: { id } });
    if (!userUpdate) {
      return res.json({ message: "User not found" });
    }
    Object.assign(userUpdate, updatedData);
    return await userRepo.save(userUpdate);
  }
  async getAllUser() {
    return await userRepo.find();
  }
  async removeUser(id) {
    const removeUser = await userRepo.findOne({ where: { id } });
    if (!removeUser) {
      return res.json({ message: "User not found" });
    }
    return await userRepo.remove(removeUser);
  }
  async getuser(id) {
    console.log(id);
    const user = await userRepo.findOne({ where: { id } });
    console.log(user);
    return user;
  }
}
export default new UserInforService();
