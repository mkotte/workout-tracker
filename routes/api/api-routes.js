const router = require('express').Router();
const Workout = require('../models/workout.js')

// GET route /api/workouts
router.get("/api/workouts", async (req,res) => {
    try{ const data = await Workout.aggregate([
        {$addFields: {
            totalDuration:{$sum :'$exercises.duration' }
        }}
    ]);
    res.json(data);
    res.console('success!');
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT route /api/workouts/:id
router.put("/api/workouts/:id", async (req,res) => {
    try{ const data = await Workout.findByIdAndUpdate(req.params.id,
        {$push : {exercises: req.body} },
        {new: true});
        res.json(data);
        res.console('success!');
    } catch (err) {
        res.status(400).json(err);
    }
});

// POST route /api/workouts
router.post("/api/workouts", async (req,res) => {
    try{ const data = await Workout.create(req.body);
        res.json(data);
        res.console('success!');
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET route /api/workouts/range
router.get("/api/workouts/range", async (req,res) => {
    try{ const data = await Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: '$exercises.duration'},
                totalWeight: {$sum: '$exercises.weight'}
            }
        }
        ])
        .limit(7)
        .sort({ _id: -1});
        res.json(data);
        res.console('success!');
    } catch (err) {
        res.status(400).json(err);
    }
});
