import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
	},
	contentWrapper: {
		display: 'flex',
		flex: '1 1 0%',
		flexDirection: 'column',
		background: '#1f62b01f',
		padding: '16px',
	},
	contentWrapper2: {
		display: 'flex',
		flex: '1 1 0%',
		flexDirection: 'column',
		background: '#1f62b01f',
		padding: '0 16px 16px 16px',
	},
	wrapper: {
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		padding: '16px',
		background: '#FFF',
	},
}));

