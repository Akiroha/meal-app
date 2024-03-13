import MealsList from '../../components/MealsList/MealsList';
import { MEALS } from '../../data/dummy-data';
import { Text, View } from 'react-native';

import styles from './style';
import { useSelector } from 'react-redux';
import { StateType } from '../../store';
const { rootContainer, text } = styles;

const FavoritesScreen = () => {
	const { ids } = useSelector((state: StateType) => state.favorites);

	const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

	if (favoriteMeals.length === 0) {
		return (
			<View style={rootContainer}>
				<Text style={text}>No favorite meals found. Start adding some!</Text>
			</View>
		);
	}

	return <MealsList meals={favoriteMeals} />;
};

export default FavoritesScreen;
