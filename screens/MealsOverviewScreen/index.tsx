import { MEALS, CATEGORIES } from '../../data/dummy-data';
import { useRoute } from '@react-navigation/native';

import { useLayoutEffect } from 'react';
import MealsList from '../../components/MealsList/MealsList';

interface MealsOverviewScreenProps {
	navigation: any;
}

const MealsOverviewScreen = (props: MealsOverviewScreenProps) => {
	const { navigation } = props;
	const { params } = useRoute();
	const { categoryId } = params as { categoryId: string };

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === categoryId
		);

		navigation.setOptions({ title: categoryTitle?.title });
	}, [navigation, categoryId]);

	const displayedMeals = MEALS.filter((mealItem) =>
		mealItem.categoryIds.includes(categoryId)
	);

	return <MealsList meals={displayedMeals} />;
};

export default MealsOverviewScreen;
