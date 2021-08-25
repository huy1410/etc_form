import { useStyles } from "./styles";

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<p className={classes.content}>	CỤC CẢNH SÁT GIAO THÔNG </p>
			<p className={classes.content}>	Địa chỉ: 112 Lê Duẩn, Quận Hoàn Kiếm, Hà Nội</p>
			<p className={classes.content}>Fax: 84 24 38220885 - Email: tccs-c67@vnn.vn - Đường dây nóng: 0692342608	</p>
		</div>
	);
};

export default Footer;