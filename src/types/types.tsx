import { Theme } from '@material-ui/core';
import React from 'react';

export interface Child  {
	children?: React.ReactNode;
}

export interface LDTheme {
	type: 'light' | 'dark';
}

export interface ThemeCtx {
	theme?: Theme;
	switchTheme: (str: 'light' | 'dark') => void;
}

export interface MetaLT extends Child {
	title: string;
}