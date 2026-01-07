var express = require("express");
var router = express.Router();

const controller = require("./controller");

router.get("/", function (req, res, next) {
  res.send("Vehicle says Hi");
});


//  JSON
// {
//     "name": "string",
//     "model": "string",
//     "registerNumber": "string",
//     "type": number,
//     "purpose": number,
//     "passengerCapacity": number,
//     "goodsCapacity": number,
//     "ratePerKM": number,
//     "status":number
// }
router.post("/create", async(req,res) => {
  try{
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

router.get("/:id", async(req,res) => {
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

router.get("/available", async(req,res) => {
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

router.put("/update/:id", async(req,res) => {
  try{
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

router.patch("/status/:id", async(req,res) => {
  try{
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
      console.log("failed");
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  }
});

module.exports = router;