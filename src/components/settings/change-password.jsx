/* eslint-disable react/prop-types */
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';

import routes from '../../config/routes';
import { useNotificationContext } from '../../store/contexts';

function ChangePassword() {
	const [form, setForm] = React.useState({
		password1: '',
		password2: '',
	});

	const action = useActionData();
	const { state } = useNavigation();
	const { api } = useNotificationContext();

	const loading = React.useMemo(
		() => state === 'submitting' || state === 'loading',
		[state]
	);

	React.useEffect(() => {
		if (action?.data?.message && action?.data.for === 'password') {
			setForm({
				password1: '',
				password2: '',
			});
			api.success({
				message: 'Password updated',
				description: 'Password was updated successfully!',
			});
		}
	}, [action, api]);

	return (
		<Form className="w-full" method="post" action={routes.SETTINGS_PAGE}>
			<div className="my-5">
				<label
					className="block font-medium my-1 text-xs text-secondary-400"
					htmlFor="password1"
				>
					New Password
				</label>
				<Input.Password
					value={form.password1}
					onChange={({ target: { value } }) => {
						setForm((prevState) => ({
							...prevState,
							password1: value,
						}));
					}}
					disabled={loading}
					allowClear
					className="border-secondary-500 rounded-3xl"
					id="password1"
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
					name="password1"
					placeholder="**********"
					shape="round"
					size="large"
					// type="password"
				/>
			</div>
			<div className="my-5">
				<label
					className="block font-medium my-1 text-xs text-secondary-400"
					htmlFor="password2"
				>
					Re-enter New Password
				</label>
				<Input.Password
					value={form.password2}
					onChange={({ target: { value } }) => {
						setForm((prevState) => ({
							...prevState,
							password2: value,
						}));
					}}
					disabled={loading}
					allowClear
					className="border-secondary-500 rounded-3xl"
					id="password2"
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
					name="password2"
					placeholder="**********"
					shape="round"
					size="large"
					// type="password"
				/>
			</div>
			<div className="my-5">
				<Button
					block
					name="password"
					htmlType="submit"
					disabled={loading}
					loading={loading}
					size="large"
					shape="round"
					type="primary"
				>
					<span className="px-4 text-sm">Update</span>
				</Button>
			</div>
		</Form>
	);
}

export default ChangePassword;
