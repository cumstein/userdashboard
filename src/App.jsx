import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import UserList from './components/UserList'
import SearchBar from './components/SearchBar'
import UserDetailsModal from './components/UserDetailsModal'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        User Dashboard
      </Typography>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <UserList
          users={users}
          searchTerm={searchTerm}
          onUserClick={(user) => navigate(`/users/${user.id}`)}
        />
      )}

      <Routes>
        <Route
          path="/users/:id"
          element={<UserDetailsWrapper users={users} loading={loading} />}
        />
      </Routes>
    </Container>
  )
}

function UserDetailsWrapper({ users, loading }) {
  const { id } = useParams()
  const navigate = useNavigate()

  if (loading) return null

  const user = users.find((u) => u.id === Number(id))
  if (!user) return null

  return (
    <UserDetailsModal
      user={user}
      onClose={() => navigate('/')}
    />
  )
}

export default App
