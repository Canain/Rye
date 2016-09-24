import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import Button from '../components/button';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export interface KeypadState {
	amount?: number;
}

export interface KeypadProps {
	onChange: (amount: number) => void;
}

export default class Keypad extends Component<KeypadProps, KeypadState> {
	constructor() {
		super();
		
		this.state = {
			amount: 0
		};
	}
	
	async onClickNumber(value: number) {
		await this.update({
			amount: parseInt(this.state.amount.toString() + value)
		});
		this.props.onChange(this.state.amount);
	}
	
	async onDelete() {
		const text = this.state.amount.toString();
		await this.update({
			amount: text.length > 1 ? parseInt(text.substr(0, text.length - 1)) : 0
		});
		this.props.onChange(this.state.amount);
	}
	
	render() {
		return (
			<View style={Styles.keypad}>
				<KeyRow>
					<Key onClick={() => this.catch(this.onClickNumber(1))}>1</Key>
					<Key onClick={() => this.catch(this.onClickNumber(2))}>2</Key>
					<Key onClick={() => this.catch(this.onClickNumber(3))}>3</Key>
				</KeyRow>
				<KeyRow>
					<Key onClick={() => this.catch(this.onClickNumber(4))}>4</Key>
					<Key onClick={() => this.catch(this.onClickNumber(5))}>5</Key>
					<Key onClick={() => this.catch(this.onClickNumber(6))}>6</Key>
				</KeyRow>
				<KeyRow>
					<Key onClick={() => this.catch(this.onClickNumber(7))}>7</Key>
					<Key onClick={() => this.catch(this.onClickNumber(8))}>8</Key>
					<Key onClick={() => this.catch(this.onClickNumber(9))}>9</Key>
				</KeyRow>
				<KeyRow>
					<Key/>
					<Key onClick={() => this.catch(this.onClickNumber(0))}>0</Key>
					<Key onClick={this.attach(this.onDelete)}><Icon name="backspace" size={24}/></Key>
				</KeyRow>
			</View>
		);
	}
}
