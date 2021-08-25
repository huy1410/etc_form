import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
	},
	input: {
		padding: 10,
	},
	label: {
		padding: '0 5px',
		background: '#FFF',
	},
	top: {
		marginTop: 5,
		marginBottom: 5,
	},
}));