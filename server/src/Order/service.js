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
        const data = await model.find();
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
    return { status: false, count: null, result: null, error: err };
  }
}

async function getByID(id) {
    try{
        const data = await model.findById(id);
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
    return { status: false, count: null, result: null, error: err };
  }
}

async function updateByID(id, body) {
    try{
        const data = await model.findByIdAndUpdate(id, body);
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
    return { status: false, count: null, result: null, error: err };
  }
}

async function getByDate(date) {
    try{
        let dat= new Date(date);
        const data = await model.find({startDate: dat});
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
        return { status: false, count: null, result: null, error: err };
  }
}

async function getByDateFrame(query) {
    try{
        const firstDate = new Date(query.firstDate);
        const lastDate = new Date(query.lastDate);
        const data = await model.find({startDate: { $gte: firstDate }, endDate: { $lte: lastDate }});
        return { status: true, count: data.length, result: data, error: null };
    } catch (err) {
        return { status: false, count: null, result: null, error: err };
  }
}

module.exports = {create, getAll, getByID, updateByID, getByDate, getByDateFrame};