const express = require("express");
const router = express.Router();

const Equipe = require("../model/Equipe");
const uploadMulter = require("../middleware/upload");
const validation = require("../middleware/validation");
// add Equipe
router.post("/add", (req, res) => {
  const newEquipe = new Equipe({ ...req.body })
  newEquipe
      .save()
      .then(eq => res.status(200).json({ msg: "successfuly added", eq }))
      .catch(err => res.status(400).json(err))
})

// get All Equipe
router.get("/", (req, res) => {
  Equipe.find()
    .then((equipe) => res.send(equipe))
    .catch((err) => console.log(err));
});

// get Equipe by id
router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Equipe.findOne({ _id })
    .then((equipe) => res.send(equipe))
    .catch((err) => console.log(err));
});

// delete Equipe
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  Equipe.findOneAndDelete({ _id: _id })
    .then(() => res.send("success"))
    .catch((err) => console.log(err));
});

router.put('/:_id', (req, res) => {
  let { _id } = req.params
  Equipe.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("User has been updated"))
      .catch(err => res.send(err))
})

module.exports = router;
