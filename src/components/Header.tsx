import React, { ReactElement, MouseEvent, useState } from 'react';
import { AppBar, Avatar, Container, Divider, IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { useAuthCtx } from '../lib/context/AuthCTX';

const useStyles = makeStyles(({ palette }) => ({
	header: {
		height: 68,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	logo: {
		color: palette.secondary.contrastText,
		userSelect: 'none',
		transform: 'rotate(1deg)'
	},
	avatar: {
		backgroundColor: palette.secondary.light
	},
	menuTitle: {
		marginLeft: '8px'
	}
}));

const Header = (): ReactElement => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const { logout } = useAuthCtx();
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar position='sticky'>
			<Container className={classes.header}>
				<Typography variant='h5' component='h1' className={classes.logo}>Console.logbook(&apos;123&apos;)</Typography>
				<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					<Avatar className={classes.avatar}></Avatar>
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem>
						<PersonIcon/>
						<Typography className={classes.menuTitle}>Profile</Typography>
					</MenuItem>
					<Divider />
					<MenuItem onClick={() => {logout(); handleClose();}}>
						<ExitToAppRoundedIcon/>
						<Typography className={classes.menuTitle}>Logout</Typography>
					</MenuItem>
				</Menu>
			</Container>
		</AppBar>
	);
};

export default Header;