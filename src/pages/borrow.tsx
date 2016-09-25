import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import * as numeral from 'numeral';
import Localization from '../localization';
import FernButton from '../components/fernbutton';

export interface BorrowProps {
	
}

export interface BorrowState {
	location?: string[];
	rate?: number;
	fee?: number;
}

export default class Borrow extends Component<BorrowProps, BorrowState> {
	
	constructor() {
		super();
		
		this.state = {
			location: ['United States', 'Georgia', 'Atlanta'],
			rate: 0.0004,
			fee: 0.00002
		};
	}
	
	render() {
		return (
			<View style={Styles.borrow}>
				<View style={Styles.borrowTop}>
					<Text style={Styles.borrowExplain}>{Localization.borrowExplain(this.state.location)}</Text>
					<Text style={Styles.borrowTotal}>{Localization.per(numeral(this.state.rate + this.state.fee).format('0.00%'), Localization.total, Localization.perday)}</Text>
					<Text style={Styles.borrowRate}>{Localization.per(numeral(this.state.rate).format('0.00%'), Localization.rate, Localization.perday)}</Text>
					<Text style={Styles.borrowFee}>{Localization.per(numeral(this.state.fee).format('0.00%'), Localization.fee, Localization.perday)}</Text>
					<Text style={Styles.borrowTotal}>{Localization.per(numeral((this.state.rate + this.state.fee) * 30).format('0.00%'), Localization.total, Localization.permonth)}</Text>
					<Text style={Styles.borrowRate}>{Localization.per(numeral(this.state.rate * 30).format('0.00%'), Localization.rate, Localization.permonth)}</Text>
					<Text style={Styles.borrowFee}>{Localization.per(numeral(this.state.fee * 30).format('0.00%'), Localization.fee, Localization.permonth)}</Text>
				</View>
				<FernButton style={Styles.lendButton}>{Localization.loan}</FernButton>
			</View>
		);
	}
}
