import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import Button from '../components/button';

export interface KeyProps {
	onClick?: () => void;
}

class Key extends Component<KeyProps, {}> {
	render() {
		return <Button style={Styles.key} textStyle={Styles.keyText} onClick={this.props.onClick}>{this.props.children}</Button>;
	}
}

class KeyRow extends Component<{}, {}> {
	render() {
		return <View style={Styles.keyRow}>{this.props.children}</View>
	}
}

export interface KeypadProps {
}

export default class Keypad extends Component<KeypadProps, {}> {
	render() {
		return (
			<View style={Styles.keypad}>
				<KeyRow>
					<Key>1</Key>
					<Key>2</Key>
					<Key>3</Key>
				</KeyRow>
				<KeyRow>
					<Key>4</Key>
					<Key>5</Key>
					<Key>6</Key>
				</KeyRow>
				<KeyRow>
					<Key>7</Key>
					<Key>8</Key>
					<Key>9</Key>
				</KeyRow>
				<KeyRow>
					<Key>.</Key>
					<Key>0</Key>
					<Key>{'<'}</Key>
				</KeyRow>
			</View>
		);
	}
}
