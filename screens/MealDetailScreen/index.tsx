import { useRoute } from '@react-navigation/native';
import { Image, Text, View, ScrollView } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import MealDetails from '../../components/MealDetails';

interface MealDetailScreenProps {
	navigation: any;
}

import styles from './styles';
import Subtitle from '../../components/MealDetail/Subtitle';
import List from '../../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favorites';
import { StateType } from '../../store';

const {
	imageStyle,
	titleStyle,
	detailTextStyle,
	listContainer,
	listOuterContainer,
	rootContainer,
} = styles;

const MealDetailScreen = ({ navigation }: MealDetailScreenProps) => {
	const { params } = useRoute();
	const { mealId } = params as { mealId: string };
	const { ids } = useSelector((state: StateType) => state.favorites);
	const dispatch = useDispatch();

	const mealIsFavorite = ids.includes(mealId);

	const changeFavoriteStatusHandler = () => {
		if (mealIsFavorite) {
			dispatch(removeFavorite({ id: mealId }));
		} else {
			dispatch(addFavorite({ id: mealId }));
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						// name="star"
						name={mealIsFavorite ? 'star' : 'star-outline'}
						size={24}
						onPress={changeFavoriteStatusHandler}
						color="white"
					/>
				);
			},
		});
	}, [navigation, changeFavoriteStatusHandler]);

	const {
		imageUrl,
		title,
		affordability,
		complexity,
		duration,
		ingredients,
		steps,
	} = MEALS.find((meal) => meal.id === mealId);

	return (
		<ScrollView style={rootContainer}>
			<Image source={{ uri: imageUrl }} style={imageStyle} />
			<Text style={titleStyle}>{title}</Text>
			<MealDetails
				affordability={affordability}
				complexity={complexity}
				duration={duration}
				cascadingTextStyle={detailTextStyle}
			/>
			<View style={listOuterContainer}>
				<View style={listContainer}>
					<Subtitle title="Ingredients" />
					<List data={ingredients} />
					<Subtitle title="Steps" />
					<List data={steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;
