import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { GlobalProvider } from '../context/GlobalContext';

import { GlobalStyles, theme } from '@/styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <GlobalProvider>
            <StylesProvider injectFirst>
                <MuiThemeProvider theme={theme}>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <GlobalStyles />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Component {...pageProps} />
                        </MuiPickersUtilsProvider>
                    </ThemeProvider>
                </MuiThemeProvider>
            </StylesProvider>
            </GlobalProvider>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
};

export default MyApp;
