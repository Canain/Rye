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
	limit?: number;
}

export default class Loan extends Component<LoanProps, LoanState> {
	constructor() {
		super();
		
		this.state = {
			amount: 0,
			limit: 10000
		};
	}
	
	render() {
		return (
			<Modal onBack={this.props.onBack} title={Localization.loanTitle} onDone={this.props.onDone} disabled={this.state.amount > this.state.limit}>
				<Text style={this.state.amount > this.state.limit ? Styles.loanLimitRed : Styles.loanLimit}>{Localization.loanLimit(numeral(this.state.limit).format('$0,0.00'))}</Text>
				<View style={Styles.add}>
					<View style={Styles.addTop}>
						<Text style={this.state.amount > this.state.limit ? Styles.loanAmountRed : Styles.addAmount}>{numeral(this.state.amount).format('$0,0.00')}</Text>
						<Text style={Styles.loanDay}>{Localization.per(numeral(this.state.amount * this.props.total).format('$0,0.00'), Localization.total, Localization.day)}</Text>
						<Text style={Styles.loanMonth}>{Localization.per(numeral(this.state.amount * this.props.total * 30).format('$0,0.00'), Localization.total, Localization.month)}</Text>
					</View>
					<View style={Styles.addBot}><Keypad onChange={amount => this.catch(this.update({amount: amount / 100}))}/></View>
				</View>
			</Modal>
		);
	}
}
