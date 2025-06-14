import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Replace logo URLs with game titles
const gameNames = [
  "Ambition", 
  "Dream"
];

// Style for the game titles
const gameNameStyle = {
  margin: '0 32px',
  fontWeight: 600,
  fontSize: '1.5rem',
  letterSpacing: '0.05em',
  textAlign: 'center' as const,
  opacity: 0.85,
};

export default function LogoCollection() {
  // We'll always use dark mode now
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Our Games
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 2 }}>
        {gameNames.map((name) => (
            <Typography
              variant="h5"
              color="primary"
              sx={gameNameStyle}
            >
              {name}
            </Typography>
        ))}
      </Grid>
    </Box>
  );
}
