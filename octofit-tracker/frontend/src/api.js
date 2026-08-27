const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiBaseUrl = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api` : 'http://localhost:8000/api'

export async function fetchCollection(endpoint) {
  const url = endpoint.startsWith('/api/')
    ? `${apiBaseUrl.replace(/\/api$/, '')}${endpoint}`
    : `${apiBaseUrl}/${endpoint}/`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Unable to load ${endpoint} (${response.status})`)
  const payload = await response.json()
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.items)) return payload.items
  if (Array.isArray(payload.data)) return payload.data
  if (payload.data && Array.isArray(payload.data.items)) return payload.data.items
  return []
}

export { apiBaseUrl }