import { EntitySchema } from "typeorm";

const UserInfor = new EntitySchema({
  name: "UserInfor",
  tableName: "UserInfo",
  columns: {
    id: {
      type: "bigint",
      primary: true,
      generated: true,
    },
    fullName: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
    phone: {
      type: "int",
    },
    categoryId: {
      type: "bigint",
    },
    DateBirthDay: {
      type: "date",
    },
  },
});
export default UserInfor;
