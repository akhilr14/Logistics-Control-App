var express = require("express");
var router = express.Router();

const controller = require("./controller");
const validate = require("./validation");
const {validationResult} =require("express-validator");

//JSON
// {
//     "startLocation": "string",
//     "dropLocation": "string",
//     "startDate": Date,
//     "endDate": Date,
//     "serviceType": number,
//     "passengerCount": number,
//     "goodsLoad": number,
//     "travelDistance": number,
//     "Duration":number
// }
router.get("/", function (req, res, next) {
  res.send("Order says Hi");
});

router.post("/create", validate, async(req,res) => {
  try{
    const error = validationResult(req);
        if (!error.isEmpty()) {
            throw error.errors[0].msg;
        }
    let dbActionFeedback = await controller.create(req.body);
    if(dbActionFeedback.status){
      console.log("Success");
      res.status(200).json({
        status: true,
        count: dbActionFeedback.count,
        result: dbActionFeedback.result,
        error: null,
      });

    }
    else{
      console.log("failed");
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

router.get("/all", async(req,res) => {
  try{
    let dbActionFeedback = await controller.getAll();
    if(dbActionFeedback.status){
      console.log("Success");
      res.status(200).json({
        status: true,
        count: dbActionFeedback.count,
        result: dbActionFeedback.result,
        error: null,
      });

    }
    else{
      console.log("failed");
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

router.get("/id/:id", async(req,res) => {
  try{
    let dbActionFeedback = await controller.getByID(req.params.id);
    if(dbActionFeedback.status){
      console.log("Success");
      res.status(200).json({
        status: true,
        count: dbActionFeedback.count,
        result: dbActionFeedback.result,
        error: null,
      });

    }
    else{
      console.log("failed");
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

router.put("/update/:id", validate, async(req,res) => {
  try{
    const error = validationResult(req);
        if (!error.isEmpty()) {
            throw error.errors[0].msg;
        }
    let dbActionFeedback = await controller.updateByID(req.params.id,req.body);
    if(dbActionFeedback.status){
      console.log("Success");
      res.status(200).json({
        status: true,
        count: dbActionFeedback.count,
        result: dbActionFeedback.result,
        error: null,
      });

    }
    else{
      console.log("failed");
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

router.get("/date/:startDate", async (req, res) => {
  try{
    let dbActionFeedback = await controller.getByDate(req.params.startDate);
  if(dbActionFeedback.status){
      console.log("Success");
      res.status(200).json({
        status: true,
        count: dbActionFeedback.count,
        result: dbActionFeedback.result,
        error: null,
      });

    }
    else{
      console.log("date");
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

router.get("/dateFrame", async (req, res) => {
  try{
    console.log("hi");
    let dbActionFeedback = await controller.getByDateFrame(req.query);
  if(dbActionFeedback.status){
      console.log("Success");
      res.status(200).json({
        status: true,
        count: dbActionFeedback.count,
        result: dbActionFeedback.result,
        error: null,
      });

    }
    else{
      console.log("date");
      res.status(400).json(dbActionFeedback);
    }
  } catch(error){
    
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

module.exports = router;