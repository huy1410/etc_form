import { makeStyles } from '@material-ui/core/styles';



import { theme } from '../../Theme'
export const useStyles = makeStyles(() => ({
    toolBar: {
        background: theme.palette.primary.dark,
        minHeight: 48,
        justifyContent: 'space-between',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
    title: {
        fontFamily: 'Roboto Slab, san-serif',
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: 1,
        color: '#FFF',
    },
    icon: {
        color: '#fff',
    },
}));

