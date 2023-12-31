import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className="max-w-[400px] mx-auto p-6">
			{/* Logo */}
			<div className="h-[21px] mx-auto w-[120px] md:h-[32px] md:w-[181px]">
				<img
					className="h-full w-full md:hidden"
					src="/images/mobile-login-switchwise.png"
					alt="SwitchWise"
				/>
				<img
					className="hidden h-full w-full md:block"
					src="/images/desktop-login-switchwise.png"
					alt="SwitchWise"
				/>
			</div>
			{/* Logo */}

			<div className="bg-gray-50 my-4 rounded-lg p-6 shadow-lg">
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
