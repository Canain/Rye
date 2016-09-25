import Component, { React } from '../component';
import { View, Text } from 'react-native';
import * as Styles from '../styles';
import * as numeral from 'numeral';
import Localization from '../localization';
import FernButton from '../components/fernbutton';

export interface BorrowProps {
	rate: number;
	fee: number;
	onLoan: () => void;
}

export interface BorrowState {
	location?: string[];
}

export default class Borrow extends Component<BorrowProps, BorrowState> {
	
	constructor() {
		super();
		
		this.state = {
			location: ['United States', 'Georgia', 'Atlanta']
		};
	}
	
	render() {
		return (
			<View style={Styles.borrow}>
				<View style={Styles.borrowTop}>
					<Text style={Styles.borrowExplain}>{Localization.borrowExplain}</Text>
					<Text style={Styles.borrowExplain}>{Localization.location(this.state.location)}</Text>
				</View>
				<View style={Styles.borrowContent}>
					<Text style={Styles.borrowTotal}>{Localization.per(numeral(this.props.rate + this.props.fee).format('0.000%'), Localization.total, Localization.day)}</Text>
					<Text style={Styles.borrowRate}>{Localization.per(numeral(this.props.rate).format('0.000%'), Localization.rate, Localization.day)}</Text>
					<Text style={Styles.borrowFee}>{Localization.per(numeral(this.props.fee).format('0.000%'), Localization.fee, Localization.day)}</Text>
					<Text style={Styles.borrowTotal}>{Localization.per(numeral((this.props.rate + this.props.fee) * 30).format('0.00%'), Localization.total, Localization.month)}</Text>
					<Text style={Styles.borrowRate}>{Localization.per(numeral(this.props.rate * 30).format('0.000%'), Localization.rate, Localization.month)}</Text>
					<Text style={Styles.borrowFee}>{Localization.per(numeral(this.props.fee * 30).format('0.000%'), Localization.fee, Localization.month)}</Text>
				</View>
				<FernButton style={Styles.lendButton} onClick={this.props.onLoan}>{Localization.loan}</FernButton>
			</View>
		);
	}
}
