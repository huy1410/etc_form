import Head from 'next/head';
import Footer from '../../components/Footer';
import { LayoutHome } from '../../components/Layout';


const HomePage = () => {
	return (
		<>
			<LayoutHome footer={<Footer />}>
				<Head>
					<title>
						Đăng ký xe
					</title>
				</Head>
			</LayoutHome>
		</>
	)
}

export default HomePage
