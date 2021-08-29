import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import Auth from './pages/Auth';
import Posts from './pages/Posts';
import Post from './pages/Post';
import AddPost from './pages/AddPost';

export const useRoutes = (isAuth: boolean): ReactElement => {
	if (isAuth) {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/addPost' component={AddPost} />
				<Route exact path='/posts' component={Posts} />
				<Route path='/post/:id' component={Post} />
				<Route component={NotFound} />
			</Switch>
		);
	}
	return (
		<Switch>
			<Route exact path='/' component={Auth} />
			<Route component={NotFound} />
		</Switch>
	);
};