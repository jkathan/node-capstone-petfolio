const mongoose = require('mongoose');


const petSchema = new mongoose.Schema({

  petOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  petName: {
    type: String,
    required: true,
  },
  petGender: String,
  petSpecies: {
    type: String,
    required: true,
  },
  petColor: String,
  petBirthday: String,
  petAge: String,
  dateAdopted: String,
  petVet: String,
  petAllergies: String,
  petMedicalCondition: String,
  petMedications: String,
  additionalInformation: String,
  avatar: {
    path: { type: String },
  },

});


const pets = mongoose.model('Pets', petSchema);


module.exports = pets;
