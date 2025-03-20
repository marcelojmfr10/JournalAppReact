import { StarOutline } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"



export const NothingSelectedView = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
      }}
    >
      <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      <Typography color="white" variant="h5">
        Selecciona o crea una entrada
      </Typography>
    </Box>
  )
}

