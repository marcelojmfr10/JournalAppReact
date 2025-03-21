import { useDispatch } from "react-redux"
import { Link as RouterLink } from "react-router"
import { Google } from "@mui/icons-material"
import { Box, TextField, Typography, Grid2, Button, Link } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth"

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'marcelo@google.com',
    password: '123456'
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  }

  const onGoogleSigIn = () => {
    console.log('onGoogle');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid2 onSubmit={onSubmit} container spacing={2}>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              id="email"
              label="Correo"
              type="email"
              placeholder="email@google.com"
              size="small"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>
        </Grid2>

        {/* New */}
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button onClick={onGoogleSigIn}
              variant="contained"
              fullWidth
              startIcon={<Google />}
            >
              Google
            </Button>
          </Grid2>
        </Grid2>

        <Grid2
          container
          // direction="row"
          justifyContent="end"
          sx={{ mt: 2 }}
        >

          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/register"
          >
            Crear una cuenta
          </Link>
        </Grid2>
      </form>

    </AuthLayout>

  )
}

