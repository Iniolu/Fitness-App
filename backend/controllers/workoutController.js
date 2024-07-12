// backend/controllers/workoutController.js
const Workout = require('../models/workout');

exports.createWorkout = (req, res) => {
  const newWorkout = new Workout({
    userId: req.body.userId,
    type: req.body.type,
    duration: req.body.duration
  });

  newWorkout.save()
    .then(workout => res.json(workout))
    .catch(err => console.log(err));
};

exports.getWorkouts = (req, res) => {
  Workout.find({ userId: req.params.userId })
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err));
};
