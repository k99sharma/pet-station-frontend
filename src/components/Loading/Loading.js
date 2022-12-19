// importing components
import { Backdrop, CircularProgress } from "@mui/material";

// Big Loading Component
export function FullScreenLoading() {
    return (
        <div className="fullScreenLoading">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export function CardLoading() {
    return (
        <div className="cardLoading">
            Card Loading
        </div>
    )
}