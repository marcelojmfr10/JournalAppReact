

import { TurnedInNot } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React, { useMemo } from 'react'
import { setActiveNote } from '../../store/journal'
import { useDispatch } from 'react-redux'

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
    
    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}));
    }

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0,17) + '...' : title;
    }, [title])

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Stack>
                    <ListItemText primary={newTitle}></ListItemText>
                    <ListItemText secondary={body}></ListItemText>
                </Stack>
            </ListItemButton>
        </ListItem>
    )
}

