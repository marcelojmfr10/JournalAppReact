

import { SaveOutlined } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Box sx={{ mb: 1 }}>
      {/* Encabezado con fecha y botón */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={39} fontWeight="light">
          28 de agosto, 2023
        </Typography>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Box>

      {/* Campos de entrada */}
      <Box sx={{ mt: 2 }}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: 'none', mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
        />
      </Box>

      {/* Galería de imágenes */}
      <ImageGallery />
    </Box>
  )
}
