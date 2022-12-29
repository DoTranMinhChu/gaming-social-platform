import { useMemo } from "react";
import palette from './palette';
import PropTypes from 'prop-types';
import { customShadows } from './shadows';
import typography from './typography';
import componentsOverride from './overrides';
// material
import { CssBaseline, Theme } from '@mui/material';
import {
    createTheme,
    StyledEngineProvider,
    ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
//

type Props = {
    children: React.ReactNode;
};

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export default function ThemeProvider({ children }: Props) {
    const themeOptions: any = useMemo(
        () => ({
            palette,
            shape: { borderRadius: 8 },
            typography,
            shadows: [] as unknown as Theme['shadows'],
            customShadows
        }),
        []
    )
    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);
    theme.shadows = [] as unknown as Theme['shadows'];

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}