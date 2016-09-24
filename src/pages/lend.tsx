import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import * as numeral from 'numeral';
import Localization from '../localization';
import FernButton from '../components/fernbutton';

export interface LendState {
	original?: number;
	current?: number;
	view?: 'overview' | 'more';
}

export default class Lend extends Component<{}, LendState> {
	
	constructor() {
		super();
		
		this.state = {
			original: 1000,
			current: 1010.14,
			view: 'overview'
		};
	}
	
	get diff() {
		return this.state.current - this.state.original;
	}
	
	render() {
		return {
			overview: (
				<View style={Styles.lend}>
					<View style={Styles.lendTop}>
						<Text style={Styles.lendExplain}>{Localization.lendExplain}</Text>
						<Text style={Styles.lendCurrent}>{numeral(this.state.current).format('$0,0.00')}</Text>
						<Text style={this.diff < 0 ? Styles.lendDiffNegative : Styles.lendDiffPositive}>{`${this.diff > 0 ? '+' : ''}${numeral(this.diff).format('$0,0.00')}`}</Text>
					</View>
					<FernButton style={Styles.lendButton} onClick={() => this.catch(this.update({view: 'more'}))}>{Localization.lendMore}</FernButton>
				</View>
			),
			more: (
				<View/>
			)
		}[this.state.view];
	}
}
