import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import LanguageIcon from '@mui/icons-material/Language'
import PublicIcon from '@mui/icons-material/Public'

export default function UserDetailsModal({ user, onClose }) {
  const initials = user.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>User Details</DialogTitle>
      <DialogContent dividers>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Avatar>{initials}</Avatar>
          <Typography variant="h6">{user.name}</Typography>
        </Stack>

        <Typography gutterBottom display="flex" alignItems="center" gap={1}>
          <EmailIcon fontSize="small" /> {user.email}
        </Typography>

        <Typography gutterBottom display="flex" alignItems="center" gap={1}>
          <PhoneIcon fontSize="small" /> {user.phone}
        </Typography>

        <Typography gutterBottom display="flex" alignItems="center" gap={1}>
          <LocationCityIcon fontSize="small" /> {user.address.city}
        </Typography>

        <Typography gutterBottom display="flex" alignItems="center" gap={1}>
          <LanguageIcon fontSize="small" /> {user.website}
        </Typography>

        <Typography gutterBottom display="flex" alignItems="center" gap={1}>
          <PublicIcon fontSize="small" /> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
