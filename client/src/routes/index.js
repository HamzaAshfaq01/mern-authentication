import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Home from '../screens/home/Home';
import SignIn from '../screens/auth/signin/Signin';
import SignUp from '../screens/auth/signup/Signup';
import ResetPasswordScreen from '../screens/auth/resetpassword/ResetPassword';
import ForgotPasswordScreen from '../screens/auth/forgotpassword/ForgotPassword';
import PrivatePage from '../screens/privates/Private';
import PrivateRoute from './privateRoutes/PrivateRoute';
import UserProfile from '../screens/privates/User';

const Routes = () => {
	return (
		<>
			<Header />
			<Container className='padtop-4'>
				<Route exact path='/' component={Home} />
				<Route path='/register' component={SignUp} />
				<Route path='/login' component={SignIn} />
				<Route path='/forgotpassword' component={ForgotPasswordScreen} />
				<Route
					path='/passwordreset/:resetToken'
					component={ResetPasswordScreen}
				/>
				<PrivateRoute path='/user' component={UserProfile} />
				<PrivateRoute path='/private' component={PrivatePage} />
			</Container>
		</>
	);
};

export default Routes;
