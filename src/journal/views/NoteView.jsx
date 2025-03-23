

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Box, Button, Grid2, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo, useRef } from 'react'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date).toUTCString();
    return newDate;
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  }

  const fileInputRef = useRef();

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved])

  const onInputFileChange = ({ target }) => {
    if (target.files === 0) return;

    dispatch(startUploadingFiles(target.files));
  }

  const onDelete = () => {
    dispatch(startDeletingNote());
  }

  return (
    <Box sx={{ mb: 1 }} className="animate__animated animate__fadeIn animate__faster">
      {/* Encabezado con fecha y botón */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>

        <IconButton color='primary' disabled={isSaving} onClick={() => fileInputRef.current.click()}>
          <UploadOutlined />
        </IconButton>

        <input ref={fileInputRef} type='file' multiple onChange={onInputFileChange} style={{ display: 'none' }} />

        <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
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
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Box>

      <Grid2
          container
          // direction="row"
          justifyContent="end"
          sx={{ mt: 2 }}
        >
          <Button onClick={onDelete} color='error'>
            <DeleteOutline/>
            Borrar
          </Button>
        </Grid2>

      {/* Galería de imágenes */}
      <ImageGallery images={note.imageUrls} />
    </Box>


  )
}
