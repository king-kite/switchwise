/* eslint-disable react/prop-types */
import {
	CaretDownOutlined,
	CaretRightOutlined,
	CloseOutlined,
	LeftSquareOutlined,
	LogoutOutlined,
	HomeOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';

import routes from '../config/routes';

const sidebarStyle =
	'bg-white duration-1000 h-full ml-auto overflow-y-auto relative shadow-lg transform w-3/5 md:px-2 md:w-1/3 lg:bg-gray-100 lg:px-0 lg:py-4 lg:translate-x-0 lg:w-full';

const activeLinkClasses = 'bg-primary-500 text-gray-100 tracking-widest';
const inactiveLinkClasses =
	'duration-500 text-secondary-500 transform transition hover:bg-primary-500 hover:text-gray-100 hover:tracking-widest';

const DefaultIcon = () => <></>;

function SimpleLink({ href = '#', icon: Icon = DefaultIcon, onClick, title }) {
	const value = useMatch(href);
	const isActive = React.useMemo(() => value !== null, [value]);

	return (
		<Link
			className={`${
				isActive ? activeLinkClasses : inactiveLinkClasses
			} cursor-pointer flex font-semibold items-center no-underline p-4 rounded-sm text-sm`}
			to={href}
			onClick={onClick}
		>
			<span className="mr-2">
				<Icon />
			</span>
			<span className="">{title}</span>
		</Link>
	);
}

function ListLink({ icon: Icon, onClick, links, title }) {
	const [visible, setVisible] = React.useState(false);

	const isActive = false;

	return (
		<div>
			<div
				onClick={() => setVisible(!visible)}
				className={`${
					isActive === 0 ? activeLinkClasses : inactiveLinkClasses
				} cursor-pointer flex font-semibold items-center justify-between no-underline p-4 rounded-sm text-sm`}
			>
				<div className="flex items-center">
					<span className="mr-2">
						<Icon />
					</span>
					<span className="">{title}</span>
				</div>
				<div>
					{visible ? (
						<CaretDownOutlined className="text-xs" />
					) : (
						<CaretRightOutlined className="text-tiny" />
					)}
				</div>
			</div>
			<div
				className={`${
					visible ? 'block opacity-100 visible' : 'hidden invisible opacity-0'
				} duration-500 px-3 transform transition-all`}
			>
				{links.map(({ href, title }, index) => {
					const activeLinkClasses =
						'bg-primary-50 text-primary-500 tracking-widest';
					const inactiveLinkClasses =
						'duration-500 text-secondary-500 transform transition hover:bg-primary-50 hover:text-primary-500 hover:tracking-widest';
					return (
						<Link
							key={index}
							className={`${
								isActive === 0 ? activeLinkClasses : inactiveLinkClasses
							} cursor-pointer flex font-semibold items-center no-underline px-6 py-3 rounded-sm text-sm`}
							to={href}
							onClick={onClick}
						>
							<span className="">{title}</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setVisible, visible }, ref) => {
	const links = React.useMemo(
		() => [
			{
				icon: LeftSquareOutlined,
				title: 'Home',
				href: routes.DASHBOARD_PAGE,
			},
			{
				icon: HomeOutlined,
				title: 'Rooms',
				links: [
					{
						title: 'Living Room',
						href: routes.ROOM_PAGE('living-room'),
					},
					{
						title: 'Bedroom 1',
						href: routes.ROOM_PAGE('bedroom-1'),
					},
					{
						title: 'Bedroom 2',
						href: routes.ROOM_PAGE('bedroom-2'),
					},
					{
						title: 'Others',
						href: routes.ROOM_PAGE('others'),
					},
				],
			},
			{
				icon: SettingOutlined,
				title: 'Settings',
				href: routes.SETTINGS_PAGE,
			},
		],
		[]
	);

	return (
		<nav
			className={`${
				visible ? 'opacity-100 z-100' : 'opacity-0 z-[-100]'
			} duration-500 fixed h-full left-0 top-0 overflow-x-hidden w-full lg:opacity-100 lg:shadow-lg lg:w-1/5 lg:z-0`}
			ref={ref}
			style={{
				backgroundColor: 'rgba(0, 0, 0, 0.2)',
			}}
		>
			<div
				className={`${
					visible ? 'translate-x-0' : 'translate-x-full'
				} ${sidebarStyle}`}
			>
				<div className="flex items-center justify-between px-4 py-5 lg:hidden">
					<span
						className="cursor-pointer duration-300 text-color-primary text-lg transform transition hover:scale-105"
						onClick={() => setVisible(false)}
					>
						<CloseOutlined />
					</span>
					<span className="cursor-pointer duration-300 text-color-primary text-lg transform transition hover:scale-105">
						<UserOutlined />
					</span>
				</div>
				<div className="hidden p-4 pt-0 md:block">
					<div className="h-[24px] w-[150px]">
						<img
							className="hidden h-full w-full md:block"
							src="/images/desktop-login-switchwise.png"
							alt="SwitchWise"
						/>
					</div>
				</div>
				<div className="mt-3">
					{links.map((props, index) => {
						return props.links ? (
							<ListLink key={index} {...props} />
						) : (
							<SimpleLink key={index} {...props} />
						);
					})}
				</div>
				<div className="absolute bottom-10 px-4 w-full">
					<Button block type="ghost">
						<p className="flex items-center text-red-500 text-sm">
							<span className="mr-2">
								<LogoutOutlined />
							</span>
							Logout
						</p>
					</Button>
				</div>
			</div>
		</nav>
	);
};

Sidebar.displayName = 'Sidebar';

const Component = React.forwardRef(Sidebar);

export default Component;
