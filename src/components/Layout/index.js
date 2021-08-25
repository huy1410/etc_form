import Nav from '../Navigation';
import Drawer from '../Drawer'
import { useStyles } from './styles';

export const LayoutHome = ({ children, footer, breadcrumbs }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
		
			<Nav />
			<div className={classes.contentWrapper}>
			{breadcrumbs}
				<div className={classes.wrapper}>
					{children}
				</div>
			</div>
			{footer}
		</div>
	)
}
export const Layout = ({ children, footer, breadcrumbs }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
		
			<Nav />
			<div className={classes.contentWrapper}>
			{breadcrumbs}
				<div className={classes.wrapper}>
					{children}
				</div>
			</div>
			{footer}
		</div>
	)
}

