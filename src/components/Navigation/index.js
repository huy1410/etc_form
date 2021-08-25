import Link from 'next/link'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStyles } from './styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Nav = () => {

	const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
	return (
		<Toolbar className={classes.toolBar}>
			<IconButton
            onClick={handleClick}
				color="inherit"
				aria-label="open drawer"
				edge="start"
				className={classes.icon}
			>
				<MenuIcon />
        </IconButton> 
                <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
        <Link href="/">
          Trang chủ
        </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link href="/new">
          Quản lý đăng ký xe
        </Link>
        
        </MenuItem>
        <MenuItem onClick={handleClose}><Link href="/test">
          Quản lý hệ thống
        </Link></MenuItem>
        <MenuItem onClick={handleClose}>Quản lý danh mục</MenuItem>
        <MenuItem onClick={handleClose}>Tiện ích</MenuItem>
        <MenuItem onClick={handleClose}>Báo cáo</MenuItem>
        <MenuItem onClick={handleClose}>Tìm kiếm mã hồ sơ</MenuItem>
      </Menu>
			
			<Typography variant="h6" noWrap className={classes.title}>
				HỆ THỐNG ĐĂNG KÝ XE Ô TÔ
          </Typography>
			<IconButton aria-label='person' className={classes.icon} >
				<AccountCircleIcon />
			</IconButton>
		</Toolbar>
	)
}
export default Nav
