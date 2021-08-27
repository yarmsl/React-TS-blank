import React from 'react';
import { Child } from '../types/types';


const MainLayout = ({ children }: Child): React.ReactElement => {
	return (
		<>

			{children}
		</>
	);
};

export default MainLayout;