import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router"
import { Google } from "@mui/icons-material"
import { Box, TextField, Typography, Grid2, Button, Link, Alert } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth"

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    
    dispatch(startLoginWithEmailPassword({email, password}));
  }

  const onGoogleSigIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
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
          <Grid2 size={{ xs: 12, md: 12 }} display={!!errorMessage ? '' : 'none'}>
            <Alert severity="error">
              {errorMessage}
            </Alert>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button onClick={onGoogleSigIn} disabled={isAuthenticating}
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

