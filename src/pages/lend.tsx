import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import * as numeral from 'numeral';
import Localization from '../localization';
import FernButton from '../components/fernbutton';

export interface LendProps {
	original: number;
	current: number;
	onAdd: () => void;
}

export interface LendState {
}

export default class Lend extends Component<LendProps, LendState> {
	
	get diff() {
		return this.props.current - this.props.original;
	}
	
	render() {
		return (
			<View style={Styles.lend}>
				<View style={Styles.lendTop}>
					<Text style={Styles.lendExplain}>{Localization.lendExplain}</Text>
					<Text style={Styles.lendCurrent}>{numeral(this.props.current).format('$0,0.00')}</Text>
					<Text style={this.diff < 0 ? Styles.lendDiffNegative : Styles.lendDiffPositive}>{`${this.diff > 0 ? '+' : ''}${numeral(this.diff).format('$0,0.00')}`}</Text>
				</View>
				<FernButton style={Styles.lendButton} onClick={this.props.onAdd}>{Localization.lendMore}</FernButton>
			</View>
		);
	}
}
