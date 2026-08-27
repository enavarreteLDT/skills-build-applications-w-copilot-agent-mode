import ResourceList from './ResourceList.jsx'

export default function Leaderboard() {
  return <ResourceList component="leaderboard" title="Leaderboard" description="A little friendly pressure, measured in points." columns={['Rank', 'Athlete', 'Points', 'Team']} renderRow={(entry, index) => <tr key={entry._id || index}><td><span className="rank">{entry.rank}</span></td><td>{entry.user?.name || entry.user || 'Athlete'}</td><td><strong>{entry.points}</strong></td><td>{entry.team?.name || entry.team || 'Team'}</td></tr>} />
}