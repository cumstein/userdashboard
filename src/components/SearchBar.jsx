import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Search by name or email"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
  )
}
