// ----------------------------------------------------------------------
import { Theme } from '@mui/material';

export default function Autocomplete(theme: Theme | any) {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.z20,
                },
            },
        },
    };
}
