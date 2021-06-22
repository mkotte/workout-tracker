const router = require('express').Router();
const Workout = require('../models/workout.js')

// GET route /api/workouts
router.get("/api/workouts", async (req,res) => {
    try{ const data = await Workout.aggregate([
        {$addFields: {
            totalDuration:{$sum :'$exercises.duration' }
        }}
    ])
    res.json(data)
    res.console('success!')
} catch (err) {
    res.status(400).json(err)
};

// PUT route /api/workouts/:id


// POST route /api/workouts


// GET route /api/workouts/range


