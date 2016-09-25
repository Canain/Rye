import Component, { React } from '../component';
import { View, Text } from 'react-native';
import Modal from '../components/modal';
import Localization from '../localization';
import * as numeral from 'numeral';
import * as Styles from '../styles';
import Keypad from '../components/keypad';

export interface LoanProps {
	total: number;
	onBack: () => void;
	onDone: () => void;
}

export interface LoanState {
	amount?: number;
}

export default class Loan extends Component<LoanProps, LoanState> {
	constructor() {
		super();
		
		this.state = {
			amount: 0
		};
	}
	
	render() {
		return (
			<Modal onBack={this.props.onBack} title={Localization.loanTitle} onDone={this.props.onDone}>
				<View style={Styles.add}>
					<View style={Styles.addTop}>
						<Text style={Styles.addAmount}>{numeral(this.state.amount).format('$0,0.00')}</Text>
					</View>
					<View style={Styles.addBot}><Keypad onChange={amount => this.catch(this.update({amount: amount / 100}))}/></View>
				</View>
			</Modal>
		);
	}
}
