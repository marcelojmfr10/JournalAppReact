
import { useState } from "react"
import { Box, TextField, Typography, Grid2, Button, Link } from "@mui/material"
import { Link as RouterLink } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'La contraseña debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] =useState(false);

  const { displayName, email, password, onInputChange, formState, isFormValid, emailValid, 
    passwordValid, displayNameValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));    
  }

  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={onSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              id="name"
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Completo"
              size="small"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
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
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid2>
        </Grid2>

        {/* New */}
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Button type="submit" variant="contained" fullWidth>
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
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/login"
          >
            Ingresar
          </Link>
        </Grid2>
      </form>

    </AuthLayout>

  )
}

