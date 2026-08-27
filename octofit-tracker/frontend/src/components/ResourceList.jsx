import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function ResourceList({ component, title, description, columns, renderRow }) {
  const [records, setRecords] = useState([])
  const [state, setState] = useState({ loading: true, error: '' })

  useEffect(() => {
    let active = true
    fetchCollection(component).then((items) => {
      if (active) { setRecords(items); setState({ loading: false, error: '' }) }
    }).catch((error) => active && setState({ loading: false, error: error.message }))
    return () => { active = false }
  }, [component])

  return <section className="resource-page"><div className="page-heading"><p className="eyebrow">OctoFit / {component}</p><h1>{title}</h1><p className="intro">{description}</p></div><div className="data-panel">
    {state.loading && <p className="empty-state">Loading {component}...</p>}
    {state.error && <p className="empty-state empty-state--error">{state.error}</p>}
    {!state.loading && !state.error && (records.length ? <div className="table-responsive"><table className="table resource-table"><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{records.map(renderRow)}</tbody></table></div> : <p className="empty-state">No {component} have been logged yet.</p>)}
  </div></section>
}