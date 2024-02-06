const users = require('../utils/users');

module.exports =  async (email, password) => {
    console.log(users);
    const user = users.find((user) => user.email === email && user.password === password);
    console.log("muy bien:",user);
    //hacer el json de user
    const userObject = {
        email: user.email,
        password: user.password,
    }
    console.log(userObject);
    return userObject;
}
