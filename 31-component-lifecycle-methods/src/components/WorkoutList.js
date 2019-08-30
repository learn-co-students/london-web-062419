import React from 'react'
import Workout from './Workout';

const WorkoutList = ({ workouts, deleteWorkout }) => {
    return (
        <div className="sidebar list">
            {
                workouts.map(workout => <Workout {...workout} deleteWorkout={() => deleteWorkout(workout.id)} />)
            }
        </div>
    )
}

export default WorkoutList