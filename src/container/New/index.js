import { Typography } from '@material-ui/core';
import Head from 'next/head';
import {Layout} from '../../components/Layout';
import { Breadscrumbs } from './BreadCrumbs/BreadCrumbs'
import { useStyles } from './styles';
import TabCustome from './Tab';

const RegisterPage = () => {
	const classes = useStyles();

	return (
		<>
			<Layout breadcrumbs={<Breadscrumbs />} >
				<Head>
					<title>
						Đăng ký lần đầu
					</title>
				</Head>
				<Typography variant="h5" className={classes.title}>
					ĐĂNG KÝ LẦN ĐẦU
				</Typography>
				<TabCustome />
				
			</Layout>
		</>
	)
}

export default RegisterPage
