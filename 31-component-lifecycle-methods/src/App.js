import React from 'react';
import logo from './logo.svg';
import './App.css';
import WorkoutList from './components/WorkoutList';
import WorkoutsForm from './components/WorkoutsForm';

class App extends React.Component {

  constructor() {
    super()
    console.log('app constructor')
  }

  state = {
    workouts: [
      {
        id: 1,
        name: 'v good',
        exercises: [
          {
            id: 1,
            weight: 10,
            count: 10
          },
          {
            id: 2,
            weight: 20,
            count: 20
          }
        ]
      },
      {
        id: 2,
        name: 'v bad',
        exercises: [
          {
            id: 3,
            weight: 10,
            count: 10
          },
          {
            id: 4,
            weight: 20,
            count: 20
          }
        ]
      }
    ]
  }

  componentDidMount() {
    console.log('app mounted')
  }

  deleteWorkout = id => this.setState({
    workouts: this.state.workouts.filter(workout => workout.id !== id)
  })

  addWorkouts = newWorkouts => this.setState({
    workouts: [...this.state.workouts, ...newWorkouts]
  })

  componentDidUpdate() {
    console.log('app did update')
  }


  render() {
    console.log('app render')
    return (
      <div className="App">
        <WorkoutList workouts={this.state.workouts} deleteWorkout={this.deleteWorkout} />
        <WorkoutsForm submitWorkouts={this.addWorkouts} />
      </div>
    );
  }
}

export default App;
