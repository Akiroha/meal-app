import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	imageStyle: {
		width: '100%',
		height: 200,
	},
	titleStyle: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		margin: 8,
	},
	mealItemStyle: {
		margin: 16,
		borderRadius: 8,
		backgroundColor: 'white',
		// android
		elevation: 4,
		// ios
		shadowColor: 'black',
		shadowOpacity: 0.35,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 16,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	innerContainerStyle: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	buttonPressed: {
		opacity: 0.5,
	},
});

export default styles;
