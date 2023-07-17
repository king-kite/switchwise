export const HOME_PAGE = '/';

// Auth
export const AUTH_BASE_PAGE = '/account';
export const AUTHENTICATION_PAGE = AUTH_BASE_PAGE + '/authentication';
export const FORGOT_PASSWORD_PAGE = AUTH_BASE_PAGE + '/forgot-password';
export const LOGIN_PAGE = AUTH_BASE_PAGE + '/login';
export const REGISTER_PAGE = AUTH_BASE_PAGE + '/register';

// Dashboard
export const DASHBOARD_PAGE = '/dashboard';
export const ROOM_PAGE = (id) => '/dashboard/rooms/' + id;
export const SETTINGS_PAGE = '/dashboard/settings';

const routes = {
	// Auth
	AUTH_BASE_PAGE,
	AUTHENTICATION_PAGE,
	FORGOT_PASSWORD_PAGE,
	HOME_PAGE,
	LOGIN_PAGE,
	REGISTER_PAGE,

	// Dashboard
	DASHBOARD_PAGE,
	SETTINGS_PAGE,
	ROOM_PAGE,
};

export default routes;
