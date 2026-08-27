import ResourceList from './ResourceList.jsx'

export default function Workouts() {
  return <ResourceList component="workouts" endpoint="/api/workouts/" title="Workouts" description="Simple plans for showing up with intention." columns={['Workout', 'Difficulty', 'Duration', 'Exercises']} renderRow={(workout, index) => <tr key={workout._id || index}><td><strong>{workout.title}</strong><small>{workout.description}</small></td><td><span className="difficulty">{workout.difficulty}</span></td><td>{workout.durationMinutes} min</td><td>{workout.exercises?.length || 0}</td></tr>} />
}