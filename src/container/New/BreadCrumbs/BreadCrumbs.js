import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        padding: '8px 0',
    }
}));

export const Breadscrumbs = () => {
    const classes = useStyles();
    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
            <Link color="inherit" href="/" >
                Trang chủ
      </Link>
            <Link color="inherit" >
                Quản lý đăng ký xe
      </Link>
            <Typography color="textPrimary">Đăng ký lần đầu</Typography>
        </Breadcrumbs>
    )
}