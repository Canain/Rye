import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import * as numeral from 'numeral';
import Localization from '../localization';
import Button from '../components/button';

export interface LendState {
	original?: number;
	current?: number;
}

export default class Lend extends Component<{}, LendState> {
	
	constructor() {
		super();
		
		this.state = {
			original: 1000,
			current: 1010.14
		};
	}
	
	get diff() {
		return this.state.current - this.state.original;
	}
	
	render() {
		return (
			<View style={Styles.lend}>
				<View style={Styles.lendTop}>
					<Text style={Styles.lendExplain}>{Localization.lendExplain}</Text>
					<Text style={Styles.lendCurrent}>{numeral(this.state.current).format('$0,0.00')}</Text>
					<Text style={this.diff < 0 ? Styles.lendDiffNegative : Styles.lendDiffPositive}>{`${this.diff > 0 ? '+' : ''}${numeral(this.diff).format('$0,0.00')}`}</Text>
				</View>
				<View style={Styles.lendBot}>
					<Button style={Styles.lendButton} textStyle={Styles.lendButtonText} underlayColor="#a6d5ab" activeOpacity={1}>{Localization.lendMore}</Button>
				</View>
			</View>
		);
	}
}