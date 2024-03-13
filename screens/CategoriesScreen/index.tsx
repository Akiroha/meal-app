import { FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../../components/CategoryGridTile';
import React from 'react';

const CategoriesScreen = ({ navigation }) => {
	const renderCategoryItem = (itemData: {
		item: { title: string; color: string; id: string };
	}) => {
		const pressHandler = () => {
			navigation.navigate('MealsOverview', {
				categoryId: itemData.item.id,
			});
		};

		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;
