const mongoose = require("mongoose");
const schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {},
    exercises : [
      {
        type:{}
      },
      {
        name: {}
      },
      {
        duration: {}
      },
      {
        weight: {}
      },
      {
        reps: {}
      },
      {
       sets: {} 
      }
    ], 
})

    // exercises: [
    //   {
    //     type: 'resistance',
    //     name: 'Bicep Curl',
    //     duration: 20,
    //     weight: 100,
    //     reps: 10,
    //     sets: 4,
    //   },