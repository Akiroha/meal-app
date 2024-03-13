import { Text, View } from 'react-native';

interface ListProps {
	data: string[];
}

import styles from './style';
const { listItem, itemText } = styles;

const List = ({ data }: ListProps) => {
	return (
		<>
			{data.map((item) => (
				<View key={item} style={listItem}>
					<Text style={itemText}>{item}</Text>
				</View>
			))}
		</>
	);
};

export default List;
