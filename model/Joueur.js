const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JoueurSchema = new Schema({
  nameJoueur: {
    type: String,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  equipe: { type: Schema.Types.ObjectId, ref: "equipe" }
});
module.exports = Joueur = mongoose.model("joueur", JoueurSchema);
