const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
                
            name: {
                type: String,
                trim: true,
                required: true
            },
            
            distance: {
                type: Number
            },
            
            duration: {
                type: Number
            },
            
            reps: {
                type: Number
            },

            sets: {
                type: Number
            },

            weight: {
                type: Number
            }
        }],

    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;