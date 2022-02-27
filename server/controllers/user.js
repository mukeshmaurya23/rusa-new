//> function to do the real operation
//- json() to respon in json format
//> CRUD : Create , Reade , Update , Delete
//- get async reqest to work with
//- try proceeding with the opeartion , if error then catch it
const User = require("../models/user");

//- Create
const createUser = async (req, res) => {
  try {
    const data = req.body;
    const Programs = await User.create({
      name: data.name,
      email: data.email,
      course: data.course,
    });
    // const Users = await Program.create(req.body);
    await Programs.save();
    res.send("created");
  } catch (err) {
    res.json({ error: err });
  }
};
//- Read All
// try getting all documents async;ly
const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
    console.log(User);
  } catch (err) {
    res.json({ error: err });
  }
};
//- Read Specific
//- if Program is not available then send err
const getUser = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    const Program = await User.find(id);
    if (Program == "") {
      // return res.status(404).json({error: "Program is not available"})
      return res.status(404).json({ error: "not available" });
    } else {
      return res.json(User);
    }
  } catch (err) {
    // res.send(err)
    res.json({ error: err });
  }
  // res.json(req.params.id)
};
//- Update
//- update(Original,New)
//- if id is not avaliable send err

const editUser = async (req, res) => {
  try {
    const update = await User.updateOne(
      { _id: req.params.id },
      { Program: "Program 33" }
    );
    // const Programs = await Program.find();
    console.log("Updated : " + update);
    if (update == "") {
      // return res.status(404).json({error: "Program is not available"})
      return res.status(404).json({ error: "not available" });
    } else {
      return res.send("Updated +");
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};
//- Delete
const removeUser = async (req, res) => {
  //- try deleting a specific id
  try {
    const remove = await User.deleteOne({ _id: req.params.id });
    console.log("remove : " + remove);
    //- if id is not available then send err
    //- else delete the id
    if (remove == "") {
      // return res.status(404).json({error: "Program is not available"})
      return res.status(404).json({ error: "ID not available" });
    } else {
      return res.send("Deleted -");
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUser,
  editUser,
  removeUser,
};
