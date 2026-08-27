import ResourceList from './ResourceList.jsx'

export default function Activities() {
  return <ResourceList component="activities" endpoint="/api/activities/" title="Activity log" description="Recent movement across the OctoFit crew." columns={['Type', 'Duration', 'Calories', 'Completed']} renderRow={(activity, index) => <tr key={activity._id || index}><td><strong>{activity.type}</strong></td><td>{activity.durationMinutes} min</td><td>{activity.calories} kcal</td><td>{new Date(activity.completedAt).toLocaleDateString()}</td></tr>} />
}