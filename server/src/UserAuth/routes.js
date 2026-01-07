var express = require("express");
var router = express.Router();

const controller = require("./controller");
const validate = require("./validation");
const { validationResult } = require("express-validator");

//JSON
// {
//     firstName: "String",
//     lastName: "String",
//     email: "String",
//     password: "String",
//     isAdmin: Boolean
// }

router.get("/", function (req, res, next) {
  res.send("User says Hi");
});

router.post("/signup", validate, async (req,res) => {
  try{
    const error = validationResult(req);
    if (!error.isEmpty())
      throw error.errors[0].msg;

    let dbActionFeedback = await controller.signUp(req.body);
    if(dbActionFeedback.status){
      console.log("Success");
      res.status(200).json({ result: dbActionFeedback.result });
    }
    else {
      res.status(400).json(dbActionFeedback);
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  } 
});

router.post('/login', async (req, res) => {
  try{
    let dbActionFeedback = await controller.login(req.body);
    if(dbActionFeedback.status){
      console.log("Success");
      res.status(200).json({ result: dbActionFeedback.result });
    }
    else {
      res.status(400).json(dbActionFeedback);
    }
  } catch(error){
    console.log(error);
    res.status(500).json({ status: false, count: 0, result: null, error: null });
  } 
});

// router.get("/proflie", async (req,res) => {
//   try{

//   } catch(error){

//   } 
// });

module.exports = router;