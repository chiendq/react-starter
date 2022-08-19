import {createTheme} from "@mui/material";

export const ThemeDark = createTheme({
    gray: {
        base: '#666666',
        light: '#a2a2a2',
        dark: '#27292a'
    },
    palette: {
        background: {
            default: "#1f2122"
        },
        text: {
            primary: "#ffffff"
        }
    },
    hover: {
        pink: '#e75e8d'
    }
});
