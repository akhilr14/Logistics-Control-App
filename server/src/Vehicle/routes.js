var express = require("express");
var router = express.Router();

const controller = require("./controller");
const validate = require("./validation");
const { validationResult } = require("express-validator");
const auth = require('../middleware/auth');

router.get("/", auth, function (req, res, next) {
  res.send("Vehicle says Hi");
});


//  JSON
// {
//     "name": "string",
//     "model": "string",
//     "registrationNumber": "string",
//     "type": number,
//     "purpose": number,
//     "passengerCapacity": number,
//     "goodsCapacity": number,
//     "ratePerKM": number,
//     "status":number
// }
router.post("/create", validate, auth, async(req,res) => {
  try{
    const error = validationResult(req);
        if (!error.isEmpty()) {
            throw error.errors[0].msg;
        }
    if(req.user.isAdmin){
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
    }
    else{
      console.log("No privilage, Login as admin");
      res.status(400).json({error: "No privilage, Login as admin"});
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

router.get("/all", auth, async(req,res) => {
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

router.get("/:id", auth, async(req,res) => {
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

router.get("/available", auth, async(req,res) => {
  try{
    let dbActionFeedback = await controller.getAvailable();
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

router.put("/update/:id", validate, auth, async(req,res) => {
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

router.patch("/status/:id", validate, auth, async(req,res) => {
  try{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        throw error.errors[0].msg;
    }
    if(req.user.isAdmin){
          let dbActionFeedback = await controller.updateStatus(req.params.id,req.body);
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
            res.status(400).json({ status: false, count: 0, result: null, error: null });
          }
        }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

module.exports = router;