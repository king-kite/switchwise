import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary';
import CheckAuth from './layout/protections/check-auth';
import router from './routes';
import store from './store';
import NotificationProvider from './store/contexts/notification/provider';

function App() {
	return (
		<Provider store={store}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#1DA1F2',
					},
				}}
			>
				<ErrorBoundary>
					<NotificationProvider>
						<CheckAuth>
							<RouterProvider router={router} />
						</CheckAuth>
					</NotificationProvider>
				</ErrorBoundary>
			</ConfigProvider>
		</Provider>
	);
}

export default App;
