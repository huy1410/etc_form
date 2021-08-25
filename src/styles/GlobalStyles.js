import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#1976D2',
            main: '#1F62B0',
            dark: '#174A85'
        },
        secondary: {
            light: '#FF5844',
            main: '#F20519',
            dark: '#B60000'
        },
        text: {
            primary: 'rgba(31, 98, 176, 0.87)',
            secondary: 'rgba(31, 98, 176, 0.54)',
            disabled: 'rgba(31, 98, 176, 0.38)',
            hint: 'rgba(31, 98, 176, 0.38)'
        },
        divider: 'rgba(31, 98, 176, 0.12)'
    },
    typography: {
        fontFamily: ['"Roboto Slab"', 'sans-serif'].join(',')
    }
});

const GlobalStyles = createGlobalStyle`
    html,
    body,
    #__next {
        width: 100%;
        height: 100%;
    }
`;

export { GlobalStyles, theme };
