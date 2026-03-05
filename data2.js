const dataRole = [
    {
        id: "r1",
        name: "Admin",
        description: "Administrator",
        creationAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "r2",
        name: "User",
        description: "Normal user",
        creationAt: new Date(),
        updatedAt: new Date()
    }
];

const dataUser = [
    {
        username: "admin",
        password: "123",
        email: "admin@gmail.com",
        fullName: "Admin Account",
        avatarUrl: "",
        status: true,
        loginCount: 0,
        role: dataRole[0],
        creationAt: new Date(),
        updatedAt: new Date()
    }
];

module.exports = { dataRole, dataUser };