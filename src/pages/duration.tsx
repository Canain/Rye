import Component, { React } from '../component';
import { View, Text, Picker } from 'react-native';
import Modal from '../components/modal';
import Localization from '../localization';
import * as Styles from '../styles';
import Keypad from '../components/keypad';
import * as moment from 'moment';
import * as numeral from 'numeral';

export interface DurationProps {
	loan: number;
	total: number;
	onBack: () => void;
	onDone: () => void;
}

export interface DurationState {
	days?: number;
	max?: number;
}

export default class Duration extends Component<DurationProps, DurationState> {
	constructor() {
		super();
		
		this.state = {
			max: 60,
			days: 0
		};
	}
	
	render() {
		return (
			<Modal onBack={this.props.onBack} title={Localization.durationTitle(numeral(this.props.loan).format('$0,0.00'))} onDone={this.props.onDone} disabled={this.state.days > this.state.max}>
				<Text style={this.state.days > this.state.max ? Styles.loanLimitRed : Styles.loanLimit}>{Localization.durationLimit(this.state.max)}</Text>
				<View style={Styles.add}>
					<View style={Styles.addTop}>
						<Text style={this.state.days > this.state.max ? Styles.loanAmountRed : Styles.addAmount}>{Localization.days(this.state.days)}</Text>
						<Text style={Styles.loanDay}>{Localization.due(moment().add(this.state.days, 'days').calendar())}</Text>
						<Text style={Styles.loanDay}>{Localization.durationTotal(numeral(this.props.loan * this.props.total * this.state.days).format('$0,0.00'))}</Text>
					</View>
					<View style={Styles.addBot}><Keypad onChange={amount => this.catch(this.update({days: amount}))}/></View>
				</View>
			</Modal>
		);
	}
}
