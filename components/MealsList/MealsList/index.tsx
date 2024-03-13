import { FlatList, View } from 'react-native';
import { MealType } from '../../../types';
import MealItem from '../MealItem';

import styles from './style';
const { container } = styles;

interface MealsListProps {
	meals: MealType[];
}

const MealsList = ({ meals }: MealsListProps) => {
	const renderMealItem = (itemData: { item: MealType }) => {
		return <MealItem mealItem={itemData.item} />;
	};

	return (
		<View style={container}>
			<FlatList
				data={meals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsList;
