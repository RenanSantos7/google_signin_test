import { useAuthContext } from '../context/authContext';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
	const { isSignedIn } = useAuthContext();

	return isSignedIn ? <AppRoutes /> : <AuthRoutes />;
}
