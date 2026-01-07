const service = require("./service");

async function signUp(body){
    return await service.signUp(body);
}

async function login(body){
    return await service.login(body);
}

module.exports = {signUp, login};