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

async function getAvailable() {
    return await service.getAvailable();    
}

async function updateStatus(id, body) {
    return await service.updateStatus(id, body);    
}

async function deleteByID(id) {
    return await service.deleteByID(id);
}

module.exports = {create, getAll, getByID, getAvailable, updateByID, updateStatus, deleteByID};