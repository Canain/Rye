import Component, { React } from '../component';
import { ViewStyle, TextStyle } from 'react-native';
import Button from './button';
import * as Styles from '../styles';

export interface FernButtonProps {
	style?: ViewStyle;
	textStyle?: TextStyle;
	onClick?: () => void;
}

export default class FernButton extends Component<FernButtonProps, {}> {
	render() {
		return <Button style={Styles.mixin(Styles.fernButton, this.props.style)} textStyle={Styles.mixin(Styles.fernButtonText, this.props.textStyle)} onClick={this.props.onClick} underlayColor="#a6d5ab" activeOpacity={1}>{this.props.children}</Button>
	}
}
