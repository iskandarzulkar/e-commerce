const UserModel = require("../../model/user");

class UserService
{

    static async create(data)
    {
        return await UserModel.create(data);
    }

    static async getAll()
    {
        return await UserModel.findAll();
    }

    static async read(id_user)
    {
        return await UserModel.findOne(
            {
                where: {
                    id_user: id_user,
                    status: "1"
                }
            }
        );
    }

    static async update(id_user, data)
    {
        const [updated] = await UserModel.update(data, {
            where: { id_user: id_user }
        });

        return updated;
    }

    static async delete(id_user, data)
    {
        const [updated] = await UserModel.update(data, {
            where: { id_user: id_user }
        });

        return updated;
    }

    static async findIdUser(id_user)
    {
        return await UserModel.findOne(
            {
                where: {
                    id_user: id_user,
                    status: "1"
                }
            }
        );
    }

    static async findUsername(username)
    {
        return await UserModel.findOne(
                {
                    where: {
                        username: username,
                        status: "1"
                    }
                }
        );
    }

    static async findEmail(email)
    {
        return await UserModel.findOne(
            {
                where: {
                    email: email,
                    status: "1"
                }
            }
        );
    }

    static async resetPassword(id_user, password)
    {
        const [updated] = await UserModel.update(password, {
            where: { id_user: id_user }
        });

        return updated;
    }
}

module.exports = UserService;