import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		// android
		elevation: 4,
		// ios
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	titleStyle: {
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default styles;
