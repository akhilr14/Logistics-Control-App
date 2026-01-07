const service = require("./service");

async function create(body){
    return await service.create(body);
}

async function getAll() {
    return await service.getAll();    
}
async function getByID(id) {
    return await service.getByID(id);    
}

async function updateByID(id, body) {
    return await service.updateByID(id, body);    
}

async function getByDate(date) {
    return await service.getByDate(date);
}

async function getByDateFrame(query) {
    return await service.getByDateFrame(query);
}
module.exports = {create, getAll, getByID, updateByID, getByDate, getByDateFrame};