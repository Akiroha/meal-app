import { View, Text } from 'react-native';

import styles from './style';
const { detailsStyle, detailItemStyle } = styles;

interface MealDetailsProps {
	duration: number;
	complexity: string;
	affordability: string;
	cascadingViewStyle?: any;
	cascadingTextStyle?: any;
}

const MealDetails = ({
	duration,
	complexity,
	affordability,
	cascadingViewStyle,
	cascadingTextStyle,
}: MealDetailsProps) => {
	return (
		<View style={[detailsStyle, cascadingViewStyle]}>
			<Text style={[detailItemStyle, cascadingTextStyle]}>{duration}</Text>
			<Text style={[detailItemStyle, cascadingTextStyle]}>
				{complexity.toUpperCase()}
			</Text>
			<Text style={[detailItemStyle, cascadingTextStyle]}>
				{affordability.toUpperCase()}
			</Text>
		</View>
	);
};

export default MealDetails;
