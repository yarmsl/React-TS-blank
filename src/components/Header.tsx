import React, { ReactElement } from 'react';
import { AppBar, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(({palette}) => ({
	header: {
		height: 58,
		display: 'flex',
		alignItems: 'center'
	},
	logo: {
		color: palette.secondary.contrastText,
		userSelect: 'none',
		transform: 'rotate(1deg)'
	}
}));

const Header = (): ReactElement => {
	const classes = useStyles();

	return (
		<AppBar position='sticky'>
			<Container className={classes.header}>
				<Typography variant='h5' component='h1' className={classes.logo}>Console.logbook(&apos;123&apos;)</Typography>
			</Container>
		</AppBar>
	);
};

export default Header;