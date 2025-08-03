import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";

export default function UserCard({ user, onClick }) {
  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card
      sx={{
        width: "100%", // کل عرض Grid آیتم رو پر کنه
        height: "100%", // کل ارتفاع رو هم بگیره
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardActionArea
        onClick={() => onClick && onClick(user)}
        sx={{ height: "100%" }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Avatar>{initials}</Avatar>
            <Typography variant="h6">{user.name}</Typography>
          </Stack>

          <Typography
            variant="body2"
            color="text.secondary"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <EmailIcon fontSize="small" /> {user.email}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <PhoneIcon fontSize="small" /> {user.phone}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <LocationCityIcon fontSize="small" /> {user.address.city}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
