import Component, { React } from '../component';
import { TouchableHighlight, Text, ViewStyle, TextStyle } from 'react-native';
import * as Styles from '../styles';

export interface ButtonProps {
	style?: ViewStyle;
	textStyle?: TextStyle;
	underlayColor?: string;
	activeOpacity?: number;
	onClick?: () => void;
	disabled?: boolean;
}

export default class Button extends Component<ButtonProps, {}> {
	render() {
		return (
			<TouchableHighlight style={this.props.style} onPress={this.props.onClick || (() => {})} underlayColor={this.props.underlayColor || 'transparent'} activeOpacity={typeof this.props.activeOpacity === 'undefined' ? 0.5 : this.props.activeOpacity} disabled={this.props.disabled}>
				<Text style={this.props.textStyle}>{this.props.children}</Text>
			</TouchableHighlight>
		);
	}
}
