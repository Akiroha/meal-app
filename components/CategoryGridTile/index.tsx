import React from 'react';
import { Pressable, View, Text } from 'react-native';

import styles from './styles';
const { gridItem, innerContainer, button, titleStyle, buttonPressed } = styles;

interface CategoryGridTileProps {
	title: string;
	color: string;
	onPress: () => void;
}

const CategoryGridTile = (props: CategoryGridTileProps) => {
	// props
	const { title, color, onPress } = props;

	return (
		<View style={gridItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => [button, pressed ? buttonPressed : null]}
				onPress={onPress}
			>
				<View style={[innerContainer, { backgroundColor: color }]}>
					<Text style={titleStyle}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryGridTile;
