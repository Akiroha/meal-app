import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import store from './store';

export default function App() {
	const DrawerNavigator = () => {
		return (
			<Drawer.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: '#351401' },
					headerTintColor: 'white',
					sceneContainerStyle: { backgroundColor: '#3f2f25' },
					drawerContentStyle: { backgroundColor: '#351401' },
					drawerInactiveTintColor: 'white',
					drawerActiveTintColor: '#351401',
					drawerActiveBackgroundColor: '#e4baa1',
				}}
			>
				<Drawer.Screen
					name="Categories"
					component={CategoriesScreen}
					options={{
						title: 'All Categories',
						drawerIcon: ({ color, size }) => (
							<Ionicons name="list" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="Favorites"
					component={FavoritesScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons name="star" size={size} color={color} />
						),
					}}
				/>
			</Drawer.Navigator>
		);
	};

	return (
		<>
			<StatusBar style="light" />
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: '#351401' },
							headerTintColor: 'white',
							contentStyle: { backgroundColor: '#3f2f25' },
						}}
					>
						<Stack.Screen
							name="Drawer"
							// component={CategoriesScreen}
							component={DrawerNavigator}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
						/>
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
							options={{ title: 'About the Meal' }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
