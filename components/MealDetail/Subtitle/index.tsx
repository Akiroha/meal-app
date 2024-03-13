import { View, Text } from 'react-native';

interface SubtitleProps {
	title: string;
}

import styles from './style';
const { subtitleStyle, subtitleContainerStyle } = styles;

const Subtitle = ({ title }: SubtitleProps) => {
	return (
		<View style={subtitleContainerStyle}>
			<Text style={subtitleStyle}>{title}</Text>
		</View>
	);
};

export default Subtitle;
