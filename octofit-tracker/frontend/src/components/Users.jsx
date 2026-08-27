import ResourceList from './ResourceList.jsx'

export default function Users() {
  return <ResourceList component="users" endpoint="/api/users/" title="Members" description="The people making the next session count." columns={['Member', 'Email', 'Joined']} renderRow={(user, index) => <tr key={user._id || index}><td><span className="avatar">{user.avatar || user.name?.slice(0, 2).toUpperCase()}</span><strong>{user.name}</strong></td><td>{user.email}</td><td>{new Date(user.createdAt).toLocaleDateString()}</td></tr>} />
}