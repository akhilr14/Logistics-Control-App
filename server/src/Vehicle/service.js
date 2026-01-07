const model = require("./model");

async function create(body) {
    try{
        const data = new model(body);
        await data.save();
    return { status: true, count: 1, result: data, error: null };
    } catch (err) {
    return { status: false, count: 0, result: null, error: err };
    }
}

async function getAll() {
    try{
        data = await model.find();
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
    return { status: false, count: null, result: null, error: err };
  }
}

async function getByID(id) {
    try{
        data = await model.findById(id);
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
    return { status: false, count: null, result: null, error: err };
  }
}

async function updateByID(id, body) {
    try{
        data = await model.findByIdAndUpdate(id, body);
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
    return { status: false, count: null, result: null, error: err };
  }
}

async function getAvailable() {
    try{
        data = await model.find({status: {$eq: 1}});
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
    return { status: false, count: null, result: null, error: err };
  }
}

async function updateStatus(id, body) {
    try{
        data = await model.findByIdAndUpdate(id, body);
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
    return { status: false, count: null, result: null, error: err };
  }
}

module.exports = {create, getAll, getByID, getAvailable, updateByID, updateStatus};