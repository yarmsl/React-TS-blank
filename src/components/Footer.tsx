import React, { ReactElement } from 'react';
import { Box, Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles((theme) => ({
	footer: {
		height: 58,
		backgroundColor: theme.palette.secondary.light
	},
	wrapper: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end'
	}
}));

const Footer = (): ReactElement => {

	const classes = useStyles();

	return (
		<Box className={classes.footer} component='footer'>
			<Container className={classes.wrapper}>
				<IconButton href='https://t.me/Yaroslavmsl'><TelegramIcon /></IconButton>
				<Typography color='textSecondary'>Yaroslav M.</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
