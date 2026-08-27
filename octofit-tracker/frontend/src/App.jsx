import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  ['/', 'Overview'], ['/activities', 'Activities'], ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'], ['/users', 'Members'], ['/workouts', 'Workouts'],
]

function Overview() {
  return <section className="overview">
    <p className="eyebrow">Today&apos;s training desk</p>
    <h1>Move with your team.</h1>
    <p className="intro">A calm place to log effort, find momentum, and keep the whole crew in stride.</p>
    <div className="overview-grid">
      <article className="feature-panel feature-panel--coral"><span className="panel-kicker">Next up</span><h2>Full Body Circuit</h2><p>35 minutes - Intermediate</p><NavLink className="panel-link" to="/workouts">View workout <span aria-hidden="true">-&gt;</span></NavLink></article>
      <article className="feature-panel feature-panel--mint"><span className="panel-kicker">Team pulse</span><h2>Summit Striders</h2><p>860 points - leading this week</p><NavLink className="panel-link" to="/leaderboard">See leaderboard <span aria-hidden="true">-&gt;</span></NavLink></article>
    </div>
  </section>
}

function App() {
  return <div className="app-shell">
    <header className="topbar"><NavLink className="brand" to="/" aria-label="OctoFit home"><span className="brand-mark">OF</span><span>OctoFit</span></NavLink><span className="status-dot">Live training data</span></header>
    <div className="app-layout">
      <aside className="sidebar"><p className="sidebar-label">Workspace</p><nav aria-label="Primary navigation">
        {navigation.map(([path, label], index) => <NavLink key={path} className={({ isActive }) => isActive ? 'nav-item nav-item--active' : 'nav-item'} to={path} end={path === '/'}><span className="nav-index">{String(index + 1).padStart(2, '0')}</span>{label}</NavLink>)}
      </nav><div className="sidebar-footer">Build consistency<br /><strong>one session at a time.</strong></div></aside>
      <main className="content"><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main>
    </div>
  </div>
}

export default App