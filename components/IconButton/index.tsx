import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

interface IconButtonProps {
	onPress: () => void;
	name: string;
	color: string;
	size: number;
}

const { pressedStyle } = styles;

const IconButton = ({ onPress, name, color, size }: IconButtonProps) => {
	return (
		<Pressable onPress={onPress} style={(pressed) => pressed && pressedStyle}>
			{/* @ts-ignore */}
			<Ionicons name={name} size={size} color={color} />
		</Pressable>
	);
};

export default IconButton;
