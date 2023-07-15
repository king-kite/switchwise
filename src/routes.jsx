import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';

import pageRoutes from './config/routes';

// Error Page
import Error from './pages/error';
import NotFound from './pages/not-found';

// Layout
import AuthLayout from './layout/auth';
import DashboardLayout from './layout/dashboard';

// Auth
import Home from './pages';
import Authentication from './pages/account/authentication';
import ForgotPassword from './pages/account/forgot-password';
import Login from './pages/account/login';
import Register from './pages/account/register';

// Dashboard
import Dashboard from './pages/dashboard';
import RoomDetail from './pages/dashboard/rooms/detail';
import Settings from './pages/dashboard/settings';

const routes = [
	{
		path: pageRoutes.HOME_PAGE,
		element: <Home />,
	},
	{
		// path: pageRoutes.AUTH_BASE_PAGE,
		element: <AuthLayout />,
		children: [
			{
				path: pageRoutes.AUTHENTICATION_PAGE,
				element: <Authentication />,
			},
			{
				path: pageRoutes.FORGOT_PASSWORD_PAGE,
				element: <ForgotPassword />,
			},
			{
				path: pageRoutes.LOGIN_PAGE,
				element: <Login />,
			},
			{
				path: pageRoutes.REGISTER_PAGE,
				element: <Register />,
			},
		],
	},
	{
		path: pageRoutes.DASHBOARD_PAGE,
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				path: pageRoutes.DASHBOARD_PAGE,
				element: <Dashboard />,
			},
			{
				path: pageRoutes.ROOM_PAGE(':id'),
				element: <RoomDetail />,
			},
			{
				path: pageRoutes.SETTINGS_PAGE,
				element: <Settings />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
];

// Added errorElement for all pages
const erroredRoutes = routes.map((route) => ({
	...route,
	element: (
		<>
			{route.element}
			<ScrollRestoration />
		</>
	),
	errorElement: <Error />,
}));

const router = createBrowserRouter(erroredRoutes);

export default router;
