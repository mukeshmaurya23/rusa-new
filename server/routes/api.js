//> to route path / , /api/v1/task
// use express router to route api path
// connect it to app.js by exporting

// init's
const express = require("express");
const router = express.Router();
const {
  createProgram,
  getProgram,
  getAllProgram,
  editProgram,
  removeProgram,
} = require("../controllers/program"); // import function from controller

const {
  createUser,
  getUser,
  getAllUser,
  editUser,
  removeUser,
} = require("../controllers/user"); // import function from controller

// USER
router.route("/users").get(getAllUser);
router.route("/users").get(getUser);
router.route("/users").post(createUser);

// Test
router.route("/programs").get(getAllProgram);
//>programs CRUD

// Create
router.route("/programs").post(createProgram);
// Read
// router.route("/").get(getAllProgram);
// Read Single
router.route("/programs/:id").get(getProgram);
// update/edit task
// app.patch('/api/v1/tasks/:id',(req,res)=>{})
router.route("/programs/:id").patch(editProgram);
// delete task
// app.delete('/api/v1/tasks/:id',(req,res)=>{})
router.route("/programs/:id").delete(removeProgram);

module.exports = router;

/* N O T E S

*/
