import { Box, CircularProgress } from "@mui/material"


export const CheckingAuth = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                bgcolor: "primary.main",
                // padding: 4,
            }}
        >
            <Box
            >
                <CircularProgress color='warning' />
            </Box>
        </Box>
    )
}
