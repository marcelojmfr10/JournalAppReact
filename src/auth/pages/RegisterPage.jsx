

import { Google } from "@mui/icons-material"
import { Box, TextField, Typography, Grid2, Button, Link } from "@mui/material"
import { Link as RouterLink } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (


    <AuthLayout title="Crear Cuenta">
      <Grid2 container component="form" spacing={2}>
      <Grid2 size={{ xs: 12, md: 12 }}>
          <TextField
            id="name"
            label="Nombre Completo"
            type="text"
            placeholder="Nombre Completo"
            size="small"
            fullWidth
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 12 }}>
          <TextField
            id="email"
            label="Correo"
            type="email"
            placeholder="email@google.com"
            size="small"
            fullWidth
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 12 }}>
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            placeholder="password"
            size="small"
            fullWidth
          />
        </Grid2>
      </Grid2>

      {/* New */}
      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        <Grid2 size={{ xs: 12, md: 12 }}>
          <Button variant="contained" fullWidth>
            Crear Cuenta
          </Button>
        </Grid2>

      </Grid2>

      <Grid2
        container
        // direction="row"
        justifyContent="end"
        sx={{ mt: 2 }}
      >
        <Typography sx={{ mr: 1}}>¿Ya tienes cuenta?</Typography>
        <Link
          component={RouterLink}
          color="inherit"
          to="/auth/login"
        >
          Ingresar
        </Link>
      </Grid2>
    </AuthLayout>

  )
}

