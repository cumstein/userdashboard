import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import UserCard from './UserCard'

export default function UserList({ users, searchTerm, onUserClick }) {
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (filtered.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        No users found.
      </Typography>
    )
  }

  return (
    <Grid container spacing={3}>
      {filtered.map(user => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={user.id}
          sx={{ display: 'flex' }} // نکته مهم
        >
          <UserCard user={user} onClick={onUserClick} />
        </Grid>
      ))}
    </Grid>
  )
}
