import ResourceList from './ResourceList.jsx'

export default function Teams() {
  return <ResourceList component="teams" title="Teams" description="Find your people and keep the pace together." columns={['Team', 'Members', 'Color']} renderRow={(team, index) => <tr key={team._id || index}><td><strong>{team.name}</strong></td><td>{team.members?.length || 0} members</td><td><span className="color-chip" style={{ backgroundColor: team.color }} />{team.color}</td></tr>} />
}