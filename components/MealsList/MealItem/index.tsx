import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { MealType } from '../../../types';
import MealDetails from '../../MealDetails';
const {
	imageStyle,
	titleStyle,
	mealItemStyle,
	innerContainerStyle,
	buttonPressed,
} = styles;

interface MealItemProps {
	mealItem: MealType;
}

const MealItem = ({ mealItem }: MealItemProps) => {
	const { title, imageUrl, duration, complexity, affordability, id } = mealItem;

	const navigation = useNavigation();

	const handleMealItemPress = () => {
		// @ts-ignore
		navigation.navigate('MealDetail', { mealId: id });
	};

	return (
		<View style={mealItemStyle}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => (pressed ? buttonPressed : null)}
				onPress={handleMealItemPress}
			>
				<View style={innerContainerStyle}>
					<View>
						<Image style={imageStyle} source={{ uri: imageUrl }} />
						<Text style={titleStyle}>{title}</Text>
					</View>
					<MealDetails
						affordability={affordability}
						complexity={complexity}
						duration={duration}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;
