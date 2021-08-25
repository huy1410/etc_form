import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../../components/TabPanel';
import { useStyles } from '../Tab/styles';
import FirstRegister from '../FirstRegister';
import ListRegisted from '../ListRegisted';

export default function TabCustome() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				variant="scrollable"
				scrollButtons="auto"
				aria-label="scrollable auto tabs"
			>
				<Tab label="Đăng ký lần đầu" className={classes.tab} />
				<Tab label="Danh sách đã đăng ký" className={classes.tab} />
			</Tabs>
		
			<FirstRegister value={value} index={0} />
		
			<ListRegisted  value={value} index={1}/>
		</div>
	);
}
