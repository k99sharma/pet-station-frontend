// importing components
import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import {
	Button,
	CircularProgress,
	FormControl,
	TextField,
	Typography,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// importing custom components
import Heading from '../Heading/Heading';
import UserAvatar from '../UserAvatar/UserAvatar';
import FileUpload from '../FileUpload/FileUpload';

// importing helper function
import {
	fetchUserData,
	updateUserData,
	updatePassword,
} from '../../utilities/helper';

// importing context
import AuthContext from '../../context/auth';

// header
function Header(props) {
	// props
	const { heading, subheading } = props;

	return (
		<div className="header">
			<Typography variant="h4" className="header-heading">
				{heading}
			</Typography>

			<Typography variant="h6" className="header-subheading">
				{subheading}
			</Typography>
		</div>
	);
}

// profile picture setting
function ProfilePictureSetting(props) {
	const { authCtx } = props;

	// state
	const [image, setImage] = useState(null);

	// handle profile upload
	const handleImageUpdate = async () => {
		const payload = {
			profilePictureUrl: image,
		};

		const res = await updateUserData(payload, authCtx.token);

		if (res.error) {
			alert('Pet cannot be created.');
		} else {
			alert(res.data);
			setImage(null);
		}
	};

	// query
	const { isLoading, error, data } = useQuery('user', () =>
		fetchUserData(authCtx.token)
	);

	if (isLoading) return <div>... Loading</div>;

	if (error) return <div>.. Error</div>;

	return (
		<div className="profilePictureSetting">
			<div className="profilePictureSetting-header">
				<Header
					heading="Profile Picture"
					subheading="Change your profile picture"
				/>
			</div>

			<div className="profilePictureSetting-avatar p-10 flex flex-col md:flex-row items-center justify-around">
				<div className="profilePictureSetting-avatar-img mb-5 md:mb-0">
					<UserAvatar
						profilePictureUrl={data.data.data.profilePictureUrl}
						name={data.data.data.firstName}
					/>
				</div>

				<div className="profilePictureSetting-avatar-edit">
					<FileUpload label="Upload" setFile={setImage} />

					<Button
						variant="contained"
						color="success"
						onClick={handleImageUpdate}
						disabled={image === null}
					>
						Update
					</Button>
				</div>
			</div>
		</div>
	);
}

// username setting
function UsernameSetting() {
	return (
		<div className="usernameSetting">
			<Header heading="Username" subheading="Change your username" />
		</div>
	);
}

// reset password setting
function ResetPasswordSetting(props) {
	// props
	const { authCtx } = props;

	// state
	const [showPassword, setShowPassword] = useState(false);

	// validation schema
	const validationSchema = Yup.object().shape({
		password: Yup.string('Enter your password')
			.min(8, 'Password should be minimum of 8 characters.')
			.required('Password is required'),
		confirmPassword: Yup.string('Confirm your password')
			.test(
				'is same',
				'Password does not match',
				(value, ctx) => value === ctx.parent.password
			)
			.required('Password confirmation is required'),
	});

	// handle form submission
	const handleSubmit = async (values, { resetForm }) => {
		const payload = {
			userId: authCtx.user.userId,
			password: values.password,
		};

		const res = await updatePassword(payload, authCtx.token);

		if (res.status === 'error' || res.status === 'fail') {
			alert(res.message);

			resetForm();
		} else {
			alert(res.msg);
		}
	};

	// form
	const formik = useFormik({
		initialValues: {
			password: '',
			confirmPassword: '',
		},
		validationSchema,
		onSubmit: handleSubmit,
	});

	return (
		<div className="resetPasswordSetting">
			<div className="resetPasswordSetting-header">
				<Header heading="Reset Password" subheading="Change your password" />
			</div>

			<div className="resetPasswordSetting-form p-10">
				<FormControl>
					<div className="mb-3">
						<TextField
							fullWidth
							id="password"
							name="password"
							label="Password"
							type={showPassword ? 'text' : 'password'}
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</div>

					<div className="mb-3">
						<TextField
							fullWidth
							id="confirmPassword"
							name="confirmPassword"
							label="Confirm Password"
							type={showPassword ? 'text' : 'password'}
							value={formik.values.confirmPassword}
							onChange={formik.handleChange}
							error={
								formik.touched.confirmPassword &&
								Boolean(formik.errors.confirmPassword)
							}
							helperText={
								formik.touched.confirmPassword && formik.errors.confirmPassword
							}
						/>
					</div>

					<div className="mb-3">
						<FormControlLabel
							onChange={() => {
								setShowPassword(!showPassword);
							}}
							control={<Checkbox />}
							label="Show Password"
						/>
					</div>

					<div className="my-3">
						{formik.isSubmitting ? (
							<CircularProgress />
						) : (
							<Button
								onClick={formik.handleSubmit}
								disabled={formik.isSubmitting}
								variant="contained"
								color="success"
								type="submit"
							>
								Update Password
							</Button>
						)}
					</div>
				</FormControl>
			</div>
		</div>
	);
}

// adoption component
export default function Settings() {
	// auth context
	const authCtx = useContext(AuthContext);

	return (
		<div className="settings box-container md:w-4/5 rounded-2xl p-5">
			{/* heading  */}
			<div className="settings-header mb-10">
				<Heading
					sticker="/assets/setting1.png"
					heading="Settings"
					subheading="Personalize your account"
				/>
			</div>

			{/* profile picture setting */}
			<div className="settings-profilePicture mb-5">
				<ProfilePictureSetting authCtx={authCtx} />
			</div>

			{/* username setting  */}
			<div className="settings-username mb-5">
				<UsernameSetting />
			</div>

			{/* password reset setting  */}
			<div className="settings-password mb-5">
				<ResetPasswordSetting authCtx={authCtx} />
			</div>
		</div>
	);
}
