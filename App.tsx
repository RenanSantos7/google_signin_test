import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/context/authContext';
import Routes from './src/routes';
import Loading from './src/components/Loading';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
				<StatusBar style='auto' />
				<Loading />
			</AuthProvider>
		</NavigationContainer>
	);
}
